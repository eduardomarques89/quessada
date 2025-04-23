
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

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
    <section className="py-20 bg-white" id="lead-form">
      <div className="container mx-auto px-4">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Agende sua Avaliação Gratuita
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" required placeholder="Digite seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" required placeholder="(00) 00000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" required placeholder="seu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Serviço Desejado</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="polimento">Polimento Cristalizado</SelectItem>
                    <SelectItem value="ceramica">Proteção Cerâmica</SelectItem>
                    <SelectItem value="higienizacao">Higienização Completa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                Agendar Agora
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
