
import React, { useRef } from 'react';
import DownloadIcon from './icons/DownloadIcon';
import Aula01 from './Aula01';
import Aula02 from './Aula02';
import Aula03 from './Aula03';
import Glossary from './Glossary';

const StudyGuide: React.FC = () => {
    const contentRef = useRef<HTMLElement>(null);

    const handleDownload = () => {
        if (!contentRef.current) return;
        
        const contentHtml = contentRef.current.innerHTML;

        const styles = `
            <style>
                body { font-family: Calibri, sans-serif; font-size: 11pt; }
                h2 { color: #2E74B5; font-size: 16pt; page-break-before: always; }
                h3 { color: #365F91; font-size: 13pt; }
                strong { font-weight: bold; }
                blockquote { border-left: 3px solid #ccc; padding-left: 10px; margin-left: 5px; font-style: italic; background-color: #f5f5f5; }
                .timestamp { display: none; }
                footer { text-align: right; font-style: italic; color: #555; }
                code { font-family: Consolas, monospace; background-color: #e7e7e7; padding: 2px 4px; border-radius: 4px; }
                .summary-section { page-break-after: always; }
                .summary-section a { text-decoration: none; color: inherit; }
            </style>
        `;

        const fullHtml = `
            <!DOCTYPE html>
            <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
            <head>
                <meta charset='utf-8'>
                <title>Guia de Estudos - A2B Consultoria</title>
                ${styles}
            </head>
            <body>
                <h1 style="text-align:center; color: #1F4E79;">Guia de Estudos: Aposentadoria Especial</h1>
                <p style="text-align:center;"><strong>Propriedade da A2B Consultoria</strong></p>
                <br/>
                ${contentHtml}
            </body>
            </html>`;

        const blob = new Blob(['\ufeff', fullHtml], {
            type: 'application/msword'
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Guia_Estudos_Aposentadoria_Especial_A2B.doc';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-slate-200">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
                <h2 className="text-2xl font-bold text-slate-900">Guia de Estudos Completo</h2>
                <button onClick={handleDownload} className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center">
                    <DownloadIcon />
                    Download (.doc)
                </button>
            </div>
            
            <article ref={contentRef} className="prose max-w-none text-slate-700">
                <section className="mb-6">
                    <h3 className="text-xl font-semibold text-blue-700 border-l-4 border-blue-600 pl-3">Introdução</h3>
                    <p className="mt-2">Bem-vindo ao seu guia de estudos completo sobre Aposentadoria Especial, Perfil Profissiográfico Previdenciário (PPP) e Laudo Técnico das Condições Ambientais de Trabalho (LTCAT). Este material foi cuidadosamente compilado a partir de um curso intensivo de três aulas, ministrado por Eder Santos da SST Online, e tem como objetivo transformar você em um profissional mais seguro e preparado para atuar em uma das áreas mais importantes e complexas da Saúde e Segurança do Trabalho (SST).</p>
                    <p className="mt-2">Nos últimos anos, especialmente com a chegada do eSocial, o domínio sobre a legislação previdenciária deixou de ser um diferencial e tornou-se uma necessidade absoluta. A Receita Federal intensificou a fiscalização, e erros na elaboração do LTCAT, no preenchimento do PPP ou no envio de informações ao eSocial podem gerar multas severas para as empresas, prejuízos para os trabalhadores e responsabilidade profissional para quem elabora os documentos.</p>
                    <p className="mt-2">Este guia foi compilado a partir de um curso intensivo que serve como base para uma formação completa. Por isso, ele preserva não apenas os "o quês", mas os "porquês" e os "comos", incluindo histórias e exemplos práticos que são cruciais para o verdadeiro aprendizado.</p>
                    <p className="mt-2">Ao longo deste guia, você mergulhará nos fundamentos da aposentadoria especial, aprendendo a diferenciar conceitos trabalhistas de previdenciários — um dos erros mais comuns entre os profissionais da área. Abordaremos o histórico da legislação, as regras aplicáveis a cada época, as metodologias corretas para avaliação de agentes nocivos e os impactos práticos do eSocial.</p>
                    <blockquote className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-r-lg my-4 text-slate-800">
                        <p className="font-medium">Este não é um resumo, mas sim um manual detalhado. Cada ensinamento, cada exemplo e cada dica do instrutor foi preservado para garantir que você tenha um material de consulta robusto para seus desafios diários. Prepare-se para ganhar a segurança que faltava para orientar seus clientes, elaborar documentos à prova de falhas e se destacar em um mercado que busca, desesperadamente, por verdadeiros especialistas.</p>
                    </blockquote>
                </section>

                <section className="mb-8 p-4 bg-slate-100 rounded-lg border border-slate-200 summary-section">
                    <h3 className="text-xl font-semibold text-blue-700 border-l-4 border-blue-600 pl-3 mb-4">Sumário (Índice)</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-slate-800"><a href="#aula1">Parte 1: Aula 01 - Os Erros Fatais e as Consequências</a></h4>
                            <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-slate-600">
                                <li>1.1. Boas-vindas e a Importância Estratégica do Tema</li>
                                <li>1.2. Teste de Conhecimento Inicial: A Grande Confusão</li>
                                <li>1.3. O Erro Mais Comum e Suas Graves Consequências</li>
                                <li>1.4. Linha do Tempo da Aposentadoria Especial</li>
                                <li>1.5. Documentos Essenciais: PPP e LTCAT na Prática</li>
                                <li>1.6. Responsabilidades e a Gigante Oportunidade do eSocial</li>
                                <li>1.7. Resumo dos Erros Fatais e Pontos Críticos</li>
                                <li>1.8. Desafios Complexos e o Caso de Sucesso (Economia de R$ 600.000)</li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-slate-300">
                             <h4 className="font-bold text-slate-800"><a href="#aula2">Parte 2: Aula 02 - O Método Especialista (RAS)</a></h4>
                            <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-slate-600">
                                <li>2.1. Recapitulação da Aula 01 e a Promessa da Aula 02</li>
                                <li>2.2. O Método RAS: Os 3 Pilares do Especialista</li>
                                <li>2.3. Pilar R (Regras): Dominando a Legislação Previdenciária</li>
                                <li>2.4. Pilar A (Avaliação): Precisão Técnica Total</li>
                                <li>2.5. Pilar S (Segurança): Entendimentos e Repercussões (INSS, Justiça, Receita)</li>
                                <li>2.6. Método RAS na Prática: Estudo de Caso do Ruído</li>
                                <li>2.7. Apresentação do Programa de Especialização</li>
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-slate-300">
                             <h4 className="font-bold text-slate-800"><a href="#aula3">Parte 3: Aula 03 - O Ponto de Virada: eSocial e o Futuro</a></h4>
                            <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-slate-600">
                                <li>3.1. Novidades no Horizonte: O PLC 245/2019 (Aposentadoria por Periculosidade)</li>
                                <li>3.2. SST no eSocial: A Chave Virou em 2023</li>
                                <li>3.3. O Evento S-2240: O Coração do PPP Eletrônico</li>
                                <li>3.4. Os Cruzamentos de Dados e a Fiscalização da Receita Federal</li>
                                <li>3.5. A Tabela 2 do eSocial: A Tributação na Prática</li>
                                <li>3.6. O Caminho do Especialista: Realização e Oportunidades</li>
                            </ul>
                        </div>
                         <div className="pt-4 border-t border-slate-300">
                             <h4 className="font-bold text-slate-800"><a href="#glossario">Glossário</a></h4>
                        </div>
                    </div>
                </section>

                <Aula01 />
                <Aula02 />
                <Aula03 />
                <Glossary />

            </article>
            <footer className="text-center text-sm text-slate-500 mt-8 pt-4 border-t border-slate-200">
                <p>&copy; 2024-2025 A2B Consultoria. Todos os direitos reservados.</p>
                <p>Este é um material de estudo e não substitui a consulta à legislação vigente.</p>
            </footer>
        </div>
    );
};

export default StudyGuide;
