import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Phone, Mail, MapPin, Clock, Send, Users, TrendingUp } from "lucide-react";

const DemoForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    tamanhoEmpresa: "",
    interessePrincipal: "",
    faturamentoMensal: "",
    equipeVendas: "",
    desafioAtual: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário de demonstração enviado:", formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para transformar suas{" "}
            <span className="text-primary">vendas</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agende uma demonstração gratuita e descubra como a Automação360 pode revolucionar seus resultados de vendas em apenas 30 dias.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna Esquerda - Formulário */}
          <Card className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6">
                Agende sua Demonstração Gratuita
              </h3>
              
              {/* Benefícios */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Demonstração personalizada de 30 minutos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Análise gratuita do seu processo atual</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Proposta customizada para sua empresa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-muted-foreground">Setup gratuito e treinamento incluído</span>
                </div>
              </div>

              {/* Formulário */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Linha 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome" className="text-base font-semibold">
                      Nome Completo *
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base font-semibold">
                      Email Corporativo *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu.email@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Linha 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="empresa" className="text-base font-semibold">
                      Empresa *
                    </Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nome da sua empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefone" className="text-base font-semibold">
                      Telefone *
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
                  </div>
                </div>

                {/* Linha 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tamanhoEmpresa" className="text-base font-semibold">
                      Tamanho da Empresa
                    </Label>
                    <Select
                      id="tamanhoEmpresa"
                      name="tamanhoEmpresa"
                      value={formData.tamanhoEmpresa}
                      onChange={handleChange}
                      className="mt-2"
                    >
                      <option value="">Selecione</option>
                      <option value="1-10">1-10 funcionários</option>
                      <option value="11-50">11-50 funcionários</option>
                      <option value="51-200">51-200 funcionários</option>
                      <option value="200+">Mais de 200 funcionários</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="interessePrincipal" className="text-base font-semibold">
                      Interesse Principal
                    </Label>
                    <Select
                      id="interessePrincipal"
                      name="interessePrincipal"
                      value={formData.interessePrincipal}
                      onChange={handleChange}
                      className="mt-2"
                    >
                      <option value="">Selecione</option>
                      <option value="prospeccao">Prospecção de Leads</option>
                      <option value="qualificacao">Qualificação de Leads</option>
                      <option value="agendamento">Agendamento de Reuniões</option>
                      <option value="follow-up">Follow-up de Vendas</option>
                    </Select>
                  </div>
                </div>

                {/* Linha 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="faturamentoMensal" className="text-base font-semibold">
                      Faturamento Mensal
                    </Label>
                    <Select
                      id="faturamentoMensal"
                      name="faturamentoMensal"
                      value={formData.faturamentoMensal}
                      onChange={handleChange}
                      className="mt-2"
                    >
                      <option value="">Selecione</option>
                      <option value="0-50k">R$ 0 - R$ 50k</option>
                      <option value="50k-200k">R$ 50k - R$ 200k</option>
                      <option value="200k-500k">R$ 200k - R$ 500k</option>
                      <option value="500k+">R$ 500k+</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="equipeVendas" className="text-base font-semibold">
                      Quantas pessoas você tem na equipe de vendas?
                    </Label>
                    <Select
                      id="equipeVendas"
                      name="equipeVendas"
                      value={formData.equipeVendas}
                      onChange={handleChange}
                      className="mt-2"
                    >
                      <option value="">Selecione</option>
                      <option value="1-5">1-5 pessoas</option>
                      <option value="6-15">6-15 pessoas</option>
                      <option value="16-50">16-50 pessoas</option>
                      <option value="50+">Mais de 50 pessoas</option>
                    </Select>
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <Label htmlFor="desafioAtual" className="text-base font-semibold">
                    Conte-nos sobre seu desafio atual
                  </Label>
                  <Textarea
                    id="desafioAtual"
                    name="desafioAtual"
                    placeholder="Descreva brevemente seus principais desafios em vendas..."
                    value={formData.desafioAtual}
                    onChange={handleChange}
                    className="mt-2"
                    rows={4}
                  />
                </div>

                {/* Botão de envio */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-4"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Agendar Demonstração Gratuita
                </Button>

                {/* Política de privacidade */}
                <p className="text-sm text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda em receber comunicações da Automação360. 
                  Respeitamos sua privacidade conforme nossa Política de Privacidade.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Coluna Direita - Informações de Contato e Métricas */}
          <div className="space-y-8">
            {/* Informações de Contato */}
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">+55 (11) 5196-9381</p>
                      <p className="text-sm text-muted-foreground">Seg-Sex das 8h às 20h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">comercial@automacao360.com.br</p>
                      <p className="text-sm text-muted-foreground">Resposta em até 2 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Rua 11, 250, 13º andar - Setor Central</p>
                      <p className="text-sm text-muted-foreground">Goiânia (GO), Brasil - 74015-170</p>
                      <p className="text-sm text-muted-foreground">Atendimento em todo Brasil</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Atendimento Via WhatsApp</p>
                      <p className="text-sm text-muted-foreground">Seg-Sex das 8h às 20h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Métricas de Sucesso */}
            <Card className="p-8 bg-primary text-primary-foreground">
              <CardContent className="p-0">
                <div className="flex items-center space-x-3 mb-4">
                  <Check className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Junte-se a 350+ Empresas</h3>
                </div>
                <p className="text-primary-foreground/90 mb-6">
                  Que já transformaram suas vendas com a Automação360 e obtiveram resultados excepcionais em menos de 30 dias.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">94%</div>
                    <div className="text-sm opacity-90">Taxa de Sucesso</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">3x</div>
                    <div className="text-sm opacity-90">Mais Leads Qualificados</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
