
import React from 'react';

const Timestamp: React.FC<{ time: string }> = ({ time }) => {
    const timeToSeconds = (timeStr: string) => {
        const parts = timeStr.split(':').map(Number);
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
        return 0;
    };
    const url = `https://www.youtube.com/watch?v=fhifBNymfxM&t=${timeToSeconds(time)}s`;
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="timestamp text-xs text-slate-400 hover:text-blue-500 transition-colors ml-2 font-mono" title={`Ver na Aula 2 em ${time}`}>
            [{time}]
        </a>
    );
};

const Aula02: React.FC = () => (
    <div id="aula2" className="mt-8 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-cyan-700 mb-4">Parte 2: Aula 02 - O Método Especialista (RAS)</h2>
        
        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">2.1. Recapitulação da Aula 01 e a Promessa da Aula 02<Timestamp time="04:04" /></h3>
        <p>Na primeira aula, desmistificamos a confusão entre insalubridade e aposentadoria especial, o que pode ter "quebrado paradigmas" e gerado dúvidas. Isso é um bom sinal, pois significa que você está se diferenciando dos 80% de profissionais que ainda cometem esses erros. Agora, vamos estruturar o conhecimento em um método passo a passo para que você possa atuar com precisão e segurança.</p>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">2.2. O Método RAS: Os 3 Pilares do Especialista<Timestamp time="22:32" /></h3>
        <p>Para se tornar um especialista à prova de falhas, é preciso dominar três pilares fundamentais. Este é o <strong className="text-yellow-700">Método RAS</strong>:</p>
        <div className="grid md:grid-cols-3 gap-4 my-4">
            <div className="bg-blue-100 p-4 rounded-lg text-center border border-blue-200">
                <strong className="text-xl text-blue-700">R - Regras</strong>
                <p className="text-sm mt-1 text-slate-600">Dominar a legislação previdenciária, sua história e sua hierarquia. É a base de tudo.</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center border border-green-200">
                <strong className="text-xl text-green-700">A - Avaliação</strong>
                <p className="text-sm mt-1 text-slate-600">Ter precisão técnica total na avaliação dos agentes, utilizando as metodologias corretas.</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg text-center border border-purple-200">
                <strong className="text-xl text-purple-700">S - Segurança</strong>
                <p className="text-sm mt-1 text-slate-600">Garantir segurança jurídica e administrativa para o cliente, compreendendo as diferentes interpretações.</p>
            </div>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">2.3. Pilar R (Regras): Dominando a Legislação Previdenciária<Timestamp time="23:26" /></h3>
        <p>O domínio da legislação começa por conhecer as fontes corretas e sua hierarquia.</p>
        <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong>Fontes Normativas:</strong>
                <ul className="list-disc list-inside ml-6">
                    <li><strong>Decretos de 1964 e 1979:</strong> Essenciais para analisar períodos de trabalho antigos (válidos até 1997).</li>
                    <li><strong>Decreto 3.048/99:</strong> A "bíblia" da aposentadoria especial. Artigos 64 a 70 definem as regras, e o Anexo IV contém a lista oficial de agentes.<Timestamp time="25:17" /></li>
                    <li><strong>IN 128/2022:</strong> Detalha os procedimentos administrativos do INSS, refletindo como eles interpretam o decreto.<Timestamp time="28:25" /></li>
                </ul>
            </li>
            <li className="mt-2">
                <strong className="text-red-600">A Pirâmide de Kelsen (Hierarquia das Normas):</strong><Timestamp time="29:25" />
                <p>É essencial entender que a Constituição está no topo, seguida por Leis, Decretos e, por último, Instruções Normativas (IN).</p>
                <blockquote className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded-r-lg my-2 text-slate-800">
                    <p className="font-medium">Regra de Ouro: Uma norma de hierarquia inferior (IN) não pode contradizer uma superior (Decreto). Em caso de conflito, o decreto prevalece.</p>
                </blockquote>
            </li>
        </ul>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">2.4. Pilar A (Avaliação): Precisão Técnica Total<Timestamp time="34:23" /></h3>
        <blockquote className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg my-4">
            <p className="font-medium">A avaliação correta é o que dá sustentação ao seu LTCAT. Não se baseie em "achismos" ou em metodologias de outras áreas.</p>
        </blockquote>
        <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong className="text-slate-800">Ponto de Partida (Anexo IV do Decreto 3.048/99):</strong> Ele lista os agentes e define se a avaliação é qualitativa ou quantitativa. Para agentes químicos as atividades são exemplificativas, mas para físicos e biológicos, a atividade descrita deve ser considerada.</li>
            <li><strong className="text-slate-800">Metodologia:</strong> O Decreto 3.048/99 remete às <strong className="text-yellow-700">Normas de Higiene Ocupacional (NHO) da Fundacentro</strong>. Esta é a metodologia oficial para fins previdenciários.<Timestamp time="39:28" /></li>
            <li><strong className="text-slate-800">Limites de Tolerância:</strong> Na ausência de limites no decreto, utilizam-se os da <strong className="text-yellow-700">NR-15</strong>. Atenção: os limites podem vir da NR-15, mas a metodologia para o LTCAT deve seguir a Fundacentro.<Timestamp time="40:26" /></li>
            <li><strong className="text-slate-800">Agentes Cancerígenos (LINAC Grupo 1):</strong> Possuem avaliação diferenciada. A simples presença do agente no ambiente, com potencial de exposição, pode caracterizar o risco, sendo a eficácia do EPI um ponto de grande discussão.<Timestamp time="33:31" /></li>
        </ul>
        <blockquote className="border-l-4 border-cyan-500 bg-cyan-50 p-4 rounded-r-lg my-4 text-slate-800">
            <h4 className="font-bold text-cyan-700">Ferramentas Práticas do Especialista</h4>
            <p className="mt-1">Para facilitar a aplicação do Pilar A, um especialista utiliza ferramentas como <strong className="text-slate-800">modelos de LTCAT</strong> bem estruturados, que contêm todos os campos exigidos pela legislação e pelo eSocial <Timestamp time="48:21" />, e <strong className="text-slate-800">tabelas-resumo</strong> que cruzam os agentes do Anexo IV com seus limites, metodologias e classificação de carcinogenicidade, agilizando a análise técnica.<Timestamp time="42:26" /></p>
        </blockquote>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">2.5. Pilar S (Segurança): Entendimentos e Repercussões (INSS, Justiça, Receita)<Timestamp time="52:39" /></h3>
        <p>Um laudo tecnicamente perfeito pode não ser suficiente se você não entender como ele será interpretado por diferentes órgãos.</p>
        <div className="space-y-3 mt-2">
            <div className="bg-slate-100 border border-slate-200 p-3 rounded-lg">
                <p><strong className="text-blue-700">Entendimento do INSS:</strong> Segue estritamente a IN 128. Atualmente, com base na decisão do STF (ARE 664.335), entende que a <strong className="text-slate-800">mera declaração de eficácia do EPI não é suficiente</strong> para descaracterizar o tempo especial por ruído, facilitando a concessão do benefício.<Timestamp time="53:09" /></p>
            </div>
            <div className="bg-slate-100 border border-slate-200 p-3 rounded-lg">
                <p><strong className="text-purple-700">Entendimento do Judiciário:</strong> Pode ter interpretações mais amplas. A Súmula 198 do TFR, por exemplo, considera a lista do Anexo IV exemplificativa. Sobre o ruído, a jurisprudência está evoluindo, com tribunais começando a admitir a análise da eficácia do EPI no caso concreto.<Timestamp time="56:28" /></p>
            </div>
            <div className="bg-slate-100 border border-slate-200 p-3 rounded-lg">
                <p><strong className="text-red-700">Entendimento da Receita Federal:</strong> O foco é a tributação. Para ela, se há exposição a agente especial (como ruído acima do limite), a empresa <strong className="text-red-600">deve pagar</strong> a alíquota do FAI, independentemente do uso de EPI.<Timestamp time="1:00:04" /></p>
            </div>
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">2.6. Método RAS na Prática: Estudo de Caso do Ruído<Timestamp time="1:05:36" /></h3>
        <div className="bg-slate-100 border border-slate-200 p-4 rounded-lg my-3">
            <p className="font-semibold text-cyan-700">Situação: Trabalhador exposto a ruído de 87 dBA. A empresa fornece EPI e possui um robusto Programa de Conservação Auditiva (PCA). Não havia LTCAT da época, mas as condições de trabalho não mudaram.</p>
            <div className="mt-4 space-y-3">
                <div>
                    <strong className="text-blue-700">Aplicação do Pilar R (Regras):</strong>
                    <p className="pl-4">O ruído está no Anexo IV. O limite de tolerância é de 85 dBA (NEN), conforme o decreto.</p>
                </div>
                <div>
                    <strong className="text-green-700">Aplicação do Pilar A (Avaliação):</strong>
                    <p className="pl-4">A metodologia correta é a NHO-01 da Fundacentro, utilizando dosimetria. A medição de 87 dBA está acima do limite. Com base nas evidências de um PCA robusto, o profissional pode concluir tecnicamente que o EPI é eficaz.</p>
                </div>
                <div>
                    <strong className="text-purple-700">Aplicação do Pilar S (Segurança):</strong>
                    <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                        <li><strong>INSS:</strong> Provavelmente concederá o benefício. A nuance da decisão do STF (ARE 664.335) é que não basta a empresa <em className="text-slate-700">dizer</em> que o EPI é eficaz; ela precisaria <em className="text-slate-700">comprovar</em> a neutralização da exposição, o que é muito difícil na prática administrativa.<Timestamp time="54:56" /></li>
                        <li><strong>Receita Federal:</strong> Com certeza cobrará da empresa a alíquota de 6% (FAI), pois também considera o EPI ineficaz para fins tributários.</li>
                        <li><strong>Judiciário:</strong> A discussão sobre a eficácia do EPI ainda está em andamento, com decisões para ambos os lados, mas o tema está evoluindo.</li>
                    </ul>
                </div>
                <div className="pt-3 border-t border-slate-300">
                    <strong className="text-yellow-700">A Orientação do Especialista:</strong>
                    <blockquote className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded-r-lg my-2 text-slate-800">
                        <p className="font-medium">O especialista não apenas entrega o LTCAT. Ele explica ao cliente: "Tecnicamente, seu EPI é eficaz e isso está documentado. No entanto, o INSS provavelmente concederá o benefício, e a Receita Federal cobrará o tributo. A decisão de pagar ou não o FAI e se defender judicialmente é da empresa, mas estes são os riscos e cenários."</p>
                        <Timestamp time="1:13:32" />
                    </blockquote>
                </div>
            </div>
        </div>
        
        <h3 className="text-lg font-semibold text-slate-800 mt-4 flex items-center">2.7. Apresentação do Programa de Especialização<Timestamp time="1:16:34" /></h3>
        <p>Ao dominar o Método RAS, você se torna capaz de oferecer uma consultoria completa e de alto valor. Para aprofundar nesse conhecimento, foi apresentado o <strong className="text-blue-700">Programa de Especialização em Aposentadoria Especial, PPP e LTCAT</strong>. Trata-se de um acompanhamento de 3 meses, com aulas gravadas, encontros ao vivo, comunidade exclusiva e materiais de apoio, como modelos de laudos e planilhas, desenhado para transformar profissionais em verdadeiros especialistas na área.</p>
    </div>
);

export default Aula02;
