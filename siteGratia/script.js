// ==========================================================================
// PORTAL GRATIA PLENA - NÚCLEO DE DADOS E COMPORTAMENTO (JAVASCRIPT)
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    inicializarNavegacao();
    inicializarTema();
    inicializarAudio();
    carregarLiturgia();
    inicializarBiblia();
    inicializarEucaristia();
    inicializarMaria();
    inicializarSantos();
    inicializarPadres();
    inicializarDoutrina();
    inicializarHistoria();
    inicializarOracoes();
    inicializarBiblioteca();
    inicializarBlog();
    inicializarPesquisa();
});

// ==========================================================================
// 1. DADOS DE CONTEÚDO (FIEL AO MAGISTÉRIO)
// ==========================================================================

const DATA_EUCARISTIA = {
    titulo: "O Mistério da Santíssima Eucaristia",
    introducao: "A Eucaristia é a fonte e o ápice de toda a vida cristã. Nela, o próprio Cristo, nosso Deus e Salvador, está verdadeira, real e substancialmente presente com Seu Corpo, Sangue, Alma e Divindade sob as espécies de pão e vinho.",
    artigos: [
        {
            titulo: "A Presença Real de Cristo",
            texto: "A doutrina da transubstanciação declara que, pela consagração do pão e do vinho na Santa Missa, opera-se a mudança de toda a substância do pão na substância do Corpo de Cristo e de toda a substância do vinho na substância do Seu Sangue. Esta mudança é operada pelo poder do Espírito Santo através das palavras pronunciadas pelo sacerdote in persona Christi.",
            referencia: "Catecismo da Igreja Católica, §1373-1381"
        },
        {
            titulo: "Fundamentos Bíblicos",
            texto: "O mistério eucarístico foi instituído por Nosso Senhor na Última Ceia (Mt 26, 26-28; Mc 14, 22-24; Lc 22, 19-20; 1Cor 11, 23-25). Ele mesmo antecipou esse ensinamento no famoso 'Discurso do Pão da Vida' em João 6, onde insiste: 'Quem come a minha carne e bebe o meu sangue tem a vida eterna'.",
            referencia: "Sagrada Escritura"
        },
        {
            titulo: "O Milagre Eucarístico de Lanciano",
            texto: "No século VIII, na cidade de Lanciano (Itália), um monge basiliano duvidou da presença real durante a consagração. Imediatamente, a hóstia transformou-se em carne humana e o vinho em sangue visível. Estudos científicos modernos realizados na década de 1970 pelo Dr. Odoardo Linoli confirmaram que se trata de tecido muscular cardíaco humano real (miocárdio) do tipo sanguíneo AB, preservado naturalmente sem conservantes.",
            referencia: "Estudo Científico da Universidade de Siena"
        },
        {
            titulo: "Respostas a Objeções Comuns",
            texto: "Objeção: 'A Eucaristia é apenas um símbolo'. Resposta: O próprio Jesus usou linguagem literal em João 6, permitindo que muitos discípulos o abandonassem por acharem suas palavras duras demais. Se fosse apenas uma metáfora, Ele os teria trazido de volta explicando o sentido figurado. Além disso, São Paulo escreve em 1 Coríntios 11, 27 que quem come o pão indignamente torna-se culpado do Corpo e do Sangue do Senhor.",
            referencia: "Apologética Católica"
        }
    ]
};

const DATA_MARIA = {
    titulo: "A Santíssima Virgem Maria",
    introducao: "Nossa Senhora, a Mãe de Deus (Theotokos), ocupa o lugar mais elevado depois de Cristo e o mais próximo de nós. Ela é a Medianeira de todas as graças e nossa Mãe espiritual.",
    dogmas: [
        { nome: "Maternidade Divina", descricao: "Declarado no Concílio de Éfeso (431 d.C.), afirma que Maria é verdadeiramente a Mãe de Deus (Theotokos) porque gerou na carne a Segunda Pessoa da Santíssima Trindade." },
        { nome: "Virgindade Perpétua", descricao: "Maria permaneceu Virgem antes, durante e depois do parto de Nosso Senhor Jesus Cristo." },
        { nome: "Imaculada Conceição", descricao: "Proclamado pelo Papa Pio IX em 1854, ensina que Maria, por uma graça singular de Deus, foi preservada do pecado original desde o primeiro instante de sua concepção." },
        { nome: "Assunção aos Céus", descricao: "Proclamado pelo Papa Pio XII em 1950, ensina que a Imaculada Mãe de Deus, terminado o curso de sua vida terrena, foi assunta em corpo e alma à glória celeste." }
    ],
    devocoes: [
        { titulo: "O Santo Rosário", texto: "O Rosário é uma contemplação dos mistérios da vida de Cristo guiada pela repetição do Pai-Nosso e da Ave-Maria. É a arma espiritual recomendada por inúmeros santos e papas." },
        { titulo: "A Consagração Total", texto: "A Consagração à Santíssima Virgem, segundo o método de São Luís Maria Grignion de Montfort, consiste em entregar-se inteiramente a Jesus por meio de Maria para viver a santidade baptismal." }
    ]
};

