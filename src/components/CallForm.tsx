import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, Users, Clock } from "lucide-react";

const CallForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    equipe: "",
    cargo: "",
    prospeccao: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
              <h2 className="text-4xl font-bold mb-6">
                Receba uma Ligação da IA
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Ligação em até 30 segundos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Demonstração real da tecnologia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Apresentação comercial personalizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Experiência personalizada</span>
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
                <Label htmlFor="equipe" className="text-base font-semibold">
                  Quantas pessoas você tem na equipe de vendas? *
                </Label>
                <Select
                  id="equipe"
                  name="equipe"
                  value={formData.equipe}
                  onChange={handleChange}
                  required
                  className="mt-2"
                >
                  <option value="">Selecione o tamanho da sua equipe</option>
                  <option value="1-5">1-5 pessoas</option>
                  <option value="6-15">6-15 pessoas</option>
                  <option value="16-50">16-50 pessoas</option>
                  <option value="50+">Mais de 50 pessoas</option>
                </Select>
              </div>

              <div>
                <Label htmlFor="cargo" className="text-base font-semibold">
                  Qual o seu cargo? *
                </Label>
                <Select
                  id="cargo"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  required
                  className="mt-2"
                >
                  <option value="">Selecione seu cargo</option>
                  <option value="ceo">CEO/Diretor</option>
                  <option value="gerente">Gerente de Vendas</option>
                  <option value="coordenador">Coordenador</option>
                  <option value="vendedor">Vendedor</option>
                  <option value="outro">Outro</option>
                </Select>
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
            {/* Como Funciona */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Como Funciona</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <p className="text-muted-foreground">Preencha seus dados acima</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <p className="text-muted-foreground">Nossa IA inicia a ligação em 30 segundos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <p className="text-muted-foreground">Converse naturalmente e veja a tecnologia</p>
                </div>
              </div>
            </Card>

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
