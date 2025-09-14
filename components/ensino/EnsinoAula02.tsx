
import React from 'react';

const EnsinoAula02: React.FC = () => (
    <div id="ensino-aula2" className="mt-8 pt-6 border-t-2 border-slate-300">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Plano de Aula 02: O Método RAS - O GPS do Especialista</h2>

        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg space-y-4">
             <div>
                <h3 className="text-lg font-semibold text-slate-800">Visão Geral da Aula</h3>
                <p>Após a desconstrução da Aula 01, a Aula 02 foca na construção da solução. O objetivo é apresentar o Método RAS como um framework mental simples, poderoso e replicável, que organiza o raciocínio e serve como um guia seguro para qualquer desafio na área. A aula culmina com a aplicação prática do método em um cenário complexo.</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-slate-800">Objetivos de Aprendizagem</h3>
                <p>Ao final desta aula, o aluno será capaz de:</p>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Explicar os três pilares do Método RAS (Regras, Avaliação, Segurança).</li>
                    <li>Identificar as fontes normativas corretas e sua hierarquia (Pilar R).</li>
                    <li>Diferenciar a metodologia de avaliação (NHO) dos limites de tolerância (NR-15) (Pilar A).</li>
                    <li>Analisar um problema sob as múltiplas óticas do INSS, Justiça e Receita Federal (Pilar S).</li>
                    <li>Aplicar o Método RAS para analisar um estudo de caso prático sobre ruído.</li>
                </ul>
            </div>
             <div>
                <h3 className="text-lg font-semibold text-slate-800">Recursos Necessários</h3>
                <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Slide com o diagrama do Método RAS (visual do tripé ou 3 pilares).</li>
                    <li>Slide com a "Pirâmide de Kelsen" simplificada.</li>
                    <li>Tabela comparativa com 3 colunas para o Pilar S (INSS vs. Justiça vs. Receita).</li>
                </ul>
            </div>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-2">Estrutura Detalhada da Aula</h3>

        <div className="space-y-6">
            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 1: Da Confusão à Estrutura (Tempo: ~10 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"Na última aula, quebramos alguns paradigmas. Muitos de vocês devem ter saído pensando 'Ok, entendi o que está errado, mas como eu faço o certo?'. Essa sensação de confusão é o primeiro passo para o aprendizado real. Hoje, vamos organizar essa confusão. Vou apresentar a vocês o GPS que vai guiar todas as suas decisões daqui para frente: o Método RAS."</p>
                <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                     <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                     <p><strong>Ponto de Ênfase:</strong> Valide a confusão da aula anterior como algo positivo e necessário para o crescimento. Apresente o Método RAS como a "luz no fim do túnel", a solução para a desconstrução feita anteriormente.</p>
                </blockquote>
            </div>

            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 2: Apresentando o Método RAS (Regras, Avaliação, Segurança) (Tempo: ~15 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"O Método RAS se baseia em três pilares que, juntos, tornam sua análise à prova de falhas. Pense neles como um tripé: se faltar uma perna, tudo desmorona. O primeiro pilar é o **R, de Regras**. É dominar a lei, saber onde procurar a informação correta. O segundo é o **A, de Avaliação**. É a precisão técnica, medir e analisar os agentes da forma correta. O terceiro, e talvez o mais importante, é o **S, de Segurança**. É entender como sua análise será vista por diferentes órgãos e garantir a segurança jurídica para seu cliente."</p>
                <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Analogia Visual:</strong> Use a imagem de um tripé ou de três colunas sustentando um teto chamado "Especialista". Peça para os alunos digitarem no chat "RAS" para ajudar na fixação.</p>
                    <p><strong>Ponto de Ênfase:</strong> Repita o nome completo "Regras, Avaliação, Segurança" algumas vezes antes de usar apenas a sigla RAS.</p>
                </blockquote>
                <p className="mt-1 font-semibold text-slate-600">Conteúdo-Chave a ser Exibido (Slide/Tela):</p>
                <p>Um diagrama claro e memorável mostrando os três pilares: R (Regras), A (Avaliação) e S (Segurança).</p>
            </div>

            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 3: Aprofundando nos Pilares (Tempo: ~20 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"No pilar **R (Regras)**, a chave é entender a hierarquia. Uma Instrução Normativa do INSS não pode passar por cima de um Decreto. No pilar **A (Avaliação)**, existe uma pegadinha mortal: a metodologia para o LTCAT vem das NHOs da Fundacentro, mas os limites de tolerância podem vir da NR-15. Não use a NR-15 para a metodologia! E no pilar **S (Segurança)**, você aprende a pensar como um estrategista. Para um mesmo caso de ruído, o INSS pode pensar 'benefício concedido', a Receita vai pensar 'tributo devido' e a Justiça ainda pode estar debatendo. O especialista conhece todos esses cenários."</p>
                <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                     <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                     <p><strong>Dica de Engajamento:</strong> Ao explicar o Pilar S, crie uma tabela ao vivo (em um quadro branco virtual ou slide) com as 3 colunas (INSS, Receita, Justiça) e preencha o campo "Ruído com EPI" em cada uma, mostrando as diferentes visões. Isso torna o conceito abstrato muito concreto.</p>
                </blockquote>
                 <p className="mt-1 font-semibold text-slate-600">Conteúdo-Chave a ser Exibido (Slide/Tela):</p>
                <p>Um slide para cada pilar, detalhando as fontes principais (R), a diferença NHO vs. NR-15 (A) e a tabela comparativa (S).</p>
            </div>

            <div className="border-l-4 border-slate-400 pl-4 py-2">
                <h4 className="font-bold">Módulo 4: Método RAS em Ação - Estudo de Caso do Ruído (Tempo: ~25 min)</h4>
                <p className="mt-1 font-semibold text-slate-600">Roteiro de Fala:</p>
                <p className="mt-1">"Agora vamos usar o nosso GPS. Cenário: trabalhador exposto a 87 dBA, com EPI eficaz e PCA documentado. Como analisamos? Primeiro, **Pilar R (Regras)**: a regra diz que o limite é 85 dBA. Portanto, há exposição. Segundo, **Pilar A (Avaliação)**: a medição foi feita pela NHO-01, e a análise técnica do PCA mostra que o EPI é eficaz. Terceiro, e mais importante, **Pilar S (Segurança)**: como orientamos o cliente? Aqui está o script de ouro que vocês devem usar..."</p>
                 <blockquote className="my-2 p-2 bg-slate-100 rounded-r-md border-l-2 border-slate-500">
                    <h5 className="font-bold text-sm">Ação Pedagógica (Mentora Ada):</h5>
                    <p><strong>Ponto de Ênfase (O Script de Ouro):</strong> Apresente o texto abaixo em um slide e peça para os alunos tirarem um print. Diga: "Esta é a frase que vale o curso. É assim que um especialista orienta".</p>
                    <div className="p-2 mt-2 bg-yellow-100 border border-yellow-300 rounded">
                        <p className="font-mono text-sm">"Cliente, com base na nossa avaliação técnica, seu EPI é eficaz. No entanto, para o INSS, o benefício de aposentadoria provavelmente será concedido ao trabalhador. Para a Receita Federal, o tributo de 6% sobre a folha é devido. A decisão final sobre a estratégia (pagar, discutir judicialmente) é sua, mas meu papel é apresentar todos os riscos e cenários para que você decida com segurança."</p>
                    </div>
                </blockquote>
                 <p className="mt-1 font-semibold text-slate-600">Conteúdo-Chave a ser Exibido (Slide/Tela):</p>
                <p>Slides sequenciais aplicando cada pilar ao estudo de caso, culminando no "Script de Ouro" em destaque.</p>
            </div>
        </div>
    </div>
);

export default EnsinoAula02;