const DATA_SANTOS = [
    {
        nome: "São Tomás de Aquino",
        categoria: "Doutores",
        festa: "28 de Janeiro",
        biografia: "Conhecido como o Doutor Angélico, foi um frade dominicano do século XIII que sintetizou a filosofia aristotélica com a teologia revelada. Sua obra principal, a Summa Theologiae, é um dos maiores monumentos teológicos da Igreja.",
        citacao: "“Para aquele que tem fé, nenhuma explicação é necessária. Para aquele que não tem fé, nenhuma explicação é possível.”"
    },
    {
        nome: "Santo Agostinho",
        categoria: "Doutores",
        festa: "28 de Agosto",
        biografia: "Bispo de Hipona no século IV, foi um dos maiores teólogos do cristianismo primitivo. Depois de uma juventude inquieta, converteu-se e escreveu clássicos eternos como Confissões e A Cidade de Deus.",
        citacao: "“Fizeste-nos para ti, Senhor, e o nosso coração está inquieto enquanto não descansar em ti.”"
    },
    {
        nome: "São Francisco de Assis",
        categoria: "Religiosos",
        festa: "4 de Outubro",
        biografia: "Abandonou as riquezas para viver na pobreza evangélica radical, fundando a Ordem dos Frades Menores. Recebeu os estigmas da Paixão e pregou o amor à criação e a paz profunda.",
        citacao: "“Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.”"
    },
    {
        nome: "Santa Teresinha do Menino Jesus",
        categoria: "Religiosos",
        festa: "1 de Outubro",
        biografia: "Carmelita descalça francesa que viveu no final do século XIX. Proclamada Doutora da Igreja por sua 'Pequena Via' de santidade baseada no amor simples e na total confiança em Deus.",
        citacao: "“Minha vocação é o Amor!”"
    },
    {
        nome: "Santo Estêvão",
        categoria: "Mártires",
        festa: "26 de Dezembro",
        biografia: "O primeiro mártir cristão (protomártir). Foi um dos sete primeiros diáconos da Igreja de Jerusalém e foi apedrejado até a morte enquanto orava por seus perseguidores.",
        citacao: "“Senhor Jesus, recebe o meu espírito. Não lhes imputes este pecado.” (Atos 7, 59-60)"
    }
];

const DATA_PADRES = [
    {
        nome: "Santo Inácio de Antioquia",
        periodo: "Século I-II",
        biografia: "Discípulo do Apóstolo São João e terceiro bispo de Antioquia. Escreveu sete cartas fundamentais a caminho de seu martírio em Roma, onde foi devorado por leões.",
        ensinamento: "Foi o primeiro escritor a usar o termo 'Igreja Católica' (ano 110 d.C.) e insistiu fortemente na obediência filial aos bispos e na presença real de Jesus na Eucaristia."
    },
    {
        nome: "São Policarpo de Esmirna",
        periodo: "Século II",
        biografia: "Discípulo direto de São João Evangelista. Foi queimado vivo aos 86 anos de idade por se recusar a blasfemar contra Cristo.",
        ensinamento: "Guardou fielmente a tradição apostólica contra os primeiros hereges gnósticos e defendeu a unidade da fé primitiva."
    },
    {
        nome: "Santo Irineu de Lyon",
        periodo: "Século II",
        biografia: "Discípulo de Policarpo e bispo de Lyon. Escreveu a célebre obra 'Contra as Heresias' para desmascarar o gnosticismo.",
        ensinamento: "Estabeleceu as bases da tradição apostólica e a primazia da Igreja de Roma sobre todas as outras igrejas."
    }
];

