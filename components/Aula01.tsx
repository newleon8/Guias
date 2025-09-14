
import React from 'react';

const Timestamp: React.FC<{ time: string }> = ({ time }) => {
    const timeToSeconds = (timeStr: string) => {
        const parts = timeStr.split(':').map(Number);
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
        return 0;
    };
    const url = `https://www.youtube.com/watch?v=fFneUz3G8CM&t=${timeToSeconds(time)}s`;
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="timestamp text-xs text-slate-400 hover:text-blue-500 transition-colors ml-2 font-mono" title={`Ver na Aula 1 em ${time}`}>
            [{time}]
        </a>
    );
};

const Aula01: React.FC = () => (
    <div id="aula1" className="mt-8 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-cyan-700 mb-4">Parte 1: Aula 01 - Os Erros Fatais e as Consequências</h2>
        
        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">1.1. Boas-vindas e a Importância Estratégica do Tema<Timestamp time="02:34" /></h3>
        <p>O tema da Aposentadoria Especial, juntamente com o PPP e o LTCAT, tornou-se o foco principal da Receita Federal no universo da Saúde e Segurança do Trabalho (SST). O objetivo deste curso é proporcionar a você, profissional de SST, RH, ou Departamento Pessoal, a segurança necessária para elaborar os documentos mais importantes da área, orientar seus clientes e se destacar em um mercado cada vez mais exigente.</p>
        <blockquote className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg my-4 text-slate-800">
             <p className="font-medium">"Eu me sentia muito, muito inseguro para orientar meus clientes, inseguro para fazer conclusões no LTCAT, para preencher um PPP, para orientar sobre LTCAT do passado... Essa insegurança é compreensível, mas superá-la é o que diferencia um profissional comum de um especialista valorizado." <span className="text-sm text-slate-500">- Eder Santos</span></p>
             <Timestamp time="04:12" />
        </blockquote>
        <blockquote className="border-l-4 border-cyan-500 bg-cyan-50 p-4 rounded-r-lg my-4 text-slate-800">
            <h4 className="font-bold text-cyan-700">A Descoberta do Problema Real</h4>
            <p className="font-medium mt-1">"Quando comecei, fui obrigado a pesquisar na internet para entender o que era um LTCAT. E por incrível que pareça, 100% dos modelos que encontrei na época falavam apenas de adicional de insalubridade. Foi aí que percebi: tem algo de errado no mercado. Mais de 95% dos profissionais não sabiam diferenciar legislação trabalhista da previdenciária." <span className="text-sm text-slate-500">- Eder Santos</span></p>
            <Timestamp time="48:57" />
        </blockquote>
        <p className="mt-2">Ao dominar este assunto, você transforma seu conhecimento em resultados concretos para as empresas, ajudando-as a reduzir custos e evitar multas, o que leva ao reconhecimento e à valorização profissional.</p>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">1.2. Teste de Conhecimento Inicial: A Grande Confusão<Timestamp time="14:32" /></h3>
        <p className="mt-2">Para avaliar o nível de conhecimento inicial, vamos analisar três situações comuns e determinar se elas dão direito à aposentadoria especial.</p>
        <div className="bg-slate-100 border border-slate-200 p-4 rounded-lg my-3 space-y-3">
            <div><p><strong className="text-slate-800">Agente 1: Frio</strong></p></div>
            <div><p><strong className="text-slate-800">Agente 2: Radiações Não Ionizantes (Ex: solda)</strong></p></div>
            <div><p><strong className="text-slate-800">Atividade 3: Limpeza de Banheiro e Coleta de Lixo</strong></p></div>
            <div className="pt-3 border-t border-slate-300">
                <p className="font-semibold text-red-600">A Resposta Surpreendente<Timestamp time="15:51" /></p>
                <p className="mt-1"><strong>Nenhum</strong> desses agentes ou atividades, da forma como foram apresentados, é considerado para fins de aposentadoria especial. Portanto, eles não devem constar no LTCAT e não devem ser enviados ao eSocial com o objetivo de caracterizar tempo especial.</p>
            </div>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">1.3. O Erro Mais Comum e Suas Graves Consequências<Timestamp time="16:24" /></h3>
        <blockquote className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg my-4">
            <h4 className="font-bold text-red-700">Ponto Crítico: Legislação Trabalhista vs. Previdenciária</h4>
            <p className="mt-1">Cerca de 80% dos profissionais cometem o erro de confundir os dois universos legais que regem a SST, cada um com seus próprios objetivos e regras.</p>
        </blockquote>
        <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-800">Legislação Trabalhista (Foco: Adicional de Insalubridade)</h4>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700">
                    <li><strong>Objetivo:</strong> Compensar financeiramente o trabalhador.</li>
                    <li><strong>Norma Principal:</strong> NR-15.</li>
                    <li><strong>Aplicação:</strong> Frio, radiação não ionizante e limpeza de banheiros (Súmula 448 TST) se enquadram aqui.</li>
                </ul>
            </div>
            <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800">Legislação Previdenciária (Foco: Aposentadoria Especial)</h4>
                 <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-700">
                    <li><strong>Objetivo:</strong> Permitir que o trabalhador se aposente mais cedo.</li>
                    <li><strong>Norma Principal:</strong> Anexo IV do Decreto nº 3.048/99.</li>
                    <li><strong>Aplicação:</strong> A lista de agentes é restrita. Os agentes do teste não estão aqui.</li>
                </ul>
            </div>
        </div>
        <div className="mt-4">
            <h4 className="font-semibold text-slate-800">As Consequências do Erro:<Timestamp time="21:00" /></h4>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Para a Empresa:</strong> Multas e processos. Em um caso real, uma empresa foi condenada a pagar <strong className="text-red-600">R$ 74.000</strong> de indenização por <strong className="text-red-600">danos morais e materiais</strong> devido a um PPP preenchido incorretamente.<Timestamp time="21:33" /></li>
                <li><strong>Para o Trabalhador:</strong> Rejeição do PPP pelo INSS, atrasando ou impedindo sua aposentadoria.</li>
                <li><strong>Para o Profissional:</strong> Risco à carreira e responsabilização técnica. Com o eSocial, o cerco está se fechando.</li>
            </ul>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">1.4. Linha do Tempo da Aposentadoria Especial<Timestamp time="23:21" /></h3>
        <p>Entender a evolução das regras é crucial, pois para preencher um PPP de um período antigo, você deve aplicar as regras vigentes naquela época.</p>
        <ul className="list-decimal list-inside space-y-2 mt-2">
            <li><strong className="text-slate-800">1964 e 1979:</strong> Publicação das primeiras listas de agentes e atividades, que vigoraram até 1997.</li>
            <li><strong className="text-slate-800">Até 28/04/1995 (Enquadramento por Categoria Profissional):</strong> Bastava a profissão (ex: motorista, engenheiro) estar na lista para garantir o direito, sem necessidade de laudo (exceto para ruído).</li>
            <li><strong className="text-slate-800">1996 (Nascimento do LTCAT):</strong> O Laudo Técnico passou a ser exigido para comprovar a exposição a todos os agentes.</li>
            <li><strong className="text-slate-800">1997-1999 (Novas Listas):</strong> Publicação do Decreto 2.172/97 e, depois, do Decreto 3.048/99, com o Anexo IV que é a base até hoje.</li>
            <li><strong className="text-slate-800">2004 (Obrigatoriedade do PPP):</strong> O PPP tornou-se o formulário oficial.</li>
            <li><strong className="text-slate-800">2019 (Reforma da Previdência):</strong> Mudou as regras de cálculo e acesso para o trabalhador.</li>
            <li><strong className="text-slate-800">2023 (PPP Eletrônico):</strong> A grande virada. O PPP passou a ser emitido via eSocial.</li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">1.5. Documentos Essenciais: PPP e LTCAT na Prática<Timestamp time="28:59" /></h3>
        <p><strong className="text-yellow-700">PPP:</strong> É a "certidão de nascimento" da aposentadoria especial. Registra o histórico laboral e as exposições. A empresa é obrigada a entregar na rescisão.</p>
        <ul className="list-disc list-inside ml-4 mt-2">
            <li>Para períodos <strong className="text-red-600">antes de 01/01/2023</strong>, usa-se o PPP físico (papel).<Timestamp time="30:44" /></li>
            <li>Para períodos <strong className="text-green-600">a partir de 01/01/2023</strong>, o preenchimento é via eSocial (PPP Eletrônico).<Timestamp time="31:22" /></li>
        </ul>
        <p className="mt-2"><strong className="text-yellow-700">LTCAT:</strong> É o documento técnico oficial que fundamenta o PPP. <strong className="text-red-600">Não se deve usar PGR ou Laudo de Insalubridade para este fim.</strong><Timestamp time="31:51" /></p>
        <p className="mt-2"><strong className="text-cyan-600">Setor Público:</strong> As regras também se aplicam a servidores públicos, <strong className="text-cyan-700">mesmo sendo estatutários</strong>. Uma Súmula Vinculante do STF determina que, na ausência de legislação específica, aplicam-se as mesmas regras do INSS.<Timestamp time="35:40" /></p>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">1.6. Responsabilidades e a Gigante Oportunidade do eSocial<Timestamp time="36:21" /></h3>
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Quem Preenche o PPP?</strong> Qualquer profissional com conhecimento (SST, RH, DP).</li>
            <li><strong>Quem Assina o PPP?</strong> O responsável legal pela empresa ou seu preposto. Não o profissional de SST.</li>
            <li><strong>Quem Elabora o LTCAT?</strong> Apenas Engenheiro de Segurança do Trabalho ou Médico do Trabalho. Um técnico pode participar da elaboração, mas a assinatura e responsabilidade técnica final é de um dos profissionais habilitados.<Timestamp time="37:23" /></li>
        </ul>
        <div className="mt-4 bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800">A Gigante Demanda do eSocial<Timestamp time="39:24" /></h4>
            <p>Com cerca de 48 milhões de trabalhadores ativos no eSocial, todos precisam de PPPs. Isso criou uma demanda massiva por LTCATs, envios de eventos, auditorias e consultorias. A oferta de profissionais que realmente dominam o assunto ainda é muito pequena, criando uma oportunidade de ouro.</p>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">1.7. Resumo dos Erros Fatais e Pontos Críticos<Timestamp time="54:14" /></h3>
         <div className="space-y-3 mt-2">
            <div className="bg-red-100 border border-red-200 p-3 rounded-lg"><strong className="text-red-700">Erro 1:</strong> Confundir Insalubridade (NR-15) com Aposentadoria Especial (Anexo IV, Dec. 3.048/99). A metodologia de avaliação e os agentes podem ser diferentes.</div>
            <div className="bg-red-100 border border-red-200 p-3 rounded-lg"><strong className="text-red-700">Erro 2:</strong> LTCAT com conclusões equivocadas e preenchimento incorreto do código GFIP/eSocial, gerando passivo tributário ou pagamento de impostos indevidos.<Timestamp time="58:00" /></div>
            <div className="bg-yellow-100 border border-yellow-200 p-3 rounded-lg">
                <strong className="text-yellow-700">Detalhe do Erro 2: O Código GFIP "00"</strong><Timestamp time="1:04:05" />
                <p className="mt-1">Um erro muito comum no PPP físico é preencher o campo do código GFIP com "00" para ausência de exposição. Este código não existe. O correto para ausência de risco é deixar o campo <strong className="text-slate-800">em branco</strong> ou preencher com <strong className="text-slate-800">"01"</strong> (se o trabalhador já esteve exposto a algum risco no passado na mesma empresa).</p>
            </div>
            <div className="bg-red-100 border border-red-200 p-3 rounded-lg"><strong className="text-red-700">Erro 3:</strong> Não saber lidar com pontos críticos como eficácia do EPI para ruído, avaliação de agentes cancerígenos e os diferentes entendimentos entre INSS, Justiça e Receita Federal.<Timestamp time="1:06:25" /></div>
         </div>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">1.8. Desafios Complexos e o Caso de Sucesso (Economia de R$ 600.000)<Timestamp time="1:10:48" /></h3>
        <div className="bg-slate-100 border border-slate-200 p-4 rounded-lg my-3">
            <p>Além dos erros comuns, o especialista deve saber lidar com desafios como:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Como elaborar um <strong>LTCAT extemporâneo</strong> (um laudo atual para comprovar condições passadas).</li>
                <li>Como proceder para obter o <strong>PPP de empresas que não existem mais</strong> (um nicho de atuação com advogados).</li>
                <li>Como aplicar as <strong>regras corretas para cada período de trabalho</strong>, considerando as constantes mudanças na legislação.</li>
            </ul>
            <div className="mt-4 pt-3 border-t border-slate-300">
                <h4 className="font-bold text-green-700">Estudo de Caso Real: O Poder do Conhecimento<Timestamp time="1:14:07" /></h4>
                <p className="mt-2">O aluno Hugo Lins, ao dominar o assunto, fez a conexão entre o LTCAT e a folha de pagamento da sua empresa. Ele descobriu que a empresa pagava mais impostos do que o necessário.</p>
                <p className="mt-2 text-center text-2xl font-bold text-green-600">Economia de R$ 600.000,00 por ano!</p>
                <p className="mt-2"><strong>Resultado:</strong> Conseguiu 3 promoções e aumento de salário em menos de 3 anos, provando que dominar este tema gera valorização e reconhecimento concretos.</p>
            </div>
        </div>
    </div>
);

export default Aula01;
