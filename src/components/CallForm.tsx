import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";

const CallForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    prospeccao: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://webhook.automacaodigital360.com/webhook/formularioligacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Formulário enviado com sucesso!');
        // Aqui você pode adicionar uma mensagem de sucesso ou redirecionamento
      } else {
        console.error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
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
        {/* Título e Headline no topo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Teste agora a IA da Automação360
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em poucos segundos, você recebe uma ligação real e entende como automatizar sua prospecção com qualidade humana.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Card com Formulário */}
          <Card className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">
                Receba uma Ligação da IA
              </h3>
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
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                Ao solicitar a ligação, você autoriza o contato da Automação360. A ligação é uma demonstração comercial da nossa tecnologia.
              </p>
            </form>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default CallForm;