const DATA_DOUTRINA = {
    titulo: "Doutrina e Fé Católica",
    introducao: "A doutrina da Igreja baseia-se na Revelação Divina, transmitida pela Sagrada Escritura (Bíblia) e pela Sagrada Tradição Apostólica, guardada e interpretada fielmente pelo Magistério da Igreja.",
    itens: [
        {
            titulo: "Os Sete Sacramentos",
            conteudo: "Sinais eficazes da graça, instituídos por Cristo e confiados à Igreja, pelos quais nos é dispensada a vida divina. Dividem-se em: Iniciação Cristã (Batismo, Confirmação, Eucaristia), Cura (Penitência/Confissão, Unção dos Enfermos) e Serviço da Comunhão (Ordem, Matrimônio)."
        },
        {
            titulo: "A Moral Católica",
            conteudo: "A vida moral cristã consiste em seguir a Cristo, vivendo segundo a retidão e orientando todos os nossos atos para o sumo bem que é Deus. É fundamentada nos Dez Mandamentos, nos Mandamentos da Igreja e nas bem-aventuranças."
        },
        {
            titulo: "As Virtudes Teologais e Cardeais",
            conteudo: "As virtudes teologais fundamentam, animam e caracterizam o agir moral do cristão: Fé, Esperança e Caridade. As virtudes cardeais são hábitos que dispõem a fazer o bem: Prudência, Justiça, Fortaleza e Temperança."
        },
        {
            titulo: "O Ano Litúrgico",
            conteudo: "O ciclo do ano em que a Igreja celebra o mistério pascal de Cristo. Compreende o Advento, o Tempo do Natal, a Quaresma, o Tríduo Pascal, o Tempo Pascal e o Tempo Comum, permitindo ao fiel viver os mistérios da salvação."
        }
    ]
};

const DATA_HISTORIA = [
    { epoca: "Século I", titulo: "A Igreja Primitiva", texto: "Nascimento da Igreja no Pentecostes. Os Apóstolos iniciam a evangelização do Império Romano e do mundo conhecido. Início do martírio dos cristãos sob Nero." },
    { epoca: "Ano 313", titulo: "Édito de Milão", texto: "O imperador Constantino concede liberdade religiosa aos cristãos com o Édito de Milão, encerrando três séculos de perseguições imperiais sangrentas." },
    { epoca: "Ano 325", titulo: "Concílio de Niceia I", texto: "Primeiro Concílio Ecumênico da Igreja. Condenou a heresia do Arianismo e formulou o Símbolo da Fé (o Credo Niceno), proclamando a divindade de Nosso Senhor Jesus Cristo." },
    { epoca: "Séculos XI-XV", titulo: "A Idade Média", texto: "Período de florescimento da filosofia escolástica (São Tomás, São Boaventura), fundação das primeiras Universidades católicas e construção das grandiosas catedrais góticas europeias." },
    { epoca: "Século XVI", titulo: "Concílio de Trento", texto: "Grande resposta católica à Reforma Protestante. Reafirmou dogmas sacramentais, regulamentou a formação clerical e consolidou a liturgia tridentina." }
];

const DATA_ORACOES = [
    { categoria: "Manhã", titulo: "Oferecimento do Dia", texto: "Senhor meu Deus, eu vos ofereço todas as minhas orações, trabalhos, alegrias e sofrimentos deste dia, em união com o Santo Sacrifício da Missa em todo o mundo. Ofereço-os pelo Coração de Jesus, por Maria Santíssima, pelo Papa e por todas as santas intenções de hoje. Amém." },
    { categoria: "Noite", titulo: "Exame de Consciência e Ato de Contrição", texto: "Meu Deus, eu me arrependo de todo o coração de todos os meus pecados e detesto-os, porque pequei contra Vós, meu Pai e meu Criador, que sois infinitamente bom e digno de ser amado sobre todas as coisas. Prometo firmemente, com a vossa graça, não mais pecar e fugir das ocasiões de pecado. Amém." },
    { categoria: "Eucaristia", titulo: "Alma de Cristo (Anima Christi)", texto: "Alma de Cristo, santificai-me. / Corpo de Cristo, salvai-me. / Sangue de Cristo, inebriai-me. / Água do lado de Cristo, lavai-me. / Paixão de Cristo, confortai-me. / Ó bom Jesus, ouvi-me. / Dentro de vossas chagas, escondei-me. / Não permitais que me separe de Vós. / Do espírito maligno, defendei-me. / Na hora da minha morte, chamai-me. / E mandai-me ir para Vós, / para que com vossos Santos Vos louve / por todos os séculos dos séculos. Amém." },
    { categoria: "Rosário", titulo: "Salve Rainha", texto: "Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém." }
];

