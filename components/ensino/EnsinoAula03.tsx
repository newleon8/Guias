import React from 'react';

const EnsinoAula03: React.FC = () => (
    <div id="ensino-aula3" className="mt-8 pt-6 border-t-2 border-slate-300">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Plano de Aula 03: O Futuro é Agora - eSocial e Valorização</h2>

        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg space-y-4">
            <div>
                <h3 className="text-lg font-semibold text-slate-800">Visão Geral da Aula</h3>
                <p>Esta aula conecta todo o conhecimento adquirido à realidade implacável do eSocial e à visão de futuro da profissão. O objetivo é materializar a fiscalização, mostrando COMO a Receita Federal cruza os dados, e terminar com uma poderosa mensagem de empoderamento, posicionando o especialista como uma figura central e estratégica nas empresas.</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-slate-800">Objetivos de Aprendizagem</h3>
                <p>Ao final desta aula, o aluno será capaz de:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Entender os impactos futuros do PLC 245/2019 (periculosidade).</li>
                    <li>Explicar como o evento S-2240 alimenta o PPP Eletrônico.</li>
                    <li>Visualizar o mecanismo de cruzamento de dados entre o S-2240 (SST) e o S-1200 (Folha).</li>
                    <li>Compreender o seu papel estratégico na garantia da conformidade fiscal e previdenciária da empresa.</li>
                </ul>
            </div>
             <div>
                <h3 className="text-lg font-semibold text-slate-800">Recursos Necessários</h3>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Fluxograma simples mostrando o cruzamento de dados (S-2240 -> Robô da Receita <- S-1200).</li>
                    <li>Diagrama do estudo de caso dos terceirizados (Prestadora -> Tomador -> Receita).</li>
                    <li>Slide final com uma mensagem inspiradora sobre o valor do especialista.</li>
                </ul>
            </div>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">Estrutura Detalhada da Aula</h3>

        <div className="space-y-6">
            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 1: O Futuro Chegando - PLC da Periculosidade (Tempo: ~15 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"Um verdadeiro especialista não apenas domina o presente, mas antecipa o futuro. E o futuro tem nome: PLC 245 de 2019. Quero contar os bastidores: o texto original da reforma da previdência tirava a periculosidade do jogo, mas uma manobra no Senado manteve a porta aberta. Esse projeto vem para regulamentar isso. O que significa na prática? Mais atividades gerando aposentadoria especial, mais empresas precisando pagar o tributo do FAI e, claro, uma nova onda de demanda gigantesca por quem entende do assunto. Quem se preparar agora, vai surfar essa onda."</p>
                 <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Ponto de Ênfase:</strong> A narrativa de "bastidores" torna um assunto legislativo seco em algo interessante. Foque na consequência prática: "Mais demanda, mais oportunidades". Isso conecta o futuro com o objetivo de carreira dos alunos.</p>
                </blockquote>
            </div>

            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 2: eSocial - O Ponto de Virada (Tempo: ~10 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"Falando em futuro, ele já começou. Em 2023, o eSocial mudou tudo. O antigo PPP de papel foi substituído pelo PPP eletrônico. E como ele é formado? A empresa envia o evento S-2240, com todas as informações do LTCAT. O INSS pega esses dados e monta o PPP no aplicativo do trabalhador. Isso significa que a nossa responsabilidade aumentou exponencialmente. Cada envio é uma declaração oficial para o governo. O profissional de SST foi 'promovido' a gestor de informações previdenciárias e tributárias, quer ele saiba disso ou não."</p>
                <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Ponto de Ênfase:</strong> Repita a frase: "O profissional de SST foi promovido a gestor de informações previdenciárias e tributárias". É uma frase poderosa que resume a mudança de paradigma imposta pelo eSocial.</p>
                </blockquote>
            </div>

            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 3: A Fiscalização na Prática - O Robô da Receita (Tempo: ~20 min)</h4>
                 <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                 <p className="mt-1">"Mas como a fiscalização acontece? Imaginem um robô da Receita Federal trabalhando 24 horas por dia. De um lado, a gente (SST) envia o S-2240 dizendo: 'Há exposição a ruído acima de 85'. Do outro lado, o DP/Contabilidade envia a folha de pagamento, o S-1200, dizendo: 'Não há tributo a pagar'. O robô olha os dois documentos, vê a contradição e acende uma luz vermelha gigante: 'CONFISSÃO DE DÍVIDA'. É simples assim. A fiscalização não é mais um auditor batendo na porta, ela é automática, digital e implacável."</p>
                 <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Analogia Visual:</strong> Desenhe ou mostre um fluxograma: [Caixa S-2240] -> [Robô da Receita] <- [Caixa S-1200]. No meio, um grande "X" vermelho se a informação for inconsistente. Essa imagem visualiza o processo e é extremamente eficaz.</p>
                    <p><strong>Dica de Engajamento:</strong> Use o estudo de caso do terceirizado no hospital para mostrar um nível ainda mais avançado de cruzamento, envolvendo o EFD-Reinf do tomador de serviço.</p>
                </blockquote>
                 <p className="mt-1 font-semibold text-slate-600">Conteúdo-Chave a ser Exibido (Slide/Tela):</p>
                 <p>O fluxograma do "Robô da Receita" e o diagrama do caso dos terceirizados.</p>
            </div>

            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 4: Encerramento - O Valor do Especialista (Tempo: ~15 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"Ao longo dessas aulas, vimos os problemas, as regras, o método e a fiscalização. E tudo isso nos leva a uma conclusão: nunca houve um momento melhor para ser um especialista de verdade nesta área. As empresas estão perdidas, com medo da fiscalização. Elas não precisam de mais um preenchedor de laudos, precisam de um estrategista que traga segurança. O conhecimento que vocês adquiriram aqui é a chave para isso. É o que permite que vocês durmam tranquilos, sabendo que fizeram o certo. É o que faz com que as pessoas te vejam como referência. Isso não tem preço. O mercado é de vocês."</p>
                 <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Ponto de Ênfase:</strong> O tom aqui deve ser inspirador e de empoderamento. A mensagem final não é técnica, é sobre carreira, propósito e realização profissional. Use a citação do instrutor Eder sobre "acordar seguro" e "ser visto como referência" para um fechamento emocional e motivador.</p>
                </blockquote>
                 <p className="mt-1 font-semibold text-slate-600">Conteúdo-Chave a ser Exibido (Slide/Tela):</p>
                 <p>Um slide final com uma frase impactante, como: "De profissional reativo a consultor estratégico. Esse é o seu caminho." e informações sobre os próximos passos da mentoria.</p>
            </div>
        </div>
    </div>
);

export default EnsinoAula03;