
import React from 'react';

const EnsinoAula01: React.FC = () => (
    <div id="ensino-aula1" className="mt-8 pt-6 border-t-2 border-slate-300">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Plano de Aula 01: A Base do Especialista - Quebrando Paradigmas</h2>
        
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg space-y-4">
            <div>
                <h3 className="text-lg font-semibold text-slate-800">Visão Geral da Aula</h3>
                <p>Esta primeira aula é a mais crucial para capturar a atenção e a confiança dos alunos. O foco é desconstruir o maior erro conceitual do mercado (confundir trabalhista com previdenciário) e usar o "choque de realidade" para gerar um forte desejo pelo conhecimento correto.</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-slate-800">Objetivos de Aprendizagem</h3>
                <p>Ao final desta aula, o aluno será capaz de:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Diferenciar o objetivo da legislação trabalhista (NR-15) e previdenciária (Anexo IV).</li>
                    <li>Identificar as consequências financeiras e legais de um PPP/LTCAT incorreto.</li>
                    <li>Compreender a linha do tempo básica da aposentadoria especial e sua importância.</li>
                    <li>Reconhecer a oportunidade de mercado criada pela fiscalização do eSocial.</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-slate-800">Recursos Necessários</h3>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Slides com a comparação lado a lado (Trabalhista vs. Previdenciário).</li>
                    <li>Imagem ou print da notícia sobre a multa de R$74.000 (para impacto visual).</li>
                    <li>Linha do tempo visualmente clara.</li>
                </ul>
            </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">Estrutura Detalhada da Aula</h3>

        <div className="space-y-6">
            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 1: A Conexão Inicial - Validando a Insegurança (Tempo: ~10 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"Bem-vindos, futuros especialistas. Antes de mergulharmos no conteúdo, quero falar sobre um sentimento que aposto que muitos aqui compartilham: a insegurança. Aquele frio na barriga na hora de concluir um LTCAT, a dúvida se o código no PPP está certo, o medo de orientar um cliente e dar a informação errada. Eu quero que saibam que isso é normal. O próprio Eder, criador deste método, sentiu exatamente isso no início. Mas hoje, vamos começar a transformar essa insegurança em confiança absoluta."</p>
                <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Dica de Engajamento:</strong> Inicie com uma enquete ou peça para comentarem no chat: "Em uma escala de 0 a 10, quão seguros vocês se sentem HOJE para elaborar um LTCAT do zero? Sejam honestos!". Isso cria uma linha de base e engaja imediatamente.</p>
                    <p><strong>Ponto de Ênfase:</strong> Valide os sentimentos da audiência. Use frases como "Eu entendo perfeitamente" ou "Essa é a realidade de muitos profissionais hoje".</p>
                </blockquote>
                 <p className="mt-1 font-semibold text-slate-600">Conteúdo-Chave a ser Exibido (Slide/Tela):</p>
                <p>Título da aula e uma imagem que transmita a ideia de "confusão vs. clareza".</p>
            </div>
            
            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 2: O Teste de Conhecimento de Impacto (Tempo: ~15 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"Vamos fazer um rápido teste. Vou apresentar três situações comuns em nosso dia a dia. Quero que vocês me digam qual delas dá direito à aposentadoria especial. Situação 1: Frio. Situação 2: Radiação de uma solda. Situação 3: Limpeza de banheiro de grande circulação. Pensem bem... comentem aí, qual a aposta de vocês? ... A resposta, que choca 80% dos profissionais, é: NENHUMA. E se isso te surpreendeu, parabéns, você está no lugar certo para entender o porquê."</p>
                <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Ponto de Ênfase:</strong> Crie um suspense antes de dar a resposta. Faça uma pausa dramática. A revelação é o primeiro "choque de paradigma" da aula. Use essa energia para introduzir o próximo módulo como a explicação para esse "mistério".</p>
                </blockquote>
                <p className="mt-1 font-semibold text-slate-600">Conteúdo-Chave a ser Exibido (Slide/Tela):</p>
                <p>Um slide para cada agente (Frio, Radiação Não Ionizante, Agentes Biológicos) com imagens, seguido por um slide com a revelação: "NENHUM".</p>
            </div>

            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 3: O Erro Fatal - Trabalhista vs. Previdenciário (Tempo: ~20 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"A razão pela qual a resposta é 'nenhuma' está no erro mais comum e mais perigoso da nossa área: confundir legislação trabalhista com previdenciária. São dois mundos diferentes, com objetivos diferentes. O mundo Trabalhista, regido pela NR-15, quer compensar o trabalhador com dinheiro, o adicional de insalubridade. O mundo Previdenciário, regido pelo Decreto 3.048/99, quer dar ao trabalhador tempo, uma aposentadoria mais cedo. Frio e limpeza de banheiro estão no mundo da NR-15, mas não estão na lista de agentes do Anexo IV do decreto. Misturar esses dois mundos é a receita para o desastre."</p>
                 <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Analogia Visual:</strong> Peça para os alunos imaginarem duas caixas de ferramentas. Uma é a 'Caixa Trabalhista (NR-15)', a outra é a 'Caixa Previdenciária (Anexo IV)'. Usar a ferramenta errada para o serviço (fazer LTCAT com base na NR-15) vai dar problema.</p>
                </blockquote>
                <p className="mt-1 font-semibold text-slate-600">Conteúdo-Chave a ser Exibido (Slide/Tela):</p>
                <p>Um slide dividido em duas colunas: "LEGISLAÇÃO TRABALHISTA" (Objetivo: Dinheiro; Norma: NR-15) e "LEGISLAÇÃO PREVIDENCIÁRIA" (Objetivo: Tempo; Norma: Anexo IV, Dec. 3.048/99).</p>
            </div>

            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 4: As Consequências Reais (Tempo: ~10 min)</h4>
                 <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                 <p className="mt-1">"E qual o problema de confundir as caixas de ferramentas? O problema tem nome e valor. Uma empresa foi condenada a pagar R$74.000 não por falta de pagamento, mas por um PPP preenchido errado. A condenação foi por danos morais e materiais. Isso significa que um erro no seu documento pode gerar um prejuízo financeiro enorme para o cliente e manchar sua reputação profissional. Com o eSocial, a chance desse erro ser pego é de quase 100%."</p>
                 <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Ponto de Ênfase:</strong> Repita a causa da multa: "Não foi por não pagar insalubridade, foi por PREENCHER O PPP ERRADO". Isso conecta diretamente o erro conceitual a uma consequência financeira real e dolorosa.</p>
                </blockquote>
                <p className="mt-1 font-semibold text-slate-600">Conteúdo-Chave a ser Exibido (Slide/Tela):</p>
                <p>Slide com a manchete da multa de R$74.000 e os três impactados: Empresa (Multa), Trabalhador (Aposentadoria Negada), Profissional (Responsabilidade).</p>
            </div>

            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 5: Encerramento e a Grande Oportunidade (Tempo: ~15 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"Sei que essa primeira aula pode ser assustadora, mas meu objetivo é o oposto. Quero mostrar que onde há um grande problema, existe uma oportunidade gigante. O mercado está repleto de profissionais cometendo esses erros. As empresas estão desesperadas por alguém que traga segurança. O aluno Hugo Lins, aplicando esse conhecimento, gerou uma economia de R$600.000 para a empresa dele, resultando em três promoções. Dominar este assunto não é só sobre defesa, é sobre ataque. É sobre se tornar um ativo estratégico, valorizado e indispensável."</p>
                 <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Transição Final:</strong> Termine com uma nota de esperança e empoderamento. A narrativa deve mudar de "medo das multas" para "entusiasmo pela oportunidade". Deixe claro que as próximas aulas fornecerão as ferramentas (o Método RAS) para capturar essa oportunidade.</p>
                </blockquote>
                 <p className="mt-1 font-semibold text-slate-600">Conteúdo-Chave a ser Exibido (Slide/Tela):</p>
                <p>Slide com a foto do Hugo Lins (se disponível) e o valor "R$ 600.000,00 de economia". Finalize com o tema da próxima aula: "O Método RAS: O Caminho para a Segurança Total".</p>
            </div>
        </div>
    </div>
);

export default EnsinoAula01;