const DATA_BIBLIOTECA = [
    { categoria: "Encíclicas", titulo: "Humani Generis (Papa Pio XII)", descricao: "Sobre algumas falsas opiniões que ameaçam minar os fundamentos da doutrina católica." },
    { categoria: "Documentos", titulo: "Constituição Lumen Gentium (Concílio Vaticano II)", descricao: "Sobre a constituição dogmática da Igreja, sua essência e sua missão salvífica." },
    { categoria: "Santos", titulo: "Tratado da Verdadeira Devoção (São Luís de Montfort)", descricao: "Um clássico espiritual que expõe o método de consagração total a Jesus por Maria." },
    { categoria: "Santos", titulo: "Castelo Interior (Santa Teresa de Ávila)", descricao: "Guia completo sobre as moradas da alma na jornada espiritual em direção à união mística." }
];

const DATA_BLOG = [
    { titulo: "A Beleza Redentora da Sagrada Liturgia", autor: "Pe. Francisco Xavier", data: "01 de Julho de 2026", resumo: "Por que os ritos sagrados tradicionais elevam a nossa alma em direção ao transcendente e como participar frutuosamente do mistério divino." },
    { titulo: "A Defesa Patrística da Eucaristia", autor: "Dr. Marcos da Silva", data: "28 de Junho de 2026", resumo: "Análise histórica das cartas de Santo Inácio e São Justino Mártir demonstrando a crença explícita na Presença Real desde o século I." }
];

const DATA_BIBLIA = {
    livros: {
        "Gênesis": {
            1: "No princípio, Deus criou o céu e a terra. A terra estava deserta e vazia; as trevas cobriam o abismo e o Espírito de Deus pairava sobre as águas. Deus disse: 'Faça-se a luz!' E a luz foi feita. Deus viu que a luz era boa, e separou a luz das trevas.",
            2: "Assim foram concluídos o céu e a terra e todo o seu exército. Deus concluiu no sétimo dia a obra que fizera e descansou. Deus abençoou o sétimo dia e o santificou, porque nele descansou de toda a obra da criação."
        },
        "Salmos": {
            23: "O Senhor é o meu pastor, nada me faltará. Em verdes prados ele me faz deitar, conduz-me junto às águas refrescantes. Restaura as minhas forças, guia-me por caminhos retos por amor do seu nome.",
            91: "Tu que habitas sob a proteção do Altíssimo, que moras à sombra do Onipotente, dize ao Senhor: 'Meu refúgio, minha fortaleza, meu Deus em quem confio!' Ele te livrará do laço do caçador e da peste perniciosa."
        },
        "São Mateus": {
            5: "Vendo as multidões, Jesus subiu ao monte. Sentou-se, e os discípulos aproximaram-se dele. E ele começou a ensinar, dizendo: 'Bem-aventurados os pobres em espírito, porque deles é o Reino dos Céus. Bem-aventurados os mansos, porque herdarão a terra.'"
        },
        "São João": {
            1: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. Ele estava no princípio com Deus. Tudo foi feito por meio dele e sem ele nada se fez. Nele estava a vida, e a vida era a luz dos homens.",
            6: "Eu sou o pão vivo descido do céu. Quem comer deste pão viverá eternamente; e o pão que eu darei é a minha carne para a vida do mundo. Os judeus discutiam: 'Como pode este homem dar-nos a sua carne para comer?'"
        }
    },
    temas: [
        { tema: "Consolo nas provações", versiculo: "“Vinde a mim, todos vós que estais cansados e oprimidos, e eu vos aliviarei.”", ref: "São Mateus 11, 28" },
        { tema: "A Sagrada Eucaristia", versiculo: "“Isto é o meu corpo, que é dado por vós; fazei isto em memória de mim.”", ref: "São Lucas 22, 19" },
        { tema: "A Oração", versiculo: "“Pedi e dar-se-vos-á; buscai e achareis; batei e abrir-se-vos-á.”", ref: "São Mateus 7, 7" },
        { tema: "Amor Fraterno", versiculo: "“O meu mandamento é este: que vos ameis uns aos outros, assim como eu vos amei.”", ref: "São João 15, 12" }
    ]
};

// ==========================================================================
// 2. FUNÇÕES DE NAVEGAÇÃO E INTERRUPTORES DE TEMA
// ==========================================================================

function inicializarNavegacao() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section-panel");
    const cardLinks = document.querySelectorAll(".card-link");

    function ativarSecao(sectionId) {
        sections.forEach(sec => {
            sec.classList.remove("active");
        });
        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        const targetSec = document.getElementById("sec-" + sectionId);
        if (targetSec) {
            targetSec.classList.add("active");
        }

        const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }

        // Scroll suave para o painel principal
        document.getElementById("main-content").scrollIntoView({ behavior: "smooth" });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute("data-section");
            ativarSecao(sectionId);
            window.location.hash = sectionId;
        });
    });

    cardLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-target");
            ativarSecao(targetId);
            window.location.hash = targetId;
        });
    });

    // Tratar rota inicial baseada em Hash
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        ativarSecao(hash);
    }
}

