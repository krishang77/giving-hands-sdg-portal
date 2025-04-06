
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MapPin, Cloud, Sun, CloudRain, Wind, Thermometer } from 'lucide-react';

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
  };
}

const WeatherInfo = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city.trim()) {
      toast.error("Please enter a city name");
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=397b631558664d93b0a164726232304&q=${encodeURIComponent(city)}&aqi=no`
      );
      
      if (!response.ok) {
        throw new Error('Weather data not available');
      }
      
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      console.error('Error fetching weather:', err);
      setError('Unable to fetch weather information. Please try again.');
      toast.error('Weather information not available for this location');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  const getWeatherIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes('sun') || lowerCondition.includes('clear')) {
      return <Sun className="h-10 w-10 text-yellow-500" />;
    } else if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle')) {
      return <CloudRain className="h-10 w-10 text-blue-500" />;
    } else if (lowerCondition.includes('cloud') || lowerCondition.includes('overcast')) {
      return <Cloud className="h-10 w-10 text-gray-500" />;
    } else {
      return <Cloud className="h-10 w-10 text-gray-500" />;
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="card-custom">
        <CardHeader>
          <CardTitle className="text-xl">Weather Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-grow"
              />
              <Button onClick={fetchWeather} disabled={loading}>
                {loading ? 'Loading...' : 'Check'}
              </Button>
            </div>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>

          {weather && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    <h2 className="text-xl font-semibold">{weather.location.name}</h2>
                  </div>
                  <p className="text-muted-foreground text-sm ml-7">
                    {weather.location.region}, {weather.location.country}
                  </p>
                </div>
                {getWeatherIcon(weather.current.condition.text)}
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-primary/10 p-3 rounded-lg flex items-center">
                  <Thermometer className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Temperature</p>
                    <p className="font-medium">{weather.current.temp_c}°C / {weather.current.temp_f}°F</p>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-3 rounded-lg flex items-center">
                  <Wind className="h-5 w-5 mr-2 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Wind</p>
                    <p className="font-medium">{weather.current.wind_kph} km/h</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                <p className="text-center font-medium">{weather.current.condition.text}</p>
                <p className="text-center text-sm text-muted-foreground">
                  Feels like: {weather.current.feelslike_c}°C
                </p>
              </div>
              
              <div className="text-sm text-center text-muted-foreground mt-4">
                <p>This information can help when planning outdoor activities for elderly care.</p>
              </div>
            </div>
          )}
          
          {!weather && !loading && !error && (
            <div className="text-center py-8 text-muted-foreground">
              <Cloud className="h-16 w-16 mx-auto mb-4 text-muted" />
              <p>Enter a city name to check the current weather</p>
              <p className="text-sm mt-2">
                Weather information helps elderly plan outdoor activities safely
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherInfo;
