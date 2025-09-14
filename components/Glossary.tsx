
import React from 'react';

const Glossary: React.FC = () => (
    <div id="glossario" className="mt-8 pt-6 border-t border-slate-200">
        <h2 className="text-2xl font-bold text-cyan-700 mb-4">Glossário</h2>
        <dl className="space-y-4">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">DP</dt>
                <dd className="text-slate-600 ml-4">Departamento Pessoal.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">eSocial</dt>
                <dd className="text-slate-600 ml-4">Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas. Plataforma do Governo Federal que unifica o envio de informações pelo empregador.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">FAI (ou GILRAT Adicional)</dt>
                <dd className="text-slate-600 ml-4">Financiamento da Aposentadoria Especial. É uma alíquota adicional (6%, 9% ou 12%) paga pela empresa sobre a remuneração do trabalhador exposto a agentes nocivos para custear sua aposentadoria antecipada.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">GFIP</dt>
                <dd className="text-slate-600 ml-4">Guia de Recolhimento do FGTS e de Informações à Previdência Social. Documento antigo que continha códigos sobre a exposição do trabalhador, precursores da Tabela 2 do eSocial.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">IN</dt>
                <dd className="text-slate-600 ml-4">Instrução Normativa. Norma emitida por um órgão (como o INSS) para detalhar procedimentos de aplicação de uma lei ou decreto.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">INSS</dt>
                <dd className="text-slate-600 ml-4">Instituto Nacional do Seguro Social. Autarquia do Governo Federal responsável pelo pagamento das aposentadorias e demais benefícios dos trabalhadores.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">LINAC</dt>
                <dd className="text-slate-600 ml-4">Lista Nacional de Agentes Cancerígenos para Humanos.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">LTCAT</dt>
                <dd className="text-slate-600 ml-4">Laudo Técnico das Condições Ambientais de Trabalho. Documento obrigatório, elaborado por Engenheiro de Segurança do Trabalho ou Médico do Trabalho, que serve de base para o preenchimento do PPP.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">NHO</dt>
                <dd className="text-slate-600 ml-4">Norma de Higiene Ocupacional. Padrões técnicos emitidos pela Fundacentro que estabelecem as metodologias para avaliação de agentes ambientais.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">NR</dt>
                <dd className="text-slate-600 ml-4">Norma Regulamentadora. Conjunto de disposições e procedimentos técnicos relacionados à segurança e medicina do trabalho, de observância obrigatória pelas empresas. A NR-15 trata das atividades e operações insalubres.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">PGR</dt>
                <dd className="text-slate-600 ml-4">Programa de Gerenciamento de Riscos.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">PLC</dt>
                <dd className="text-slate-600 ml-4">Projeto de Lei Complementar.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">PPP</dt>
                <dd className="text-slate-600 ml-4">Perfil Profissiográfico Previdenciário. Documento histórico-laboral do trabalhador que detalha suas atividades e exposições a agentes nocivos, utilizado para requerer a aposentadoria especial.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">RH</dt>
                <dd className="text-slate-600 ml-4">Recursos Humanos.</dd>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">SST</dt>
                <dd className="text-slate-600 ml-4">Saúde e Segurança no Trabalho.</dd>
            </div>
             <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <dt className="font-bold text-slate-800">STF</dt>
                <dd className="text-slate-600 ml-4">Supremo Tribunal Federal.</dd>
            </div>
        </dl>
    </div>
);

export default Glossary;