function inicializarTema() {
    const themeBtn = document.getElementById("theme-toggle");
    
    // Verifica preferência anterior
    if (localStorage.getItem("theme-mode") === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.innerHTML = `<span class="nav-icon">☀️</span> Tema Claro`;
    }

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            themeBtn.innerHTML = `<span class="nav-icon">☀️</span> Tema Claro`;
            localStorage.setItem("theme-mode", "dark");
        } else {
            themeBtn.innerHTML = `<span class="nav-icon">👁</span> Tema Escuro`;
            localStorage.setItem("theme-mode", "light");
        }
    });
}

function inicializarAudio() {
    const playBtn = document.getElementById("audio-play-btn");
    const audio = document.getElementById("gregorian-audio");

    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().then(() => {
                playBtn.textContent = "⏸";
            }).catch(e => {
                console.log("Erro ao tocar áudio: " + e.message);
            });
        } else {
            audio.pause();
            playBtn.textContent = "▶";
        }
    });
}

// ==========================================================================
// 3. INTEGRAÇÃO DA LITURGIA DIÁRIA (COM FALLBACK SEGURO)
// ==========================================================================

function carregarLiturgia() {
    const dataElement = document.getElementById("lit-data");
    const leitura1 = document.getElementById("lit-texto-leitura1");
    const ref1 = document.getElementById("lit-ref-leitura1");
    const leitura2 = document.getElementById("lit-texto-leitura2");
    const ref2 = document.getElementById("lit-ref-leitura2");
    const bloco2 = document.getElementById("lit-bloco-leitura2");
    const salmo = document.getElementById("lit-texto-salmo");
    const refSalmo = document.getElementById("lit-ref-salmo");
    const evangelho = document.getElementById("lit-texto-evangelho");
    const refEvang = document.getElementById("lit-ref-evangelho");

    // Formatar data de hoje por extenso
    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const hoje = new Date();
    dataElement.textContent = hoje.toLocaleDateString('pt-BR', opcoes);

    // Chamada de API com fallback
    fetch("https://liturgia.up.railway.app/")
        .then(res => res.json())
        .then(data => {
            if (data) {
                ref1.textContent = data.primeiraLeitura.referencia || "";
                leitura1.innerHTML = formatarParagrafos(data.primeiraLeitura.texto);
                
                refSalmo.textContent = data.salmo.referencia || "";
                salmo.innerHTML = formatarParagrafos(data.salmo.texto);

                if (data.segundaLeitura && data.segundaLeitura.texto) {
                    bloco2.style.display = "block";
                    ref2.textContent = data.segundaLeitura.referencia || "";
                    leitura2.innerHTML = formatarParagrafos(data.segundaLeitura.texto);
                } else {
                    bloco2.style.display = "none";
                }

                refEvang.textContent = data.evangelho.referencia || "";
                evangelho.innerHTML = formatarParagrafos(data.evangelho.texto);
            }
        })
        .catch(err => {
            console.log("Usando dados locais de Liturgia (Offline/Fallback):", err);
            // Fallback Litúrgico clássico
            ref1.textContent = "Filipenses 4, 4-9";
            leitura1.innerHTML = "Irmãos: Alegrai-vos sempre no Senhor; repito, alegrai-vos. Seja a vossa amabilidade conhecida de todos os homens. O Senhor está próximo. Não vos inquieteis com coisa alguma, mas apresentai as vossas necessidades a Deus, em orações e súplicas, acompanhadas de ação de graças. E a paz de Deus, que ultrapassa todo o entendimento, guardará os vossos corações e pensamentos em Cristo Jesus.";
            
            refSalmo.textContent = "Salmo 22 (23)";
            salmo.innerHTML = "O Senhor é o meu pastor, nada me faltará. / Conduz-me junto às águas refrescantes. / Restaura as minhas forças, guia-me por caminhos retos por amor do seu nome.";
            
            refEvang.textContent = "São Mateus 11, 28-30";
            evangelho.innerHTML = "Naquele tempo, tomou Jesus a palavra e disse: 'Vinde a mim, todos vós que estais cansados e oprimidos, e eu vos aliviarei. Tomai sobre vós o meu jugo e aprendei de mim, porque sou manso e humilde de coração; e achareis descanso para as vossas almas. Porque o meu jugo é suave e o meu fardo é leve'.";
        });
}

