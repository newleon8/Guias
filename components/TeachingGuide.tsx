import React, { useState } from 'react';

// --- Ícones ---
const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-6 h-6 transition-transform duration-300 ${className}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);
const InfoIcon: React.FC = () => (<svg className="w-7 h-7 mr-3 text-blue-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>);
const TargetIcon: React.FC = () => (<svg className="w-7 h-7 mr-3 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25a8.964 8.964 0 0 1 7.282 13.923l-2.518-2.225a6.003 6.003 0 0 0-4.032-4.032l-2.225-2.518A8.964 8.964 0 0 1 12 2.25Z" /></svg>);
const ToolsIcon: React.FC = () => (<svg className="w-7 h-7 mr-3 text-orange-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.056 0 4.025-.994 5.25-2.686m4.5 2.686a8.987 8.987 0 0 0 6-14.25c-.938-.332-1.948-.512-3-.512a8.967 8.967 0 0 0-6 2.292m0 0a8.967 8.967 0 0 1-5.25 2.686M12 6.042A8.967 8.967 0 0 1 17.25 8.75" /></svg>);
const LightbulbIcon: React.FC = () => (<svg className="w-6 h-6 mr-3 text-yellow-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a7.5 7.5 0 0 1-7.5 0c-1.42-1.581-2.672-3.344-3.344-5.257m14.188 0c-.672 1.913-1.924 3.676-3.344 5.257m1.151-5.498a.488.488 0 0 0-.488.488v.003c0 .27.218.488.488.488h.003a.488.488 0 0 0 .488-.488v-.003a.488.488 0 0 0-.488-.488h-.003ZM8.25 9.75A.488.488 0 0 0 7.762 9.262v-.003a.488.488 0 0 0-.488-.488h-.003a.488.488 0 0 0-.488.488v.003c0 .27.218.488.488.488h.003A.488.488 0 0 0 8.25 9.75Zm9-3A.488.488 0 0 0 16.762 6.262v-.003a.488.488 0 0 0-.488-.488h-.003a.488.488 0 0 0-.488.488v.003c0 .27.218.488.488.488h.003A.488.488 0 0 0 17.25 6.75Z" /></svg>);
const ScreenIcon: React.FC = () => (<svg className="w-6 h-6 mr-3 text-indigo-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" /></svg>);


// --- DADOS DO CURSO ---
const lessonsData = [
    {
        id: 'aula-1',
        title: 'Aula 01: A Base do Especialista - Quebrando Paradigmas',
        overview: 'Esta primeira aula é a mais crucial para capturar a atenção e a confiança dos alunos. O foco é desconstruir o maior erro conceitual do mercado (confundir trabalhista com previdenciário) e usar o "choque de realidade" para gerar um forte desejo pelo conhecimento correto.',
        objectives: [
            'Diferenciar o objetivo da legislação trabalhista (NR-15) e previdenciária (Anexo IV).',
            'Identificar as consequências financeiras e legais de um PPP/LTCAT incorreto.',
            'Compreender a linha do tempo básica da aposentadoria especial e sua importância.',
            'Reconhecer a oportunidade de mercado criada pela fiscalização do eSocial.',
        ],
        resources: [
            'Slides com a comparação lado a lado (Trabalhista vs. Previdenciário).',
            'Imagem ou print da notícia sobre a multa de R$74.000 (para impacto visual).',
            'Linha do tempo visualmente clara.',
        ],
        modules: [
            { title: 'Módulo 1: A Conexão Inicial - Validando a Insegurança', duration: '10 min', script: "Bem-vindos, futuros especialistas. Antes de mergulharmos no conteúdo, quero falar sobre um sentimento que aposto que muitos aqui compartilham: a insegurança. Aquele frio na barriga na hora de concluir um LTCAT, a dúvida se o código no PPP está certo, o medo de orientar um cliente e dar a informação errada. Eu quero que saibam que isso é normal. O próprio Eder, criador deste método, sentiu exatamente isso no início. Mas hoje, vamos começar a transformar essa insegurança em confiança absoluta.", pedagogy: { title: 'Ação Pedagógica (Mentora Ada)', tips: [{ type: 'Dica de Engajamento', content: 'Inicie com uma enquete ou peça para comentarem no chat: "Em uma escala de 0 a 10, quão seguros vocês se sentem HOJE para elaborar um LTCAT do zero? Sejam honestos!". Isso cria uma linha de base e engaja imediatamente.' }, { type: 'Ponto de Ênfase', content: 'Valide os sentimentos da audiência. Use frases como "Eu entendo perfeitamente" ou "Essa é a realidade de muitos profissionais hoje".' }] }, slideContent: 'Título da aula e uma imagem que transmita a ideia de "confusão vs. clareza".' },
            { title: 'Módulo 2: O Teste de Conhecimento de Impacto', duration: '15 min', script: "Vamos fazer um rápido teste. Vou apresentar três situações comuns em nosso dia a dia. Quero que vocês me digam qual delas dá direito à aposentadoria especial. Situação 1: Frio. Situação 2: Radiação de uma solda. Situação 3: Limpeza de banheiro de grande circulação. Pensem bem... comentem aí, qual a aposta de vocês? ... A resposta, que choca 80% dos profissionais, é: NENHUMA. E se isso te surpreendeu, parabéns, você está no lugar certo para entender o porquê.", pedagogy: { title: 'Ação Pedagógica (Mentora Ada)', tips: [{ type: 'Ponto de Ênfase', content: 'Crie um suspense antes de dar a resposta. Faça uma pausa dramática. A revelação é o primeiro "choque de paradigma" da aula. Use essa energia para introduzir o próximo módulo como a explicação para esse "mistério".' }] }, slideContent: 'Um slide para cada agente (Frio, Radiação Não Ionizante, Agentes Biológicos) com imagens, seguido por um slide com a revelação: "NENHUM".' },
            { title: 'Módulo 3: O Erro Fatal - Trabalhista vs. Previdenciário', duration: '20 min', script: "A razão pela qual a resposta é 'nenhuma' está no erro mais comum e mais perigoso da nossa área: confundir legislação trabalhista com previdenciária. São dois mundos diferentes, com objetivos diferentes. O mundo Trabalhista, regido pela NR-15, quer compensar o trabalhador com dinheiro, o adicional de insalubridade. O mundo Previdenciário, regido pelo Decreto 3.048/99, quer dar ao trabalhador tempo, uma aposentadoria mais cedo. Frio e limpeza de banheiro estão no mundo da NR-15, mas não estão na lista de agentes do Anexo IV do decreto. Misturar esses dois mundos é a receita para o desastre.", pedagogy: { title: 'Ação Pedagógica (Mentora Ada)', tips: [{ type: 'Analogia Visual', content: 'Peça para os alunos imaginarem duas caixas de ferramentas. Uma é a \'Caixa Trabalhista (NR-15)\', a outra é a \'Caixa Previdenciária (Anexo IV)\'. Usar a ferramenta errada para o serviço (fazer LTCAT com base na NR-15) vai dar problema.' }] }, slideContent: 'Um slide dividido em duas colunas: "LEGISLAÇÃO TRABALHISTA" (Objetivo: Dinheiro; Norma: NR-15) e "LEGISLAÇÃO PREVIDENCIÁRIA" (Objetivo: Tempo; Norma: Anexo IV, Dec. 3.048/99).' },
            { title: 'Módulo 4: Encerramento e a Grande Oportunidade', duration: '15 min', script: "Sei que essa primeira aula pode ser assustadora, mas meu objetivo é o oposto. Quero mostrar que onde há um grande problema, existe uma oportunidade gigante. O mercado está repleto de profissionais cometendo esses erros. As empresas estão desesperadas por alguém que traga segurança. O aluno Hugo Lins, aplicando esse conhecimento, gerou uma economia de R$600.000 para a empresa dele, resultando em três promoções. Dominar este assunto não é só sobre defesa, é sobre ataque. É sobre se tornar um ativo estratégico, valorizado e indispensável.", pedagogy: { title: 'Ação Pedagógica (Mentora Ada)', tips: [{ type: 'Transição Final', content: 'Termine com uma nota de esperança e empoderamento. A narrativa deve mudar de "medo das multas" para "entusiasmo pela oportunidade". Deixe claro que as próximas aulas fornecerão as ferramentas (o Método RAS) para capturar essa oportunidade.' }] }, slideContent: 'Slide com a foto do Hugo Lins (se disponível) e o valor "R$ 600.000,00 de economia". Finalize com o tema da próxima aula: "O Método RAS: O Caminho para a Segurança Total".' },
        ]
    },
    {
        id: 'aula-2',
        title: 'Aula 02: O Método RAS - O GPS do Especialista',
        overview: 'Após a desconstrução da Aula 01, a Aula 02 foca na construção da solução. O objetivo é apresentar o Método RAS como um framework mental simples, poderoso e replicável, que organiza o raciocínio e serve como um guia seguro para qualquer desafio na área. A aula culmina com a aplicação prática do método em um cenário complexo.',
        objectives: ['Explicar os três pilares do Método RAS (Regras, Avaliação, Segurança).', 'Identificar as fontes normativas corretas e sua hierarquia (Pilar R).', 'Diferenciar a metodologia de avaliação (NHO) dos limites de tolerância (NR-15) (Pilar A).', 'Analisar um problema sob as múltiplas óticas do INSS, Justiça e Receita Federal (Pilar S).', 'Aplicar o Método RAS para analisar um estudo de caso prático sobre ruído.'],
        resources: ['Slide com o diagrama do Método RAS (visual do tripé ou 3 pilares).', 'Slide com a "Pirâmide de Kelsen" simplificada.', 'Tabela comparativa com 3 colunas para o Pilar S (INSS vs. Justiça vs. Receita).'],
        modules: [
            { title: 'Módulo 1: Da Confusão à Estrutura', duration: '10 min', script: "Na última aula, quebramos alguns paradigmas. Muitos de vocês devem ter saído pensando 'Ok, entendi o que está errado, mas como eu faço o certo?'. Essa sensação de confusão é o primeiro passo para o aprendizado real. Hoje, vamos organizar essa confusão. Vou apresentar a vocês o GPS que vai guiar todas as suas decisões daqui para frente: o Método RAS.", pedagogy: { title: 'Ação Pedagógica (Mentora Ada)', tips: [{ type: 'Ponto de Ênfase', content: 'Valide a confusão da aula anterior como algo positivo e necessário para o crescimento. Apresente o Método RAS como a "luz no fim do túnel", a solução para a desconstrução feita anteriormente.' }] }, slideContent: 'Título da aula e uma imagem de um GPS ou mapa.' },
            { title: 'Módulo 2: Apresentando o Método RAS', duration: '15 min', script: "O Método RAS se baseia em três pilares que, juntos, tornam sua análise à prova de falhas. Pense neles como um tripé: se faltar uma perna, tudo desmorona. O primeiro pilar é o **R, de Regras**. É dominar a lei, saber onde procurar a informação correta. O segundo é o **A, de Avaliação**. É a precisão técnica, medir e analisar os agentes da forma correta. O terceiro, e talvez o mais importante, é o **S, de Segurança**. É entender como sua análise será vista por diferentes órgãos e garantir a segurança jurídica para seu cliente.", pedagogy: { title: 'Ação Pedagógica (Mentora Ada)', tips: [{ type: 'Analogia Visual', content: 'Use a imagem de um tripé ou de três colunas sustentando um teto chamado "Especialista". Peça para os alunos digitarem no chat "RAS" para ajudar na fixação.' }] }, slideContent: 'Um diagrama claro e memorável mostrando os três pilares: R (Regras), A (Avaliação) e S (Segurança).' },
            { title: 'Módulo 3: Método RAS em Ação - Estudo de Caso do Ruído', duration: '25 min', script: "Agora vamos usar o nosso GPS. Cenário: trabalhador exposto a 87 dBA, com EPI eficaz e PCA documentado. Como analisamos? Primeiro, **Pilar R (Regras)**: a regra diz que o limite é 85 dBA. Portanto, há exposição. Segundo, **Pilar A (Avaliação)**: a medição foi feita pela NHO-01, e a análise técnica do PCA mostra que o EPI é eficaz. Terceiro, e mais importante, **Pilar S (Segurança)**: como orientamos o cliente? Aqui está o script de ouro que vocês devem usar...", pedagogy: { title: 'Ação Pedagógica (Mentora Ada)', tips: [{ type: 'Ponto de Ênfase (O Script de Ouro)', content: 'Apresente este texto em um slide e peça para os alunos tirarem um print. Diga: "Esta é a frase que vale o curso. É assim que um especialista orienta":\n"Cliente, com base na nossa avaliação técnica, seu EPI é eficaz. No entanto, para o INSS, o benefício de aposentadoria provavelmente será concedido ao trabalhador. Para a Receita Federal, o tributo de 6% sobre a folha é devido. A decisão final sobre a estratégia (pagar, discutir judicialmente) é sua, mas meu papel é apresentar todos os riscos e cenários para que você decida com segurança."' }] }, slideContent: 'Slides sequenciais aplicando cada pilar ao estudo de caso, culminando no "Script de Ouro" em destaque.' },
        ]
    },
    {
        id: 'aula-3',
        title: 'Aula 03: O Futuro é Agora - eSocial e Valorização',
        overview: 'Esta aula conecta todo o conhecimento adquirido à realidade implacável do eSocial e à visão de futuro da profissão. O objetivo é materializar a fiscalização, mostrando COMO a Receita Federal cruza os dados, e terminar com uma poderosa mensagem de empoderamento, posicionando o especialista como uma figura central e estratégica nas empresas.',
        objectives: ['Entender os impactos futuros do PLC 245/2019 (periculosidade).', 'Explicar como o evento S-2240 alimenta o PPP Eletrônico.', 'Visualizar o mecanismo de cruzamento de dados entre o S-2240 (SST) e o S-1200 (Folha).', 'Compreender o seu papel estratégico na garantia da conformidade fiscal e previdenciária da empresa.'],
        resources: ['Fluxograma simples mostrando o cruzamento de dados (S-2240 -> Robô da Receita <- S-1200).', 'Diagrama do estudo de caso dos terceirizados (Prestadora -> Tomador -> Receita).', 'Slide final com uma mensagem inspiradora sobre o valor do especialista.'],
        modules: [
            { title: 'Módulo 1: O Futuro Chegando - PLC da Periculosidade', duration: '15 min', script: "Um verdadeiro especialista não apenas domina o presente, mas antecipa o futuro. E o futuro tem nome: PLC 245 de 2019. Quero contar os bastidores: o texto original da reforma da previdência tirava a periculosidade do jogo, mas uma manobra no Senado manteve a porta aberta. Esse projeto vem para regulamentar isso. O que significa na prática? Mais atividades gerando aposentadoria especial, mais empresas precisando pagar o tributo do FAI e, claro, uma nova onda de demanda gigantesca por quem entende do assunto. Quem se preparar agora, vai surfar essa onda.", pedagogy: { title: 'Ação Pedagógica (Mentora Ada)', tips: [{ type: 'Ponto de Ênfase', content: 'A narrativa de "bastidores" torna um assunto legislativo seco em algo interessante. Foque na consequência prática: "Mais demanda, mais oportunidades". Isso conecta o futuro com o objetivo de carreira dos alunos.' }] }, slideContent: 'Slide com o título "PLC 245/2019: A Próxima Grande Onda de Oportunidades".' },
            { title: 'Módulo 2: A Fiscalização na Prática - O Robô da Receita', duration: '20 min', script: "Mas como a fiscalização acontece? Imaginem um robô da Receita Federal trabalhando 24 horas por dia. De um lado, a gente (SST) envia o S-2240 dizendo: 'Há exposição a ruído acima de 85'. Do outro lado, o DP/Contabilidade envia a folha de pagamento, o S-1200, dizendo: 'Não há tributo a pagar'. O robô olha os dois documentos, vê a contradição e acende uma luz vermelha gigante: 'CONFISSÃO DE DÍVIDA'. É simples assim. A fiscalização não é mais um auditor batendo na porta, ela é automática, digital e implacável.", pedagogy: { title: 'Ação Pedagógica (Mentora Ada)', tips: [{ type: 'Analogia Visual', content: 'Desenhe ou mostre um fluxograma: [Caixa S-2240] -> [Robô da Receita] <- [Caixa S-1200]. No meio, um grande "X" vermelho se a informação for inconsistente. Essa imagem visualiza o processo e é extremamente eficaz.' }] }, slideContent: 'O fluxograma do "Robô da Receita" e o diagrama do caso dos terceirizados.' },
            { title: 'Módulo 3: Encerramento - O Valor do Especialista', duration: '15 min', script: "Ao longo dessas aulas, vimos os problemas, as regras, o método e a fiscalização. E tudo isso nos leva a uma conclusão: nunca houve um momento melhor para ser um especialista de verdade nesta área. As empresas estão perdidas, com medo da fiscalização. Elas não precisam de mais um preenchedor de laudos, precisam de um estrategista que traga segurança. O conhecimento que vocês adquiriram aqui é a chave para isso. É o que permite que vocês durmam tranquilos, sabendo que fizeram o certo. É o que faz com que as pessoas te vejam como referência. Isso não tem preço. O mercado é de vocês.", pedagogy: { title: 'Ação Pedagógica (Mentora Ada)', tips: [{ type: 'Ponto de Ênfase', content: 'O tom aqui deve ser inspirador e de empoderamento. A mensagem final não é técnica, é sobre carreira, propósito e realização profissional. Use a citação do instrutor Eder sobre "acordar seguro" e "ser visto como referência" para um fechamento emocional e motivador.' }] }, slideContent: 'Um slide final com uma frase impactante, como: "De profissional reativo a consultor estratégico. Esse é o seu caminho." e informações sobre os próximos passos da mentoria.' },
        ]
    }
];

const TeachingGuide: React.FC = () => {
    const [openLesson, setOpenLesson] = useState<string | null>('aula-1');

    const toggleLesson = (id: string) => {
        setOpenLesson(openLesson === id ? null : id);
    };

    return (
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-slate-200">
            <header className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Guia de Ensino da Mentora</h2>
                <p className="text-slate-600 mt-2 text-lg">Desenvolvido para Ada Azevedo Barbosa</p>
            </header>

            <section className="mb-10 prose max-w-none text-slate-700">
                <h3 className="text-xl font-semibold text-purple-700 border-l-4 border-purple-600 pl-3">Introdução ao Guia</h3>
                <p className="mt-2">Mentora Ada, este guia é seu manual de mentoria completo. Ele foi reestruturado para ser um roteiro pedagógico "pronto para gravar", detalhando não apenas o conteúdo, mas a metodologia de ensino que gera impacto e engajamento. Use esta estrutura para conduzir suas aulas com máxima eficácia.</p>
            </section>

            <div className="space-y-4">
                {lessonsData.map((lesson) => (
                    <div key={lesson.id} className="border border-slate-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => toggleLesson(lesson.id)}
                            className="w-full flex justify-between items-center p-4 md:p-5 bg-slate-50 hover:bg-slate-100 transition"
                            aria-expanded={openLesson === lesson.id}
                            aria-controls={`lesson-content-${lesson.id}`}
                        >
                            <span className="text-xl font-bold text-purple-800 text-left">{lesson.title}</span>
                            <ChevronDownIcon className={openLesson === lesson.id ? 'rotate-180' : ''} />
                        </button>
                        <div
                            id={`lesson-content-${lesson.id}`}
                            className={`transition-all duration-500 ease-in-out ${openLesson === lesson.id ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="p-4 md:p-6 space-y-8 bg-white">
                                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                        <h4 className="font-bold text-blue-800 flex items-center"><InfoIcon /> Visão Geral</h4>
                                        <p className="text-slate-700 mt-2 text-sm">{lesson.overview}</p>
                                    </div>
                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                        <h4 className="font-bold text-green-800 flex items-center"><TargetIcon /> Objetivos</h4>
                                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700 text-sm">{lesson.objectives.map(o => <li key={o}>{o}</li>)}</ul>
                                    </div>
                                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                                        <h4 className="font-bold text-orange-800 flex items-center"><ToolsIcon /> Recursos</h4>
                                        <ul className="list-disc list-inside mt-2 space-y-1 text-slate-700 text-sm">{lesson.resources.map(r => <li key={r}>{r}</li>)}</ul>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2 border-b-2 border-purple-200 pb-2">Estrutura Detalhada da Aula</h3>
                                    {lesson.modules.map(module => (
                                        <div key={module.title} className="p-4 rounded-lg border border-slate-200 shadow-sm">
                                            <div className="flex justify-between items-baseline">
                                                <h4 className="text-lg font-bold text-slate-800">{module.title}</h4>
                                                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{module.duration}</span>
                                            </div>
                                            <p className="mt-3 text-slate-700 leading-relaxed"><strong className="text-slate-600">Roteiro de Fala:</strong> {module.script}</p>
                                            <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                                                <h5 className="font-bold text-yellow-800 flex items-center"><LightbulbIcon /> {module.pedagogy.title}</h5>
                                                <div className="mt-2 space-y-2">
                                                    {module.pedagogy.tips.map(tip => <p key={tip.type} className="text-slate-700 text-sm"><strong className="text-yellow-700">{tip.type}:</strong> {tip.content}</p>)}
                                                </div>
                                            </div>
                                            <div className="mt-4 bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-r-lg">
                                                <h5 className="font-bold text-indigo-800 flex items-center"><ScreenIcon /> Conteúdo para Slides</h5>
                                                <p className="text-slate-700 mt-2 text-sm">{module.slideContent}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="text-center text-sm text-slate-500 mt-8 pt-4 border-t border-slate-200">
                <p>&copy; 2024-2025 A2B Consultoria. Material de uso exclusivo da mentora.</p>
            </footer>
        </div>
    );
};

export default TeachingGuide;