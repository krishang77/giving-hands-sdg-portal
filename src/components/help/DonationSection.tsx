
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const DonationSection = () => {
  const [donationAmount, setDonationAmount] = useState("50");
  const [isMonthly, setIsMonthly] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = donationAmount === "custom" ? customAmount : donationAmount;
    toast.success(
      `Thank you for your ${isMonthly ? "monthly" : "one-time"} donation of $${amount}!`,
      {
        description: "Your generosity helps us support elderly individuals in need.",
      }
    );
  };

  return (
    <section className="bg-sage-50 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">Make a Donation</h2>
          <p className="section-subtitle">
            Your financial support helps us expand our reach and impact in elderly care.
          </p>
          
          <Card className="p-6 md:p-8 bg-white rounded-2xl shadow-md mt-8">
            <form onSubmit={handleDonationSubmit}>
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Button
                    type="button"
                    variant={isMonthly ? "outline" : "default"}
                    className={`w-1/2 rounded-full ${!isMonthly ? "bg-primary" : ""}`}
                    onClick={() => setIsMonthly(false)}
                  >
                    One-time
                  </Button>
                  <Button
                    type="button"
                    variant={!isMonthly ? "outline" : "default"}
                    className={`w-1/2 rounded-full ${isMonthly ? "bg-primary" : ""}`}
                    onClick={() => setIsMonthly(true)}
                  >
                    Monthly
                  </Button>
                </div>
                
                <RadioGroup 
                  value={donationAmount} 
                  onValueChange={setDonationAmount}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {["25", "50", "100", "250"].map((amount) => (
                    <div key={amount}>
                      <RadioGroupItem 
                        value={amount} 
                        id={`amount-${amount}`} 
                        className="sr-only"
                      />
                      <Label
                        htmlFor={`amount-${amount}`}
                        className={`flex items-center justify-center px-4 py-3 rounded-full border-2 cursor-pointer transition-all ${
                          donationAmount === amount 
                            ? "border-primary bg-primary/10 text-primary font-medium" 
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        ${amount}
                      </Label>
                    </div>
                  ))}
                  
                  <div className="col-span-2 md:col-span-4">
                    <RadioGroupItem 
                      value="custom" 
                      id="amount-custom" 
                      className="sr-only"
                    />
                    <Label
                      htmlFor="amount-custom"
                      className={`flex items-center justify-center px-4 py-3 rounded-full border-2 cursor-pointer transition-all ${
                        donationAmount === "custom" 
                          ? "border-primary bg-primary/10" 
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="mr-2">Custom Amount</span>
                      <Input
                        type="number"
                        placeholder="$"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonationAmount("custom");
                        }}
                        onClick={() => setDonationAmount("custom")}
                        className="w-24 border-none p-0 h-auto focus-visible:ring-0 text-center"
                      />
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Your donation will help:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Provide companionship and assistance to isolated elderly individuals</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Support health and wellness programs for aging community members</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Create accessible community spaces for elderly engagement</span>
                  </li>
                </ul>
              </div>
              
              <Button type="submit" className="w-full btn-primary">
                {isMonthly ? "Start Monthly Donation" : "Donate Now"}
              </Button>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                Your donation is tax-deductible. You will receive a receipt via email.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
