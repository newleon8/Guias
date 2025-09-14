
import React from 'react';

const Timestamp: React.FC<{ time: string }> = ({ time }) => {
    const timeToSeconds = (timeStr: string) => {
        const parts = timeStr.split(':').map(Number);
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
        return 0;
    };
    const url = `https://www.youtube.com/watch?v=uMSmEC0Cv6o&t=${timeToSeconds(time)}s`;
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="timestamp text-xs text-slate-400 hover:text-blue-500 transition-colors ml-2 font-mono" title={`Ver na Aula 3 em ${time}`}>
            [{time}]
        </a>
    );
};

const Aula03: React.FC = () => (
    <div id="aula3" className="mt-8 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-cyan-700 mb-4">Parte 3: Aula 03 - O Ponto de Virada: eSocial e o Futuro</h2>
        
        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">3.1. Novidades no Horizonte: O PLC 245/2019 (Aposentadoria por Periculosidade)<Timestamp time="17:01" /></h3>
        <p>Uma das mudanças mais significativas no horizonte é o Projeto de Lei Complementar (PLC) 245/2019, que visa regulamentar a aposentadoria especial por periculosidade.</p>
        <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
            <li><strong>A Origem:</strong> Durante a Reforma da Previdência (2019), o texto que saiu da Câmara dos Deputados <strong className="text-red-600">excluía explicitamente</strong> o enquadramento por periculosidade. Ao chegar no Senado, os senadores <strong className="text-green-600">retiraram essa exclusão</strong> do texto. Essa manobra criou uma lacuna e a necessidade urgente de uma lei específica para regulamentar o tema, que hoje depende muito de decisões judiciais.<Timestamp time="19:27" /></li>
            <li><strong>O que o PLC propõe?</strong>
                <ul className="list-disc list-inside ml-6">
                     <li>Reconhecer formalmente o direito à aposentadoria especial com 25 anos de contribuição para atividades perigosas.</li>
                     <li>Criar uma lista específica de atividades perigosas para fins previdenciários, que pode ser diferente da lista da NR-16.<Timestamp time="23:12" /></li>
                </ul>
            </li>
             <li><strong>Atividades Contempladas (preliminarmente):</strong><Timestamp time="25:02" />
                <ul className="list-disc list-inside ml-6">
                    <li>Vigilância armada, segurança patrimonial e transporte de valores.</li>
                    <li>Atividades com exposição à eletricidade.</li>
                    <li>Atividades com explosivos e inflamáveis.</li>
                    <li>Atividades de metalurgia.</li>
                </ul>
            </li>
            <li><strong className="text-red-600">Impactos Futuros:</strong> Quando aprovado, este projeto exigirá a atualização de LTCATs e PPPs. Novas avaliações serão necessárias, novos códigos serão criados no eSocial e, crucialmente, muitas empresas passarão a ter a obrigação de recolher a alíquota do FAI (6%), gerando uma nova onda de demanda por especialistas.<Timestamp time="29:47" /></li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">3.2. SST no eSocial: A Chave Virou em 2023<Timestamp time="39:21" /></h3>
        <p>O eSocial não é apenas uma nova forma de enviar informações; ele representa uma mudança de paradigma para os profissionais de SST.</p>
         <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
            <li><strong>Breve Histórico (A Simplificação):</strong> Em 2019, o eSocial quase foi cancelado pelo novo governo. Após entenderem seu potencial, decidiram por uma simplificação. A versão original de SST incluía eventos trabalhistas (laudos, treinamentos). A versão simplificada removeu essa parte e focou <strong className="text-yellow-700">quase exclusivamente na parte previdenciária</strong>: a modernização da CAT e do PPP.<Timestamp time="41:01" /></li>
            <li><strong>O Nascimento do PPP Eletrônico:</strong> A partir de <strong className="text-green-600">1º de janeiro de 2023</strong>, o PPP para novos períodos de trabalho passou a ser exclusivamente eletrônico. A obrigação de "preencher o PPP" é cumprida ao enviar as informações corretas ao eSocial.<Timestamp time="45:48" /></li>
            <li><strong>A Mudança de Paradigma:</strong> O eSocial forçou os profissionais de SST, tradicionalmente focados na legislação trabalhista (NRs), a mergulhar na legislação previdenciária. Quem não domina os decretos e a parte tributária está ficando para trás.<Timestamp time="46:59" /></li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">3.3. O Evento S-2240: O Coração do PPP Eletrônico<Timestamp time="51:31" /></h3>
        <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg my-4">
            <h4 className="font-bold text-blue-700">O que o S-2240 informa?</h4>
            <p className="mt-1">Descrição do ambiente e atividades, agentes nocivos, intensidade/concentração, técnica de medição, informações sobre EPI/EPC e dados do responsável técnico (quem elaborou o LTCAT).</p>
        </blockquote>
        <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong className="text-slate-800">A Tabela 24:</strong> É a tabela oficial do eSocial que lista os códigos dos agentes nocivos, espelhada no Anexo IV do Decreto 3.048/99. Se um agente não está na Tabela 24, ele não deve ser informado. Para ausência de risco, utiliza-se o código <code className="text-yellow-700 bg-slate-200 px-1 rounded">09.01.001</code>.<Timestamp time="59:52" /></li>
            <li><strong className="text-slate-800">Emissão do PPP:</strong> A empresa envia o S-2240. Com base nisso, o próprio INSS consolida os dados e disponibiliza o PPP eletrônico para o trabalhador no aplicativo "Meu INSS". A empresa não "emite" mais o documento; ela fornece os dados.<Timestamp time="53:11" /></li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">3.4. Os Cruzamentos de Dados e a Fiscalização da Receita Federal<Timestamp time="1:01:29" /></h3>
        <p>A verdadeira força do eSocial está na sua capacidade de cruzar informações em tempo real para uma fiscalização automática e eficaz.</p>
        <div className="bg-red-100 border border-red-200 p-4 rounded-lg my-3">
            <p className="font-semibold text-red-700">S-2240 vs. Folha de Pagamento (S-1200): A Inconsistência Fatal<Timestamp time="1:02:00" /></p>
            <p className="mt-2"><strong className="text-slate-800">Exemplo:</strong> O S-2240 informa exposição a ruído acima de 85 dBA (ensejador). O evento S-1200 (folha) informa código "1" (não ensejador). Para a Receita Federal, isso é uma <strong className="text-red-600">confissão de sonegação de tributo</strong>. O sistema armazena a prova, e a cobrança pode vir retroativa dos últimos 5 anos, com juros e multa.</p>
        </div>
        <div className="bg-slate-100 border border-slate-200 p-4 rounded-lg my-3">
            <h4 className="font-semibold text-cyan-700">Estudo de Caso Prático: O Terceirizado no Hospital<Timestamp time="1:05:15" /></h4>
            <p className="mt-2"><strong className="text-slate-800">Cenário:</strong> Um funcionário de uma empresa de limpeza (Prestadora) trabalha dentro de um hospital (Tomador), em área com contato com pacientes com doenças infectocontagiosas (atividade especial).</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>A <strong className="text-blue-600">Prestadora</strong> envia o S-2240, informando o risco biológico e o CNPJ do <strong className="text-green-600">Hospital</strong> como "estabelecimento de terceiro".</li>
                <li>A Receita Federal cruza essa informação com a <strong className="text-purple-600">EFD-Reinf</strong> do <strong className="text-green-600">Hospital</strong>.</li>
                <li><strong className="text-red-600">Inconsistência:</strong> Se o Hospital (Tomador) não reteve na nota fiscal da Prestadora o valor do FAI (neste caso, 2%), o sistema da Receita acende um alerta de sonegação. A responsabilidade da retenção é do Tomador do serviço.</li>
            </ul>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">3.5. A Tabela 2 do eSocial: A Tributação na Prática<Timestamp time="1:13:44" /></h3>
        <p>No evento de folha de pagamento (S-1200), a empresa classifica cada trabalhador usando um dos códigos da Tabela 2, que determina a tributação do FAI. É o cruzamento desses códigos com as informações do S-2240 que está no centro da fiscalização.</p>
        <div className="grid md:grid-cols-2 gap-4 my-4">
            <div className="bg-slate-100 p-3 rounded-lg border border-slate-200"><strong>Código 1:</strong> Não ensejador (0% FAI).</div>
            <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-200"><strong className="text-yellow-700">Código 4:</strong> Aposentadoria de 25 anos (6% FAI).</div>
            <div className="bg-orange-100 p-3 rounded-lg border border-orange-200"><strong className="text-orange-700">Código 3:</strong> Aposentadoria de 20 anos (9% FAI).</div>
            <div className="bg-red-100 p-3 rounded-lg border border-red-200"><strong className="text-red-700">Código 2:</strong> Aposentadoria de 15 anos (12% FAI).</div>
        </div>
         <p>Um profissional especialista é aquele que garante a coerência entre a avaliação técnica do LTCAT, o envio do S-2240 e o enquadramento tributário na folha de pagamento.</p>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">3.6. O Caminho do Especialista: Realização e Oportunidades<Timestamp time="1:20:27" /></h3>
        <blockquote className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg my-4">
            <h4 className="font-bold text-green-700">O Momento é Agora</h4>
            <p className="mt-1">As empresas precisam desesperadamente de especialistas que entendam do assunto. A demanda explodiu com o eSocial, a Receita Federal está fiscalizando, e poucos profissionais estão qualificados. Dominar este conhecimento não é apenas sobre evitar multas, mas sobre gerar valor, reduzir custos, ganhar reconhecimento e, acima de tudo, ter a satisfação profissional de ser uma referência na área.</p>
            <p className="mt-2 font-medium">"Tem a satisfação profissional. Tu acorda de manhã seguro do que tu tá fazendo... tu dorme tranquilo... As pessoas te perguntam, te veem como referência no assunto. Isso é muito, muito legal. Isso não tem preço." <span className="text-sm text-slate-500">- Eder Santos</span></p>
        </blockquote>
    </div>
);

export default Aula03;
