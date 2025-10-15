import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, User, Building, CheckCircle } from "lucide-react";

const DemoForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    cargo: "",
    setor: "",
    funcionarios: "",
    faturamento: "",
    objetivo: "",
    urgencia: "",
    orcamento: "",
    observacoes: ""
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
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.telefone)) {
      newErrors.telefone = 'Formato inválido. Use (11) 99999-9999';
    }
    
    if (!formData.empresa.trim()) {
      newErrors.empresa = 'Empresa é obrigatória';
    }
    
    if (!formData.cargo.trim()) {
      newErrors.cargo = 'Cargo é obrigatório';
    }
    
    if (!formData.setor) {
      newErrors.setor = 'Setor é obrigatório';
    }
    
    if (!formData.funcionarios) {
      newErrors.funcionarios = 'Número de funcionários é obrigatório';
    }
    
    if (!formData.faturamento) {
      newErrors.faturamento = 'Faturamento é obrigatório';
    }
    
    if (!formData.objetivo.trim()) {
      newErrors.objetivo = 'Objetivo é obrigatório';
    }
    
    if (!formData.urgencia) {
      newErrors.urgencia = 'Urgência é obrigatória';
    }
    
    if (!formData.orcamento) {
      newErrors.orcamento = 'Orçamento é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Limpar erro do campo quando usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const formatPhone = (value: string) => {
    // Remove tudo que não é dígito
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (11) 99999-9999
    if (numbers.length <= 2) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://webhook.automacaodigital360.com/webhook/formularioligacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          origem: 'Site Automação360 - Formulário de Demonstração',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          empresa: "",
          cargo: "",
          setor: "",
          funcionarios: "",
          faturamento: "",
          objetivo: "",
          urgencia: "",
          orcamento: "",
          observacoes: ""
        });
        setErrors({});
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="agendar-reuniao">
      <div className="container mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para transformar suas{" "}
            <span className="text-primary">VENDAS</span> <span className="text-black">e</span> <span className="text-primary">PROCESSOS</span>?
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
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Obrigado pelo seu interesse!
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Recebemos suas informações e entraremos em contato em breve para agendar sua demonstração personalizada.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                  >
                    Enviar Nova Solicitação
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informações Pessoais */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Nome Completo *</span>
                      </Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => handleChange('nome', e.target.value)}
                        placeholder="Seu nome completo"
                        className={errors.nome ? 'border-red-500' : ''}
                      />
                      {errors.nome && <p className="text-sm text-red-500">{errors.nome}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Email *</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Telefone *</span>
                      </Label>
                      <Input
                        id="telefone"
                        value={formData.telefone}
                        onChange={(e) => handleChange('telefone', formatPhone(e.target.value))}
                        placeholder="(11) 99999-9999"
                        className={errors.telefone ? 'border-red-500' : ''}
                      />
                      {errors.telefone && <p className="text-sm text-red-500">{errors.telefone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="flex items-center space-x-2">
                        <Building className="w-4 h-4" />
                        <span>Empresa *</span>
                      </Label>
                      <Input
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) => handleChange('empresa', e.target.value)}
                        placeholder="Nome da sua empresa"
                        className={errors.empresa ? 'border-red-500' : ''}
                      />
                      {errors.empresa && <p className="text-sm text-red-500">{errors.empresa}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo *</Label>
                      <Input
                        id="cargo"
                        value={formData.cargo}
                        onChange={(e) => handleChange('cargo', e.target.value)}
                        placeholder="Seu cargo na empresa"
                        className={errors.cargo ? 'border-red-500' : ''}
                      />
                      {errors.cargo && <p className="text-sm text-red-500">{errors.cargo}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="setor">Setor de Atuação *</Label>
                      <select
                        id="setor"
                        value={formData.setor}
                        onChange={(e) => handleChange('setor', e.target.value)}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.setor ? 'border-red-500' : ''}`}
                      >
                        <option value="">Selecione o setor</option>
                        <option value="tecnologia">Tecnologia</option>
                        <option value="saude">Saúde</option>
                        <option value="educacao">Educação</option>
                        <option value="financeiro">Financeiro</option>
                        <option value="varejo">Varejo</option>
                        <option value="servicos">Serviços</option>
                        <option value="industria">Indústria</option>
                        <option value="outros">Outros</option>
                      </select>
                      {errors.setor && <p className="text-sm text-red-500">{errors.setor}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="funcionarios">Número de Funcionários *</Label>
                      <select
                        id="funcionarios"
                        value={formData.funcionarios}
                        onChange={(e) => handleChange('funcionarios', e.target.value)}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.funcionarios ? 'border-red-500' : ''}`}
                      >
                        <option value="">Selecione o porte</option>
                        <option value="1-10">1-10 funcionários</option>
                        <option value="11-50">11-50 funcionários</option>
                        <option value="51-200">51-200 funcionários</option>
                        <option value="201-500">201-500 funcionários</option>
                        <option value="500+">Mais de 500 funcionários</option>
                      </select>
                      {errors.funcionarios && <p className="text-sm text-red-500">{errors.funcionarios}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="faturamento">Faturamento Mensal *</Label>
                      <select
                        id="faturamento"
                        value={formData.faturamento}
                        onChange={(e) => handleChange('faturamento', e.target.value)}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.faturamento ? 'border-red-500' : ''}`}
                      >
                        <option value="">Selecione o faturamento</option>
                        <option value="ate-50k">Até R$ 50.000</option>
                        <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                        <option value="100k-500k">R$ 100.000 - R$ 500.000</option>
                        <option value="500k-1m">R$ 500.000 - R$ 1.000.000</option>
                        <option value="1m+">Acima de R$ 1.000.000</option>
                      </select>
                      {errors.faturamento && <p className="text-sm text-red-500">{errors.faturamento}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objetivo">Qual é o principal objetivo com a automação? *</Label>
                    <Textarea
                      id="objetivo"
                      value={formData.objetivo}
                      onChange={(e) => handleChange('objetivo', e.target.value)}
                      placeholder="Descreva seus objetivos e desafios atuais..."
                      rows={3}
                      className={errors.objetivo ? 'border-red-500' : ''}
                    />
                    {errors.objetivo && <p className="text-sm text-red-500">{errors.objetivo}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="urgencia">Urgência da Implementação *</Label>
                      <select
                        id="urgencia"
                        value={formData.urgencia}
                        onChange={(e) => handleChange('urgencia', e.target.value)}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.urgencia ? 'border-red-500' : ''}`}
                      >
                        <option value="">Selecione a urgência</option>
                        <option value="imediata">Imediata (até 30 dias)</option>
                        <option value="curto-prazo">Curto prazo (1-3 meses)</option>
                        <option value="medio-prazo">Médio prazo (3-6 meses)</option>
                        <option value="longo-prazo">Longo prazo (6+ meses)</option>
                      </select>
                      {errors.urgencia && <p className="text-sm text-red-500">{errors.urgencia}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="orcamento">Orçamento Disponível *</Label>
                      <select
                        id="orcamento"
                        value={formData.orcamento}
                        onChange={(e) => handleChange('orcamento', e.target.value)}
                        className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.orcamento ? 'border-red-500' : ''}`}
                      >
                        <option value="">Selecione o orçamento</option>
                        <option value="ate-5k">Até R$ 5.000/mês</option>
                        <option value="5k-10k">R$ 5.000 - R$ 10.000/mês</option>
                        <option value="10k-25k">R$ 10.000 - R$ 25.000/mês</option>
                        <option value="25k-50k">R$ 25.000 - R$ 50.000/mês</option>
                        <option value="50k+">Acima de R$ 50.000/mês</option>
                      </select>
                      {errors.orcamento && <p className="text-sm text-red-500">{errors.orcamento}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="observacoes">Observações Adicionais</Label>
                    <Textarea
                      id="observacoes"
                      value={formData.observacoes}
                      onChange={(e) => handleChange('observacoes', e.target.value)}
                      placeholder="Alguma informação adicional que gostaria de compartilhar?"
                      rows={3}
                    />
                  </div>

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3 text-lg"
                    >
                      {isSubmitting ? 'Enviando...' : 'Agendar Demonstração Gratuita'}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;