function formatarParagrafos(texto) {
    if (!texto) return "";
    return texto.replace(/\n/g, "<br><br>");
}

// ==========================================================================
// 4. MÓDULOS DE CONTEÚDO DINÂMICO
// ==========================================================================

function inicializarBiblia() {
    const livroSelect = document.getElementById("biblia-livro-select");
    const capSelect = document.getElementById("biblia-cap-select");
    const tituloLeitura = document.getElementById("biblia-titulo-leitura");
    const textoConteudo = document.getElementById("biblia-texto-conteudo");
    const temasContainer = document.getElementById("biblia-temas-container");
    const resultTema = document.getElementById("biblia-versiculo-tema-resultado");

    // Popular Livros
    Object.keys(DATA_BIBLIA.livros).forEach(livro => {
        const option = document.createElement("option");
        option.value = livro;
        option.textContent = livro;
        livroSelect.appendChild(option);
    });

    function atualizarCapitulos() {
        capSelect.innerHTML = "";
        const livro = livroSelect.value;
        const caps = Object.keys(DATA_BIBLIA.livros[livro]);
        caps.forEach(cap => {
            const option = document.createElement("option");
            option.value = cap;
            option.textContent = `Capítulo ${cap}`;
            capSelect.appendChild(option);
        });
        atualizarTextoBiblico();
    }

    function atualizarTextoBiblico() {
        const livro = livroSelect.value;
        const cap = capSelect.value;
        if (livro && cap) {
            tituloLeitura.textContent = `${livro} ${cap}`;
            textoConteudo.textContent = DATA_BIBLIA.livros[livro][cap];
        }
    }

    livroSelect.addEventListener("change", atualizarCapitulos);
    capSelect.addEventListener("change", atualizarTextoBiblico);

    atualizarCapitulos(); // iniciar primeiro livro

    // Iniciar Tags de Temas
    DATA_BIBLIA.temas.forEach((item, index) => {
        const tag = document.createElement("div");
        tag.className = "tema-tag";
        tag.textContent = item.tema;
        tag.addEventListener("click", () => {
            document.querySelectorAll(".tema-tag").forEach(t => t.classList.remove("active"));
            tag.classList.add("active");
            resultTema.style.display = "block";
            resultTema.innerHTML = `${item.versiculo} <span class="autor-ref">${item.ref}</span>`;
        });
        temasContainer.appendChild(tag);
    });
}

function inicializarEucaristia() {
    const container = document.getElementById("eucaristia-conteudo-dinamico");
    let html = `<h2 class="section-title">${DATA_EUCARISTIA.titulo}</h2>`;
    html += `<p class="capitular">${DATA_EUCARISTIA.introducao}</p>`;
    
    DATA_EUCARISTIA.artigos.forEach(art => {
        html += `
        <div class="liturgia-leitura">
            <h4>${art.titulo}</h4>
            <p>${art.texto}</p>
            <span class="autor-ref" style="font-style: italic; color: var(--ouro-escuro); font-size: 0.9rem;">— ${art.referencia}</span>
        </div>`;
    });
    container.innerHTML = html;
}

function inicializarMaria() {
    const container = document.getElementById("maria-conteudo-dinamico");
    let html = `<h2 class="section-title">${DATA_MARIA.titulo}</h2>`;
    html += `<p class="capitular">${DATA_MARIA.introducao}</p>`;

    html += `<h3 class="subsection-title">Os Quatro Dogmas Marianos</h3>`;
    html += `<div class="cards-grid">`;
    DATA_MARIA.dogmas.forEach(dogma => {
        html += `
        <div class="card">
            <h3>${dogma.nome}</h3>
            <p>${dogma.descricao}</p>
        </div>`;
    });
    html += `</div>`;

    html += `<h3 class="subsection-title">Devoções e Práticas</h3>`;
    DATA_MARIA.devocoes.forEach(dev => {
        html += `
        <div class="liturgia-leitura">
            <h4>${dev.titulo}</h4>
            <p>${dev.texto}</p>
        </div>`;
    });

    container.innerHTML = html;
}

