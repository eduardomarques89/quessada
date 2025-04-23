import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

export function LeadForm() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Agendamento Recebido!",
      description: "Em breve nossa equipe entrará em contato.",
    });
  };

  return (
    <section className="py-20 bg-black" id="lead-form">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-lg mx-auto bg-[#232832] border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-white">
                Agende sua Avaliação Gratuita
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Nome Completo</Label>
                  <Input 
                    id="name" 
                    required 
                    placeholder="Digite seu nome" 
                    className="bg-[#1A1F2C] border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">Telefone</Label>
                  <Input 
                    id="phone" 
                    required 
                    placeholder="(00) 00000-0000"
                    className="bg-[#1A1F2C] border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">E-mail</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    placeholder="seu@email.com"
                    className="bg-[#1A1F2C] border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-300">Serviço Desejado</Label>
                  <Select>
                    <SelectTrigger className="bg-[#1A1F2C] border-gray-700 text-white">
                      <SelectValue placeholder="Selecione o serviço" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#232832] border-gray-700">
                      <SelectItem value="polimento" className="text-white hover:bg-[#1A1F2C]">Polimento Cristalizado</SelectItem>
                      <SelectItem value="ceramica" className="text-white hover:bg-[#1A1F2C]">Proteção Cerâmica</SelectItem>
                      <SelectItem value="higienizacao" className="text-white hover:bg-[#1A1F2C]">Higienização Completa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full">
                  Agendar Agora
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
