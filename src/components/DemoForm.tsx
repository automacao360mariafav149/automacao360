import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Send } from "lucide-react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.empresa.trim()) {
      newErrors.empresa = 'Empresa é obrigatória';
    }
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.telefone)) {
      newErrors.telefone = 'Formato inválido. Use (11) 99999-9999';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://webhook.automacaodigital360.com/webhook/solicitaçãoreuniao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        console.log('Formulário enviado com sucesso!');
      } else {
        console.error('Erro ao enviar formulário');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setIsSubmitting(false);
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let formattedValue = value;
    if (name === 'telefone') {
      formattedValue = formatPhone(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="agendar-reuniao">
      <div className="container mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para transformar suas{" "}
            <span className="text-primary">vendas e processos</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agende uma demonstração gratuita e descubra como a Automação360 pode revolucionar seus resultados de vendas e processos em apenas 30 dias.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Formulário */}
          <Card className="p-8">
            <CardContent className="p-0">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-600">
                    Solicitação Enviada com Sucesso!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Nossa equipe entrará em contato com você em breve para agendar sua demonstração personalizada.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ 
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
                      setErrors({});
                    }}
                    className="text-primary hover:text-primary/80 font-semibold"
                  >
                    Fazer Nova Solicitação
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    Agendar reunião com um Especialista
                  </h3>
                  
                  {/* Benefícios */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">Apresentação prática e personalizada em 30 minutos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">Avaliação gratuita da sua operação comercial atual</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">Solução feita sob medida para o seu negócio</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">Implantação rápida com suporte e treinamento inclusos</span>
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
                      className={`mt-2 ${errors.nome ? 'border-red-500' : ''}`}
                    />
                    {errors.nome && (
                      <p className="text-sm text-red-500 mt-1">{errors.nome}</p>
                    )}
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
                      className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    )}
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
                      className={`mt-2 ${errors.empresa ? 'border-red-500' : ''}`}
                    />
                    {errors.empresa && (
                      <p className="text-sm text-red-500 mt-1">{errors.empresa}</p>
                    )}
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
                      className={`mt-2 ${errors.telefone ? 'border-red-500' : ''}`}
                    />
                    {errors.telefone && (
                      <p className="text-sm text-red-500 mt-1">{errors.telefone}</p>
                    )}
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
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Agendar Demonstração Gratuita
                    </>
                  )}
                </Button>

                {/* Política de privacidade */}
                <p className="text-sm text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda em receber comunicações da Automação360. 
                  Respeitamos sua privacidade conforme nossa Política de Privacidade.
                </p>
              </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
