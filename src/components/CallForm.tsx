import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Check, Phone } from "lucide-react";

const CallForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    prospeccao: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna Esquerda - Formulário */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Teste agora a IA da Automação360
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Em poucos segundos, você recebe uma ligação real e entende como automatizar sua prospecção com qualidade humana.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span className="text-muted-foreground">Ligação imediata</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤖</span>
                  <span className="text-muted-foreground">Conversa real com IA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📊</span>
                  <span className="text-muted-foreground">Apresentação personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚀</span>
                  <span className="text-muted-foreground">Experiência completa</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nome" className="text-base font-semibold">
                  Nome Completo *
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  placeholder="Como você gostaria de ser chamado?"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="telefone" className="text-base font-semibold">
                  Telefone com WhatsApp *
                </Label>
                <Input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Certifique-se de que o número está ativo para receber a ligação
                </p>
              </div>


              <div>
                <Label className="text-base font-semibold">
                  Sua empresa já faz prospecção por ligações? *
                </Label>
                <div className="flex space-x-6 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="prospeccao"
                      value="sim"
                      checked={formData.prospeccao === "sim"}
                      onChange={handleChange}
                      className="text-primary"
                    />
                    <span>Sim</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="prospeccao"
                      value="nao"
                      checked={formData.prospeccao === "nao"}
                      onChange={handleChange}
                      className="text-primary"
                    />
                    <span>Não</span>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-lg py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Receber Ligação da IA Agora
              </Button>
            </form>
          </div>

          {/* Coluna Direita - Informações */}
          <div className="space-y-8">

            {/* Resultados Comprovados */}
            <Card className="p-6 bg-primary text-primary-foreground">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-4">Resultados Comprovados</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold">98%</div>
                      <div className="text-sm opacity-90">Ficam Impressionados</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">5 min</div>
                      <div className="text-sm opacity-90">Duração Média</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Depoimento */}
            <Card className="p-6">
              <blockquote className="text-muted-foreground italic mb-4">
                "Ontem fiquei 10 minutos no telefone conversando com a IA e já não sei se realmente é IA, foi muito longe a conversa"
              </blockquote>
              <cite className="text-sm font-semibold">- Guilherme, CEO Alves Pacheco</cite>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForm;