function inicializarSantos() {
    const container = document.getElementById("santos-conteudo-dinamico");
    let html = `<h2 class="section-title">Galeria dos Santos</h2>`;
    html += `<p class="capitular">Conheça a história e as virtudes dos grandes homens e mulheres proclamados santos pela Igreja Católica. Suas vidas são mapas práticos de santidade.</p>`;

    DATA_SANTOS.forEach(santo => {
        html += `
        <div class="liturgia-leitura">
            <h4>${santo.nome}</h4>
            <div class="liturgia-ref">Festa Litúrgica: ${santo.festa} | Categoria: ${santo.categoria}</div>
            <p>${santo.biografia}</p>
            <div class="citacao-destaque" style="margin: 15px 0 0 0; padding: 10px 15px;">
                ${santo.citacao}
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

function inicializarPadres() {
    const container = document.getElementById("padres-conteudo-dinamico");
    let html = `<h2 class="section-title">Padres da Igreja</h2>`;
    html += `<p class="capitular">Os Santos Padres foram teólogos e pastores dos primeiros séculos que consolidaram a Tradição, definiram a ortodoxia contra heresias antigas e estabeleceram as bases intelectuais da cristandade.</p>`;

    DATA_PADRES.forEach(padre => {
        html += `
        <div class="liturgia-leitura">
            <h4>${padre.nome}</h4>
            <div class="liturgia-ref">Período: ${padre.periodo}</div>
            <p><strong>Biografia:</strong> ${padre.biografia}</p>
            <p style="margin-top: 10px;"><strong>Principais Ensinamentos:</strong> ${padre.ensinamento}</p>
        </div>`;
    });
    container.innerHTML = html;
}

function inicializarDoutrina() {
    const container = document.getElementById("doutrina-conteudo-dinamico");
    let html = `<h2 class="section-title">${DATA_DOUTRINA.titulo}</h2>`;
    html += `<p class="capitular">${DATA_DOUTRINA.introducao}</p>`;

    DATA_DOUTRINA.itens.forEach(item => {
        html += `
        <div class="liturgia-leitura">
            <h4>${item.titulo}</h4>
            <p>${item.conteudo}</p>
        </div>`;
    });
    container.innerHTML = html;
}

function inicializarHistoria() {
    const container = document.getElementById("historia-timeline-container");
    let html = "";
    DATA_HISTORIA.forEach(item => {
        html += `
        <div class="timeline-item">
            <div class="timeline-badge"></div>
            <div class="timeline-epoch">${item.epoca}</div>
            <div class="timeline-content">
                <h4>${item.titulo}</h4>
                <p>${item.texto}</p>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

function inicializarOracoes() {
    const tabsContainer = document.getElementById("oracoes-tabs");
    const listaContainer = document.getElementById("oracoes-lista-container");

    const categorias = ["Todos", "Manhã", "Noite", "Eucaristia", "Rosário"];
    
    // Render tabs
    categorias.forEach((cat, index) => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = cat;
        btn.addEventListener("click", () => {
            document.querySelectorAll("#oracoes-tabs .tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderizarListaOracoes(cat);
        });
        tabsContainer.appendChild(btn);
    });

    function renderizarListaOracoes(categoriaFiltrada) {
        listaContainer.innerHTML = "";
        const oracoesFiltradas = DATA_ORACOES.filter(or => 
            categoriaFiltrada === "Todos" || or.categoria === categoriaFiltrada
        );

        oracoesFiltradas.forEach(or => {
            const div = document.createElement("div");
            div.className = "list-item";
            div.innerHTML = `
                <h4>${or.titulo}</h4>
                <p style="white-space: pre-line; line-height: 1.8; text-align: left; font-style: italic;">${or.texto}</p>
            `;
            listaContainer.appendChild(div);
        });
    }

    renderizarListaOracoes("Todos");
}

function inicializarBiblioteca() {
    const tabsContainer = document.getElementById("biblioteca-tabs");
    const listaContainer = document.getElementById("biblioteca-lista-container");

    const categorias = ["Todos", "Encíclicas", "Documentos", "Santos"];

    categorias.forEach((cat, index) => {
        const btn = document.createElement("button");
        btn.className = `tab-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = cat;
        btn.addEventListener("click", () => {
            document.querySelectorAll("#biblioteca-tabs .tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderizarListaBiblio(cat);
        });
        tabsContainer.appendChild(btn);
    });

    function renderizarListaBiblio(categoriaFiltrada) {
        listaContainer.innerHTML = "";
        const itemsFiltrados = DATA_BIBLIOTECA.filter(item => 
            categoriaFiltrada === "Todos" || item.categoria === categoriaFiltrada
        );

        itemsFiltrados.forEach(item => {
            const div = document.createElement("div");
            div.className = "list-item";
            div.innerHTML = `
                <h4>${item.titulo}</h4>
                <div class="liturgia-ref">Categoria: ${item.categoria}</div>
                <p>${item.descricao}</p>
            `;
            listaContainer.appendChild(div);
        });
    }

    renderizarListaBiblio("Todos");
}

function inicializarBlog() {
    const container = document.getElementById("blog-lista-container");
    let html = "";
    DATA_BLOG.forEach(art => {
        html += `
        <div class="list-item">
            <h4>${art.titulo}</h4>
            <div class="liturgia-ref">Escrito por ${art.autor} em ${art.data}</div>
            <p>${art.resumo}</p>
        </div>`;
    });
    container.innerHTML = html;
}

// ==========================================================================
// 5. SISTEMA DE PESQUISA UNIFICADA E INTELIGENTE
// ==========================================================================

function inicializarPesquisa() {
    const campo = document.getElementById("campo-pesquisa");
    const resultados = document.getElementById("resultados-pesquisa");

    campo.addEventListener("input", () => {
        const termo = campo.value.trim().toLowerCase();

        if (termo.length < 3) {
            resultados.innerHTML = `<p style="text-align: center; color: var(--texto-secundario);">Digite pelo menos 3 caracteres para iniciar a busca.</p>`;
            return;
        }

        let hits = [];

        // 1. Procurar em Santos
        DATA_SANTOS.forEach(santo => {
            if (santo.nome.toLowerCase().includes(termo) || santo.biografia.toLowerCase().includes(termo) || santo.citacao.toLowerCase().includes(termo)) {
                hits.push({ tipo: "Santo", titulo: santo.nome, desc: santo.biografia });
            }
        });

        // 2. Procurar em Padres da Igreja
        DATA_PADRES.forEach(p => {
            if (p.nome.toLowerCase().includes(termo) || p.biografia.toLowerCase().includes(termo) || p.ensinamento.toLowerCase().includes(termo)) {
                hits.push({ tipo: "Padre da Igreja", titulo: p.nome, desc: p.ensinamento });
            }
        });

        // 3. Procurar em Eucaristia
        DATA_EUCARISTIA.artigos.forEach(art => {
            if (art.titulo.toLowerCase().includes(termo) || art.texto.toLowerCase().includes(termo)) {
                hits.push({ tipo: "Eucaristia", titulo: art.titulo, desc: art.texto });
            }
        });

        // 4. Procurar em Maria
        DATA_MARIA.dogmas.forEach(d => {
            if (d.nome.toLowerCase().includes(termo) || d.descricao.toLowerCase().includes(termo)) {
                hits.push({ tipo: "Dogma Mariano", titulo: d.nome, desc: d.descricao });
            }
        });
        DATA_MARIA.devocoes.forEach(dev => {
            if (dev.titulo.toLowerCase().includes(termo) || dev.texto.toLowerCase().includes(termo)) {
                hits.push({ tipo: "Devocionário Mariano", titulo: dev.titulo, desc: dev.texto });
            }
        });

        // 5. Procurar em Orações
        DATA_ORACOES.forEach(or => {
            if (or.titulo.toLowerCase().includes(termo) || or.texto.toLowerCase().includes(termo)) {
                hits.push({ tipo: "Oração", titulo: or.titulo, desc: or.texto });
            }
        });

        // 6. Procurar em Biblioteca
        DATA_BIBLIOTECA.forEach(b => {
            if (b.titulo.toLowerCase().includes(termo) || b.descricao.toLowerCase().includes(termo)) {
                hits.push({ tipo: "Biblioteca", titulo: b.titulo, desc: b.descricao });
            }
        });

        // Exibir Resultados
        if (hits.length === 0) {
            resultados.innerHTML = `<p style="text-align: center; color: var(--texto-secundario);">Nenhum resultado encontrado para "<strong>${campo.value}</strong>".</p>`;
        } else {
            let html = `<p style="color: var(--ouro-escuro); margin-bottom: 15px;"><strong>${hits.length}</strong> resultado(s) encontrado(s):</p>`;
            hits.forEach(h => {
                html += `
                <div class="liturgia-leitura" style="margin-bottom: 15px; padding: 15px 20px;">
                    <span style="font-family: 'Cinzel', serif; font-size: 0.8rem; background-color: var(--ouro-escuro); color: #fff; padding: 2px 8px; border-radius: 2px; text-transform: uppercase;">${h.tipo}</span>
                    <h4 style="margin-top: 10px; margin-bottom: 5px;">${h.titulo}</h4>
                    <p style="font-size: 1.1rem; margin-bottom: 0;">${h.desc.substring(0, 250)}...</p>
                </div>`;
            });
            resultados.innerHTML = html;
        }
    });
}