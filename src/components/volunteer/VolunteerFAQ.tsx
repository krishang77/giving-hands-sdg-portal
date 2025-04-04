
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VolunteerFAQ = () => {
  const faqs = [
    {
      question: "What are the requirements to become a volunteer?",
      answer: "To volunteer with GivingHands, you must be at least 18 years old, complete our background check process, and attend our volunteer orientation. Specific opportunities may have additional requirements based on the nature of the work."
    },
    {
      question: "How much time do I need to commit?",
      answer: "We offer flexible volunteering opportunities to fit various schedules. Some roles require a regular weekly commitment (typically 2-4 hours), while others are project-based or one-time opportunities. You can indicate your availability preferences when you sign up."
    },
    {
      question: "Is training provided for volunteers?",
      answer: "Yes, all volunteers receive a general orientation, and role-specific training is provided for specialized positions. We ensure you have the knowledge and resources needed to be successful in your volunteer role."
    },
    {
      question: "Can I volunteer remotely?",
      answer: "Yes, we offer several remote volunteering opportunities, such as virtual companionship, administrative support, and digital coaching. These roles allow you to make an impact from anywhere."
    },
    {
      question: "How are volunteers matched with elderly individuals?",
      answer: "We carefully match volunteers and elderly individuals based on shared interests, schedule compatibility, location, and specific needs. Our goal is to create meaningful connections that benefit both the volunteer and the elderly person."
    },
    {
      question: "Can I volunteer as a group (family, friends, or colleagues)?",
      answer: "Absolutely! We welcome group volunteering and can arrange special projects or events that accommodate multiple volunteers working together. Please contact our volunteer coordinator to discuss group opportunities."
    }
  ];

  return (
    <section className="bg-sage-50 py-16">
      <div className="container-custom">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline hover:bg-sage-50/50 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Don't see your question answered here?</p>
          <p className="text-primary font-medium">
            Contact our volunteer coordinator at <a href="mailto:volunteer@givinghands.org" className="underline">volunteer@givinghands.org</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default VolunteerFAQ;
