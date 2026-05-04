/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Plus, Check } from 'lucide-react';

const LINKS = {
  CHECKOUT: "https://www.asaas.com/c/4ngi2etkb9ipe89ze",
  WHATSAPP_GROUP: "https://chat.whatsapp.com/GbKq5GQItNB5Em2KEjv0S9?mode=gi_t",
  ZENT_GROWTH: "https://zentgrowth.com"
};

export default function App() {
  const [slotsLeft, setSlotsLeft] = useState(7);
  const totalSlots = 10;
  const takenSlots = totalSlots - slotsLeft;
  const [showSticky, setShowSticky] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* ═══ TOP NAV ═══════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-hairline)] h-16">
        <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between">
          <a href="#" className="font-bold text-[var(--fs-tlg)] text-[var(--color-ink)] no-underline">
            InnovareIA <span className="text-[var(--color-gold)]">·</span> Zent AI
          </a>
          <div className="hidden md:flex gap-8 items-center text-[var(--fs-nav)]">
            <a href="#modules" className="no-underline text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">Conteúdo</a>
            <a href="#bonus" className="no-underline text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">Bônus</a>
            <a href="#pricing" className="no-underline text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">Investimento</a>
            <a href="#zentai" className="no-underline text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">Zent AI</a>
            <a href="#faq" className="no-underline text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors">Dúvidas</a>
          </div>
          <a href="#pricing" className="btn-primary scale-90 md:scale-100">
            Garantir Vaga
          </a>
        </div>
      </nav>

      {/* ═══ HERO BAND DARK ══════════════════════════════════ */}
      <section id="hero" className="mt-16 relative bg-[var(--gradient-deep-blue)] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--gradient-gold)] z-10" />
        <div className="max-w-[1440px] mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[580px]">
          <div className="pb-8">
            <div className="mb-4">
              <span className="label-up-dark">Imersão Prática · 1 Dia · 6 Horas</span>
            </div>
            <h1 className="text-[var(--fs-dxl)] font-bold leading-tight text-white mb-8">
              Do Zero<br />aos <em className="not-italic text-[var(--color-gold-light)]">Agentes de IA</em><br />no seu negócio.
            </h1>
            <p className="text-[var(--fs-bmd)] text-[var(--color-on-dark-soft)] max-w-[520px] mb-8">
              Para empresários e gestores que querem implementar Inteligência Artificial de verdade — sem conhecimento técnico prévio. Mão na massa, do básico ao avançado.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#pricing" className="btn-primary">Garantir Minha Vaga</a>
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="btn-secondary-dark">
                Entrar no Grupo
              </a>
            </div>
          </div>

          <div className="bg-[rgba(36,36,36,0.6)] backdrop-blur-md p-8 self-stretch flex flex-col justify-center border-l-2 border-[var(--color-gold)] rounded-xl">
            <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-gold-light)] mb-8 block">
              Visão geral da imersão
            </span>
            <div className="grid grid-cols-2 gap-[1px] bg-[rgba(0,194,224,0.2)] border border-[rgba(0,194,224,0.3)] mb-4 rounded overflow-hidden">
              <div className="bg-[rgba(11,53,71,0.3)] backdrop-blur-sm p-6 text-center md:text-left">
                <span className="text-[var(--fs-dsm)] font-bold text-white block mb-1">6h</span>
                <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-gold-light)] text-[10px]">Duração total</span>
              </div>
              <div className="bg-[rgba(11,53,71,0.3)] backdrop-blur-sm p-6 text-center md:text-left">
                <span className="text-[var(--fs-dsm)] font-bold text-white block mb-1">5</span>
                <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-gold-light)] text-[10px]">Módulos práticos</span>
              </div>
              <div className="bg-[rgba(11,53,71,0.3)] backdrop-blur-sm p-6 text-center md:text-left">
                <span className="text-[var(--fs-dsm)] font-bold text-white block mb-1">20+</span>
                <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-gold-light)] text-[10px]">Ferramentas de IA</span>
              </div>
              <div className="bg-[rgba(11,53,71,0.3)] backdrop-blur-sm p-6 text-center md:text-left">
                <span className="text-[var(--fs-dsm)] font-bold text-white block mb-1">Zero</span>
                <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-gold-light)] text-[10px]">Pré-requisitos</span>
              </div>
            </div>
            <a href="#modules" className="btn-text btn-text-on-dark flex items-center gap-2">
              Ver conteúdo completo <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* G4 GOLD STRIPE DIVIDER */}
      <hr className="m-stripe" />

      {/* ═══ URGENCY BAND ══════════════════════════════════ */}
      <section id="urgency" className="bg-white border-t border-[var(--color-hairline)] border-b-2 border-[var(--color-gold)] py-8">
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <span className="label-up-muted block mb-2">Oferta especial · Primeiros 10 inscritos</span>
            <p className="text-[var(--fs-dmd)] font-bold text-[var(--color-ink)] mb-1">Bônus VIP se esgotando.</p>
            <p className="text-[var(--fs-bsm)] text-[var(--color-muted)]">Os 10 primeiros compradores recebem condições exclusivas além dos bônus garantidos a todos os participantes.</p>
          </div>
          <div className="text-center md:text-right flex-shrink-0">
            <span className="text-[var(--fs-dlg)] font-bold text-[var(--color-gold)] block">{slotsLeft}</span>
            <span className="label-up-muted">Vagas com bônus VIP restantes</span>
            <div className="flex gap-[3px] mt-2 justify-center md:justify-end">
              {[...Array(totalSlots)].map((_, i) => (
                <div key={i} className={`w-5 h-1 rounded-sm ${i < takenSlots ? 'bg-[#e63946]' : 'bg-[var(--color-gold)]'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PARA QUEM É ════════════════════════════════════ */}
      <section id="forwhom" className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-16">
            <span className="label-up mb-4 block">Público-alvo</span>
            <h2 className="text-[var(--fs-dlg)] font-bold text-[var(--color-ink)] max-w-[640px]">Para empresários que querem<br />vantagem competitiva real.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t-2 border-[var(--color-gold)] pt-16">
            <div>
              <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-gold)] mb-8 block">Para você, se</span>
              <ul className="list-none space-y-4">
                {[
                  "Quer escalar o negócio sem contratar mais gente",
                  "Usa ChatGPT mas sabe que está longe do potencial",
                  "Precisa automatizar processos que consomem seu tempo",
                  "Quer capacitar sua equipe com IA de forma estruturada",
                  "Busca criar sistemas e apps sem precisar de desenvolvedor",
                  "Precisa de vantagem competitiva real e imediata"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start py-4 border-b border-[var(--color-hairline)] last:border-b-0">
                    <span className="text-[var(--color-gold)] font-bold font-mono text-xl">+</span>
                    <span className="text-[var(--fs-bmd)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-muted)] mb-8 block">Não é para você, se</span>
              <ul className="list-none space-y-4">
                {[
                  "Busca apenas conteúdo teórico sem aplicação prática",
                  "Não tem interesse em mudar a forma de operar a empresa",
                  "Prefere delegar tudo sem nenhum entendimento do processo",
                  "Não tem disponibilidade para 6 horas de imersão presencial"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start py-4 border-b border-[var(--color-hairline)] last:border-b-0">
                    <span className="text-[var(--color-muted)] font-bold font-mono text-xl">–</span>
                    <span className="text-[var(--fs-bmd)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ══════════════════════════════════════════ */}
      <section id="stats" className="bg-[var(--color-surface-soft)] border-t-2 border-[var(--color-gold)] border-b border-[var(--color-hairline)] py-12">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[var(--color-hairline)]">
            {[
              { val: "6 horas", label: "Imersão prática" },
              { val: "5 módulos", label: "Do zero aos agentes" },
              { val: "20+ ferramentas", label: "Abordadas ao vivo" },
              { val: "100% prático", label: "Mão na massa" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-[var(--color-surface-soft)] p-8 text-center transition-transform hover:scale-105 duration-300">
                <span className="text-[var(--fs-dlg)] font-bold text-[var(--color-gold)] block">{stat.val}</span>
                <span className="label-up-muted block mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MÓDULOS ════════════════════════════════════════ */}
      <section id="modules" className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-16">
            <span className="label-up mb-4 block">Grade completa</span>
            <h2 className="text-[var(--fs-dlg)] font-bold text-[var(--color-ink)] max-w-[640px]">Tudo que você vai dominar<br />em um único dia.</h2>
          </div>
          <div className="border-t-2 border-[var(--color-gold)]">
            {[
              {
                num: "01",
                title: "IA do Zero — Panorama Completo",
                desc: "Entenda como a IA funciona, conheça as principais ferramentas e aprenda a usá-las com estratégia e propósito para o seu negócio.",
                topics: ["ChatGPT", "Claude", "Gemini", "DeepSeek", "Prompt Engineering", "Engenharia de Contexto", "Gamma App", "Produtividade com IA"],
                badge: "Nivelamento"
              },
              {
                num: "02",
                title: "IA para Crescer e Vender Mais",
                desc: "Como usar IA para criar conteúdo, atrair clientes e fechar mais vendas. Ferramentas práticas para marketing digital e automação do funil de vendas.",
                topics: ["Conteúdo para redes", "Copywriting com IA", "Criação de imagens", "Funil de vendas", "Scripts de vendas", "E-mail marketing", "Análise de dados"],
                badge: "Marketing & Vendas"
              },
              {
                num: "03",
                title: "Crie Assistentes e Agentes de IA",
                desc: "A parte mais transformadora: construa agentes inteligentes que trabalham por você, automatize fluxos inteiros e conecte ferramentas sem escrever código.",
                topics: ["Agentes de IA", "GPTs Customizados", "Projetos Claude", "N8N", "Atendimento automatizado", "WhatsApp Business"],
                badge: "Agentes",
                isGold: true,
                bonus: "✦ Bônus — Automações de reuniões e relatórios + Disparos automáticos via WhatsApp e e-mail"
              },
              {
                num: "04",
                title: "Mini-Curso Vibe Coding",
                desc: "Com IA, qualquer empresário pode criar aplicativos, ferramentas e páginas de vendas apenas descrevendo o que quer. Você vai criar o seu ao vivo.",
                topics: ["Vibe Coding", "V0 by Vercel", "Bolt.new", "Lovable", "AI Studio", "Landing pages", "Deploy"],
                badge: "Apps sem código"
              },
              {
                num: "05",
                title: "Gestão Comercial com IA — Zent AI",
                desc: "Apresentação e demonstração ao vivo da plataforma Zent AI: CRM com inteligência artificial, atendimento via WhatsApp, pipeline inteligente e geração automática de scripts de vendas.",
                topics: ["CRM com IA", "Atendimento WhatsApp", "Pipeline inteligente", "Scripts por IA", "Demo ao vivo"],
                badge: "Plataforma",
                isBlue: true
              }
            ].map((module, idx) => (
              <div key={idx} className="group border-b border-[var(--color-hairline)] grid grid-cols-1 md:grid-cols-[64px_auto_1fr_auto] gap-0 items-start hover:bg-[var(--color-surface-soft)] hover:border-l-[3px] hover:border-l-[var(--color-gold)] transition-all">
                <div className="p-8 text-[var(--fs-dmd)] font-bold text-[var(--color-gold)]">{module.num}</div>
                <div className="p-8">
                  <div className="text-[var(--fs-tmd)] font-bold mb-1 text-[var(--color-ink)]">{module.title}</div>
                  <div className="text-[var(--fs-bsm)] text-[var(--color-muted)]">{module.desc}</div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {module.topics.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-muted)] px-2 py-1 border border-[var(--color-hairline)] bg-white rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {module.bonus && (
                    <div className="mt-4 p-3 border-l-[3px] border-[var(--color-gold)] bg-[rgba(0,194,224,0.05)] text-[var(--fs-bsm)] text-[var(--color-body-strong)]">
                      {module.bonus}
                    </div>
                  )}
                </div>
                <div className="p-8 flex items-center md:justify-center">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider
                    ${module.isGold ? 'bg-[var(--color-gold)] text-[var(--color-on-gold)]' : 
                      module.isBlue ? 'bg-[var(--color-primary)] text-[var(--color-on-primary)]' : 
                      'bg-[var(--color-surface-strong)] text-[var(--color-muted)]'}`}>
                    {module.badge}
                  </span>
                </div>
                <div className="p-8 text-right hidden md:block">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted)] whitespace-nowrap">
                    {idx === 0 ? '1 hora' : idx === 4 ? '30 min' : '1.5 hora'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BONUS — DARK BAND ════════════════════ */}
      <section id="bonus" className="bg-[var(--gradient-deep-blue)] py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--gradient-gold)]" />
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-4">
            <span className="label-up-dark">Bônus incluídos</span>
          </div>
          <h2 className="text-[var(--fs-dlg)] font-bold text-white mb-16">O que você leva além do curso.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[rgba(0,194,224,0.2)] border-2 border-[var(--color-gold)] rounded-xl overflow-hidden mb-16 shadow-2xl">
            {[
              {
                label: "Para todos os participantes",
                title: "1 Mês Grátis — Zent AI",
                desc: "Acesso gratuito por 30 dias à plataforma de gestão comercial com CRM, atendimento automatizado via WhatsApp e pipeline de vendas inteligente.",
                elevated: true
              },
              {
                label: "Todos os participantes",
                title: "20% por 3 Meses — Zent AI",
                desc: "Após o período gratuito, 20% de desconto nos três primeiros meses de qualquer plano da plataforma Zent AI."
              },
              {
                label: "Somente os 10 primeiros",
                title: "Desconto VIP Acumulado",
                desc: "Os 10 primeiros inscritos garantem 20% de desconto nas três primeiras mensalidades — acumulado com o desconto padrão.",
                elevated: true
              },
              {
                label: "Todos os participantes",
                title: "E-book Oficial da Imersão",
                desc: "Apostila completa com todos os conteúdos, ferramentas, frameworks e templates ensinados. Seu guia permanente."
              }
            ].map((bonus, idx) => (
              <div key={idx} className={`p-8 backdrop-blur-md ${bonus.elevated ? 'bg-[rgba(0,194,224,0.15)]' : 'bg-[rgba(11,53,71,0.4)]'}`}>
                <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-gold-light)] mb-4 block">{bonus.label}</span>
                <h3 className="text-[var(--fs-tsm)] font-bold text-white mb-2">{bonus.title}</h3>
                <p className="text-[var(--fs-bsm)] text-[var(--color-on-dark-soft)] leading-relaxed">{bonus.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[rgba(36,36,36,0.7)] backdrop-blur-md border-2 border-[var(--color-gold)] p-12 rounded-xl flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-gold-light)] mb-2 block">Zent AI — zentgrowth.com</span>
              <p className="text-[var(--fs-bmd)] text-[var(--color-on-dark-soft)] leading-relaxed">
                Plataforma de gestão comercial com inteligência artificial nativa. CRM, atendimento automatizado, pipeline inteligente e gerador de scripts por IA — tudo em um só lugar, pensado para o empresário brasileiro.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap w-full md:w-auto">
              <a href="#pricing" className="btn-primary w-full md:w-auto">Garantir Vaga e Bônus</a>
              <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="btn-secondary-dark w-full md:w-auto">
                Falar com a equipe
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-stripe" />

      {/* ═══ ZENT AI — PLATAFORMA ══════════════════════════ */}
      <section id="zentai" className="bg-white py-20">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-16">
            <span className="label-up mb-4 block">Plataforma incluída</span>
            <h2 className="text-[var(--fs-dlg)] font-bold text-[var(--color-ink)]">Zent AI — gestão comercial<br />com IA no centro.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t-2 border-[var(--color-gold)] pt-16 mt-16">
            <div>
              <p className="text-[var(--fs-tmd)] font-bold mb-4 text-[var(--color-body-strong)]">Uma plataforma desenvolvida para o empresário que quer profissionalizar o processo de vendas sem precisar de um time de TI.</p>
              <p className="text-[var(--fs-bmd)] text-[var(--color-body)] mb-8 leading-relaxed">O CRM da Zent AI vai além do registro de contatos. Ao preencher um formulário no aplicativo com informações sobre o cliente — segmento, dor identificada, histórico — a IA gera automaticamente um script de abordagem personalizado para aquela negociação específica.</p>
              <ul className="list-none space-y-4">
                {[
                  "CRM com inteligência artificial nativa",
                  "Atendimento automatizado via WhatsApp com IA",
                  "Pipeline de vendas inteligente com alertas de follow-up",
                  "Gerador de scripts de vendas por IA baseado no perfil do cliente",
                  "Relatórios automáticos de performance comercial",
                  "Integração com WhatsApp Business API"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start py-4 border-b border-[var(--color-hairline)] last:border-b-0">
                    <span className="text-[var(--color-gold)] font-bold">—</span>
                    <span className="text-[var(--fs-bsm)]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href={LINKS.ZENT_GROWTH} target="_blank" rel="noopener noreferrer" className="btn-text group">
                  Conhecer a plataforma <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[1px] bg-[var(--color-gold)] border-2 border-[var(--color-gold)] rounded-xl overflow-hidden shadow-xl">
                <div className="bg-[var(--color-gold)] p-8">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[rgba(255,255,255,0.8)] mb-2 block">Para todos os compradores</span>
                  <span className="text-[var(--fs-dlg)] font-bold text-black block leading-none">30 dias grátis</span>
                  <p className="text-[var(--fs-bsm)] text-black font-medium mt-2">Acesso completo à plataforma sem custo</p>
                </div>
                <div className="bg-[var(--color-surface-soft)] p-8">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted)] mb-2 block">Todos os compradores</span>
                  <span className="text-[var(--fs-dlg)] font-bold text-[var(--color-ink)] block leading-none">20% off</span>
                  <p className="text-[var(--fs-bsm)] text-[var(--color-muted)] font-medium mt-2">Nos 3 primeiros meses de qualquer plano</p>
                </div>
                <div className="bg-[var(--color-surface-soft)] p-8">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-muted)] mb-2 block">Primeiros 10 inscritos</span>
                  <span className="text-[var(--fs-dlg)] font-bold text-[var(--color-ink)] block leading-none">Desconto VIP</span>
                  <p className="text-[var(--fs-bsm)] text-[var(--color-muted)] font-medium mt-2">20% nas 3 primeiras mensalidades — acumulado</p>
                </div>
              </div>
              <div className="mt-6 p-6 bg-[rgba(0,194,224,0.1)] rounded-lg border-l-[3px] border-[var(--color-gold)]">
                <p className="text-[10px] text-[var(--color-muted)] leading-relaxed">
                  Pagamento seguro via Asaas. Após a confirmação, você é redirecionado ao grupo de participantes no WhatsApp e recebe a apostila por e-mail automaticamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ══════════════════════════════════════ */}
      <section id="pricing" className="bg-white py-20 pb-40">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-16">
            <span className="label-up mb-4 block">Investimento</span>
            <h2 className="text-[var(--fs-dlg)] font-bold text-[var(--color-ink)]">O que você recebe e<br />quanto vale cada item.</h2>
          </div>

          {/* VALUE TABLE */}
          <div className="border-2 border-[var(--color-gold)] rounded-xl overflow-hidden mb-8 shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto_auto] bg-[var(--color-surface-soft)] border-b border-[var(--color-hairline)] px-6 py-4 md:px-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-gold)]">Item</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-gold)] text-right px-4 hidden md:block">Valor separado</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-gold)] text-center">Status</span>
            </div>

            {[
              { name: "Módulo 01 — IA do Zero: Panorama Completo", price: "R$ 197", desc: "1 hora · ChatGPT, Claude, Gemini, DeepSeek, Prompt Engineering" },
              { name: "Módulo 02 — IA para Crescer e Vender Mais", price: "R$ 347", desc: "1h 30min · Marketing, Copywriting, Funil de vendas, Scripts" },
              { name: "Módulo 03 — Crie Assistentes e Agentes de IA", price: "R$ 397", desc: "1h 30min · Agentes de IA, N8N, Automações, Atendimento WhatsApp" },
              { name: "Módulo 04 — Mini-Curso Vibe Coding", price: "R$ 297", desc: "1 hora · V0, Bolt.new, Lovable, AI Studio — apps sem código" },
              { name: "Módulo 05 — Gestão Comercial com IA · Zent AI", price: "R$ 197", desc: "30 min · CRM com IA, Pipeline inteligente, Demo ao vivo" },
              { name: "E-book Oficial da Imersão", price: "R$ 97", desc: "Apostila completa de implementação", isBonus: true },
              { name: "1 Mês Grátis — Plataforma Zent AI", price: "R$ 397", desc: "Acesso completo (zentgrowth.com)", isBonus: true },
              { name: "20% de Desconto · 3 Meses na Zent AI", price: "R$ 68", desc: "Desconto padrão garantido", isBonus: true }
            ].map((item, idx) => (
              <div key={idx} className={`grid grid-cols-[1fr_auto_auto] items-center border-b border-[var(--color-hairline)] last:border-b-0 px-6 py-4 md:px-10 ${item.isBonus ? 'bg-[var(--color-surface-card)]' : ''}`}>
                <div>
                  <div className="text-[var(--fs-tsm)] font-bold text-[var(--color-ink)]">{item.name}</div>
                  <div className="text-[var(--fs-cap)] text-[var(--color-muted)] mt-1">{item.desc}</div>
                </div>
                <div className="px-4 text-right hidden md:block">
                  <span className="text-[var(--fs-tmd)] font-bold text-[var(--color-muted)] line-through whitespace-nowrap">{item.price}</span>
                </div>
                <div className="flex justify-center">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider
                    ${item.isBonus ? 'bg-[var(--color-surface-strong)] text-[var(--color-muted)]' : 'bg-[var(--color-gold)] text-[var(--color-on-gold)]'}`}>
                    {item.isBonus ? 'Bônus' : 'Incluído'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-[1fr_auto] bg-[var(--color-surface-soft)] border-y-2 border-[var(--color-gold)] mb-8 items-center px-10 py-6">
            <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-muted)]">Valor total se comprado separadamente</span>
            <span className="text-[var(--fs-dlg)] font-bold text-[var(--color-ink)] line-through">R$ 1.997</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] border-2 border-[var(--color-gold)] rounded-xl overflow-hidden shadow-2xl">
            <div className="p-10 md:p-12 bg-white">
              <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[var(--color-success)] mb-2 block">Você economiza R$ 1.700</span>
              <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-muted)] mb-2 block">Valor da imersão completa</span>
              <span className="text-[var(--fs-dxl)] font-bold text-[var(--color-gold)] block mb-2 leading-none">R$ 297</span>
              <span className="text-[var(--fs-bsm)] text-[var(--color-muted)] block mb-10">ou em até 12x de R$ 24,75 no cartão</span>
              <div className="flex flex-wrap gap-4">
                <a href={LINKS.CHECKOUT} className="btn-primary">Garantir Minha Vaga por R$ 297</a>
                <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="btn-secondary">Falar com a equipe</a>
              </div>
            </div>
            <div className="p-10 md:p-12 bg-[rgba(0,194,224,0.05)] border-t-2 md:border-t-0 md:border-l-2 border-[var(--color-gold)] flex flex-col justify-center">
              <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-muted)] mb-4 block">Inclui tudo isso</span>
              <ul className="list-none space-y-2">
                {[
                  "5 módulos práticos — 6 horas ao vivo",
                  "E-book exclusivo da imersão",
                  "1 mês grátis Zent AI (R$ 397)",
                  "20% off · 3 meses Zent AI"
                ].map((v, i) => (
                  <li key={i} className="text-[var(--fs-bsm)] text-[var(--color-body)] flex gap-2 items-center">
                    <Check size={14} className="text-[var(--color-gold)]" /> {v}
                  </li>
                ))}
                <li className="text-[var(--fs-bsm)] font-bold text-[var(--color-gold)] mt-4">Bônus VIP para os 10 primeiros</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ════════════════════════════════════════════ */}
      <section id="faq" className="bg-[var(--color-surface-soft)] py-20 px-8">
        <div className="max-w-[800px] mx-auto">
          <div className="mb-16">
            <span className="label-up mb-4 block">Dúvidas frequentes</span>
            <h2 className="text-[var(--fs-dlg)] font-bold text-[var(--color-ink)]">Perguntas que todo<br />mundo faz.</h2>
          </div>
          <div className="border-t-2 border-[var(--color-gold)]">
            {[
              { q: "Preciso saber programar ou ter conhecimento técnico?", a: "A imersão foi desenvolvida para empresários e gestores sem background técnico. Do zero ao agente de IA, tudo é ensinado de forma prática e acessível. O único pré-requisito é ter um computador e disposição para aprender." },
              { q: "Como funciona o acesso à Zent AI após a compra?", a: "Após a confirmação do pagamento, você recebe por e-mail as instruções para ativar o acesso gratuito de 30 dias à plataforma. O desconto dos 3 meses seguintes é aplicado automaticamente ao contratar qualquer plano." },
              { q: "O e-book é enviado automaticamente?", a: "Sim. A apostila completa da imersão é enviada para o seu e-mail logo após a confirmação do pagamento. Você também recebe o link de acesso ao grupo de participantes no WhatsApp." },
              { q: "Como sei se sou um dos 10 primeiros inscritos?", a: "O contador de vagas nesta página é atualizado em tempo real. Se as vagas com bônus VIP ainda estiverem disponíveis quando você concluir a compra, você automaticamente faz parte dos 10 primeiros." },
              { q: "Quais são as formas de pagamento?", a: "Aceitamos cartão de crédito, boleto bancário e Pix pelo Asaas. O processamento é imediato para Pix e cartão." },
              { q: "A imersão é presencial ou online?", a: "A imersão é 100% prática, ao vivo. Acompanhe as instruções enviadas no grupo do WhatsApp para saber o formato, local e data da sua turma." }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-[var(--color-hairline)]">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full bg-transparent border-none py-6 flex justify-between items-center gap-6 cursor-pointer text-left group"
                >
                  <span className="text-[var(--fs-tsm)] font-bold text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors">{faq.q}</span>
                  <Plus size={20} className={`text-[var(--color-gold)] transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-[var(--fs-bsm)] text-[var(--color-body)] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND DARK ══════════════════════════════════ */}
      <section id="final-cta" className="bg-[var(--gradient-deep-blue)] py-20 relative text-center">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--gradient-gold)]" />
        <div className="max-w-[640px] mx-auto px-8">
          <div className="mb-4">
            <span className="label-up-dark">Vagas com bônus VIP se esgotando</span>
          </div>
          <h2 className="text-[var(--fs-dmd)] font-bold text-white mb-6 leading-tight">Seu negócio com IA.<br />Comece agora.</h2>
          <p className="text-[var(--fs-bmd)] text-[var(--color-on-dark-soft)] mb-12 leading-relaxed">
            6 horas que vão mudar como você opera, compete e escala. Bônus exclusivos — plataforma, desconto e apostila — para quem garantir vaga hoje.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#pricing" className="btn-primary">Garantir Minha Vaga</a>
            <a href={LINKS.WHATSAPP_GROUP} target="_blank" rel="noopener noreferrer" className="btn-secondary-dark">
              Falar com a equipe
            </a>
          </div>
          <p className="text-[10px] text-[var(--color-on-dark-soft)] leading-relaxed">
            Pagamento 100% seguro · Acesso ao grupo imediato · E-book enviado por e-mail · Zent AI ativada em até 24h
          </p>
        </div>
      </section>

      {/* ═══ FOOTER ═════════════════════════════════════════ */}
      <footer className="bg-[var(--color-surface-soft)] border-t-[3px] border-[var(--color-gold)] py-20 px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12">
          <div>
            <span className="text-[var(--fs-tlg)] font-bold text-[var(--color-ink)] block mb-6">InnovareIA <span className="text-[var(--color-gold)]">·</span> Zent AI</span>
            <p className="text-[var(--fs-bsm)] text-[var(--color-muted)] max-w-sm mb-6 leading-relaxed">
              Consultoria, implementação e treinamento em Inteligência Artificial para empresários e gestores que querem escalar com tecnologia.
            </p>
            <p className="text-[var(--fs-bsm)]">
              <a href={LINKS.ZENT_GROWTH} target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold)] no-underline hover:underline">zentgrowth.com</a> &nbsp;·&nbsp; <span className="text-[var(--color-muted)]">@zent_automatizando_empresas</span>
            </p>
          </div>
          <div>
            <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-gold)] mb-6 block">Imersão</span>
            <ul className="list-none space-y-2">
              <li><a href="#modules" className="text-[var(--fs-bsm)] text-[var(--color-muted)] no-underline hover:text-[var(--color-gold)] transition-colors">Grade completa</a></li>
              <li><a href="#bonus" className="text-[var(--fs-bsm)] text-[var(--color-muted)] no-underline hover:text-[var(--color-gold)] transition-colors">Bônus incluídos</a></li>
              <li><a href="#zentai" className="text-[var(--fs-bsm)] text-[var(--color-muted)] no-underline hover:text-[var(--color-gold)] transition-colors">Zent AI</a></li>
              <li><a href="#faq" className="text-[var(--fs-bsm)] text-[var(--color-muted)] no-underline hover:text-[var(--color-gold)] transition-colors">Dúvidas frequentes</a></li>
            </ul>
          </div>
          <div>
            <span className="text-[var(--fs-lup)] font-bold uppercase tracking-widest text-[var(--color-gold)] mb-6 block">Contato</span>
            <ul className="list-none space-y-2">
              <li><a href={LINKS.WHATSAPP_GROUP} className="text-[var(--fs-bsm)] text-[var(--color-muted)] no-underline hover:text-[var(--color-gold)] transition-colors">WhatsApp</a></li>
              <li><a href={LINKS.ZENT_GROWTH} className="text-[var(--fs-bsm)] text-[var(--color-muted)] no-underline hover:text-[var(--color-gold)] transition-colors">zentgrowth.com</a></li>
              <li><a href="#pricing" className="text-[var(--fs-bsm)] text-[var(--color-muted)] no-underline hover:text-[var(--color-gold)] transition-colors">Garantir Vaga</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto pt-12 border-t border-[var(--color-hairline)] mt-16 flex flex-col md:flex-row justify-between gap-8 text-[11px] text-[var(--color-muted-soft)]">
          <p>Imersão IA para Empresários · InnovareIA - Zent A.I. · 2026</p>
          <p>Ao comprar você concorda com nossos termos. Os bônus VIP (10 primeiros) são limitados e podem esgotar a qualquer momento.</p>
        </div>
      </footer>

      {/* ═══ STICKY BAR ═════════════════════════════════════ */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t-2 border-[var(--color-gold)] p-4 md:px-8 shadow-[0_-4px_16px_rgba(0,194,224,0.15)]"
          >
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="text-[var(--fs-bsm)] text-[var(--color-muted)] text-center">
                <strong className="font-bold text-[var(--color-gold)]">Imersão IA para Empresários</strong> · 6 horas · 5 módulos · Zent AI incluída
              </span>
              <a href="#pricing" className="btn-primary w-full md:w-auto">
                Garantir Minha Vaga por R$ 297
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
