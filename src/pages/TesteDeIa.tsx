import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";

const TesteDeIa = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    prospeccao: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.telefone)) {
      newErrors.telefone = 'Formato inválido. Use (11) 99999-9999';
    }
    
    if (!formData.prospeccao) {
      newErrors.prospeccao = 'Esta informação é obrigatória';
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
      const response = await fetch('https://webhook.automacaodigital360.com/webhook/formularioligacao', {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        {/* Título e Headline no topo - Removidos para evitar duplicidade com a página principal, se houver */}
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Teste agora a IA da Automação360
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em poucos segundos, você recebe uma ligação real e entende como automatizar sua prospecção com qualidade humana.
          </p>
        </div> */}

        <div className="max-w-2xl mx-auto">
          {/* Card com Formulário */}
          <Card className="p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">
                  Solicitação Enviada com Sucesso!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossa IA entrará em contato com você em breve. Aguarde a ligação!
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ nome: "", telefone: "", prospeccao: "" });
                    setErrors({});
                  }}
                  className="text-primary hover:text-primary/80 font-semibold"
                >
                  Fazer Nova Solicitação
                </button>
              </div>
            ) : (
              <>
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
                      className={`mt-2 ${errors.nome ? 'border-red-500' : ''}`}
                    />
                    {errors.nome && (
                      <p className="text-sm text-red-500 mt-1">{errors.nome}</p>
                    )}
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
                      className={`mt-2 ${errors.telefone ? 'border-red-500' : ''}`}
                    />
                    {errors.telefone ? (
                      <p className="text-sm text-red-500 mt-1">{errors.telefone}</p>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1">
                        Certifique-se de que o número está ativo para receber a ligação
                      </p>
                    )}
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
                    {errors.prospeccao && (
                      <p className="text-sm text-red-500 mt-1">{errors.prospeccao}</p>
                    )}
                  </div>

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
                        <Phone className="w-5 h-5 mr-2" />
                        Receber Ligação da IA Agora
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Ao solicitar a ligação, você autoriza o contato da Automação360. A ligação é uma demonstração comercial da nossa tecnologia.
                  </p>
                </form>
              </>
            )}
          </Card>

        </div>
      </div>
    </section>
  );
};

export default TesteDeIa;
