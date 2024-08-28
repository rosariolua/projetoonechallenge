document.getElementById('encode-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const encodedText = encodeText(inputText);
    document.getElementById('result-output').innerText = encodedText;
});

document.getElementById('decode-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const decodedText = decodeText(inputText);
    document.getElementById('result-output').innerText = decodedText;
});

// Mapeamento de palavras para o tema medieval
const encodeMap = {
    'deploy': 'lançar dragão',
    'bug': 'goblin',
    'code': 'feitiço',
    'algorithm': 'encantamento',
    'server': 'fortaleza',
    'client': 'cavaleiro',
    'database': 'grimoire',
    'password': 'runa mágica',
    'variable': 'artefato',
    'function': 'encantamento',
    'loop': 'ciclo de feitiço',
    'array': 'caixa mágica',
    'object': 'artefato encantado',
    'class': 'guilda',
    'method': 'ritual',
    'interface': 'portal',
    'framework': 'estrutura mágica',
    'API': 'pergaminho mágico',
    'endpoint': 'destino encantado',
    'repository': 'caverna mágica',
    'commit': 'juramento',
    'branch': 'linhagem',
    'merge': 'união mágica',
    'error': 'maldição',
    'warning': 'sinal de perigo',
    'exception': 'feitiço inesperado',
    'debugger': 'oráculo',
    'IDE': 'torre de magias',
    'script': 'encantamento escrito',
    'build': 'construção mágica',
    'compile': 'preparar feitiço',
    'deployment': 'invocação',
    'release': 'lançamento',
    'version': 'edição',
    'patch': 'remendo mágico',
    'update': 'aprimoramento',
    'rollback': 'retrocesso mágico',
    'configuration': 'arranjo mágico',
    'integration': 'fusao mágica',
    'testing': 'prova de feitiço',
    'user': 'aventureiro',
    'access': 'entrada mágica',
    'authentication': 'verificação mágica',
    'authorization': 'permissão mágica',
    'request': 'demanda',
    'response': 'resposta encantada',
    'session': 'jornada',
    'cookie': 'doce mágico',
    'token': 'talismã',
    'URL': 'rota encantada',
    'redirect': 'desvio mágico',
    'load': 'carregar',
    'save': 'guardar',
    'error handling': 'tratamento de maldição',
    'performance': 'eficiência mágica',
    'optimization': 'aprimoramento',
    'scalability': 'expansão mágica'
};

const decodeMap = {
    'lançar dragão': 'deploy',
    'goblin': 'bug',
    'feitiço': 'code',
    'encantamento': 'algorithm',
    'fortaleza': 'server',
    'cavaleiro': 'client',
    'grimoire': 'database',
    'runa mágica': 'password',
    'artefato': 'variable',
    'ciclo de feitiço': 'loop',
    'caixa mágica': 'array',
    'artefato encantado': 'object',
    'guilda': 'class',
    'ritual': 'method',
    'portal': 'interface',
    'estrutura mágica': 'framework',
    'pergaminho mágico': 'API',
    'destino encantado': 'endpoint',
    'caverna mágica': 'repository',
    'juramento': 'commit',
    'linhagem': 'branch',
    'união mágica': 'merge',
    'maldição': 'error',
    'sinal de perigo': 'warning',
    'feitiço inesperado': 'exception',
    'oráculo': 'debugger',
    'torre de magias': 'IDE',
    'encantamento escrito': 'script',
    'construção mágica': 'build',
    'preparar feitiço': 'compile',
    'invocação': 'deployment',
    'lançamento': 'release',
    'edição': 'version',
    'remendo mágico': 'patch',
    'aprimoramento': 'update',
    'retrocesso mágico': 'rollback',
    'arranjo mágico': 'configuration',
    'fusao mágica': 'integration',
    'prova de feitiço': 'testing',
    'aventureiro': 'user',
    'entrada mágica': 'access',
    'verificação mágica': 'authentication',
    'permissão mágica': 'authorization',
    'demanda': 'request',
    'resposta encantada': 'response',
    'jornada': 'session',
    'doce mágico': 'cookie',
    'talismã': 'token',
    'rota encantada': 'URL',
    'desvio mágico': 'redirect',
    'carregar': 'load',
    'guardar': 'save',
    'tratamento de maldição': 'error handling',
    'eficiência mágica': 'performance',
    'aprimoramento': 'optimization',
    'expansão mágica': 'scalability'
};

// Função para codificar o texto
function encodeText(text) {
    let encodedText = text;
    for (const [key, value] of Object.entries(encodeMap)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        encodedText = encodedText.replace(regex, value);
    }
    return encodedText;
}

// Função para decodificar o texto
function decodeText(text) {
    let decodedText = text;
    for (const [key, value] of Object.entries(decodeMap)) {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        decodedText = decodedText.replace(regex, value);
    }
    return decodedText;
}

// Adicionando eventos aos botões
document.getElementById('encode-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const encodedText = encodeText(inputText);
    document.getElementById('result-output').innerText = encodedText;
});

document.getElementById('decode-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const decodedText = decodeText(inputText);
    document.getElementById('result-output').innerText = decodedText;
});
