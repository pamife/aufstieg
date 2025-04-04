import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Extend the schema with more validation
const contactFormSchema = insertContactMessageSchema.extend({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein" }),
  email: z.string().email({ message: "Gültige E-Mail-Adresse erforderlich" }),
  subject: z.string().min(3, { message: "Betreff muss mindestens 3 Zeichen lang sein" }),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" }),
  privacy: z.boolean().refine((val) => val === true, { message: "Sie müssen der Datenschutzerklärung zustimmen" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      privacy: false
    }
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      const result = await response.json();
      
      toast({
        title: "Erfolg!",
        description: result.message,
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Fehler",
        description: error instanceof Error ? error.message : "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="kontakt" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
            Kontakt
          </h2>
          <p className="max-w-3xl mx-auto text-neutral-600">
            Haben Sie Fragen oder möchten Sie mit uns in Kontakt treten? Nutzen Sie unser Kontaktformular oder die untenstehenden Kontaktmöglichkeiten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-neutral-100 p-6 rounded-lg shadow-sm">
            <h3 className="font-['Playfair_Display',serif] text-2xl font-bold mb-4">Schreiben Sie uns</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Name*</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ihr Name" 
                          {...field} 
                          className="px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">E-Mail*</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Ihre E-Mail-Adresse" 
                          type="email" 
                          {...field} 
                          className="px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Betreff*</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Betreff Ihrer Nachricht" 
                          {...field} 
                          className="px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Nachricht*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Ihre Nachricht an uns" 
                          rows={5} 
                          {...field} 
                          className="px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange} 
                          className="mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Ich stimme der <a href="#" className="text-[#0B3D91] hover:underline">Datenschutzerklärung</a> zu und erlaube der DAP, meine Daten zu verarbeiten.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-[#0B3D91] hover:bg-[#072A66] text-white font-bold px-6 py-3 rounded-md transition-colors w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-neutral-100 p-6 rounded-lg shadow-sm mb-8">
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold mb-4">Kontaktdaten</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-[#0B3D91] mr-3 mt-1">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Adresse</h4>
                    <address className="not-italic text-neutral-700">
                      DAP – Die Aufstiegspartei<br />
                      Musterstraße 123<br />
                      10115 Berlin<br />
                      Deutschland
                    </address>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#0B3D91] mr-3 mt-1">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Telefon</h4>
                    <p className="text-neutral-700">+49 (0) 30 123456789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#0B3D91] mr-3 mt-1">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">E-Mail</h4>
                    <p className="text-neutral-700">info@dap-partei.de</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-neutral-100 p-6 rounded-lg shadow-sm">
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold mb-4">Folgen Sie uns</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#1DA1F2] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="bg-[#4267B2] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="bg-[#C13584] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="bg-[#0077B5] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="#" className="bg-[#FF0000] text-white p-3 rounded-full hover:opacity-90 transition-opacity">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
