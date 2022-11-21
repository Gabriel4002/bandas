function biografia(){
    var integrantes = (document.getElementById("lista").value);
 

    if(integrantes == "Selecione um integrante"){
        document.getElementById("integrantes").innerHTML = ("")
        document.getElementById("img").innerHTML = ""
    }

    else if(integrantes == "Freddie Mercury"){
        document.getElementById("integrantes").innerHTML = '<div class="i">Freddie Mercury foi um cantor, pianista e compositor britânico, conhecido pelo seu trabalho com a banda britânica de rock Queen, que integrou como vocalista de 1970 até o ano de sua morte, 1991. Freddie tornou-se conhecido pelo seu poderoso tom de voz e pelos seus desempenhos enérgicos que envolviam uma interação com a plateia, tendo sido considerado como um dos maiores artistas de todos os tempos.</div>';
        document.getElementById("img").innerHTML = "<img src = 'https://cdn.britannica.com/38/200938-050-E22981D1/Freddie-Mercury-Live-Aid-Queen-Wembley-Stadium-July-13-1985.jpg' style = 'width = '01' height = '25'>";
    }
    else if(integrantes == "Brian May"){
        document.getElementById("integrantes").innerHTML = '<div class="i">Brian May é co-fundador do Queen, juntamente com o cantor Freddie Mercury e o baterista Roger Taylor, tendo trabalhado anteriormente com Taylor na banda Smile, a qual se juntou quando era universitário. Em cinco anos de sua formação, em 1970, e com o recrutamento do baixista John Deacon completando a equipe de músicos, o Queen se estabeleceu como uma das maiores bandas de rock do mundo.</div>';
        document.getElementById("img").innerHTML = "<img src = 'https://brianmay.com/brian/gorillas/BM_b&w72resa.jpg' width = '210' height = '225'>";
    }
    else if(integrantes == "Roger Taylor"){
        document.getElementById("integrantes").innerHTML = '<div class="i">Roger Taylor é um músico, compositor, multi-instrumentista, cantor e backing vocal britânico. Foi baterista, backing-vocal e membro fundador da banda Queen. É considerado um dos melhores e mais influentes bateristas de rock da década de 1970 e 80. Como compositor, Taylor contribuiu com músicas de álbuns da banda, desde o começando a compor pelo menos uma faixa em cada álbum, geralmente cantou os vocais em suas próprias composições.</div>';
        document.getElementById("img").innerHTML = "<img src = 'https://i.pinimg.com/736x/06/39/51/063951f399a115e252e55363d82e76db.jpg' width = '210' height = '225'>";
    }
    else if(integrantes == "John Deacon"){
        document.getElementById("integrantes").innerHTML =  '<div class="i">John Deacon é um músico britânico aposentado, mais conhecido por ter sido o baixista e um dos compositores da banda de rock Queen. Foi o último dos quatro membros a entrar para o grupo em 1971 e também o mais jovem, tendo apenas 19 anos quando foi efetivado.</div>';
        document.getElementById("img").innerHTML = "<img src = 'https://i.pinimg.com/originals/6c/aa/d8/6caad8ca89637dd4ced04e7fcc4dae65.jpg' width = '210' height = '225'>";
    }}
    
    function biografias(){
        var integrantesa = (document.getElementById("lista1").value);


        if(integrantesa == "Selecione um integrante"){
            document.getElementById("integrantes1").innerHTML = ("")
            document.getElementById("img1").innerHTML = ""
        }
     else if(integrantesa == "Paul Stanley"){
        document.getElementById("integrantes1").innerHTML = '<div class="i">Paul Stanley, é o guitarrista, vocalista, compositor, fundador e líder do grupo Kiss. Por mais de quarenta anos, Paul Stanley é considerado como um dos “frontman” mais famosos da história do rock and roll. Ele é o principal compositor, e vocalista principal do KISS, uma das mais influentes e bem sucedidas bandas de rock and roll da história.</div>';
        document.getElementById("img1").innerHTML = "<img class='img1'  src = 'http://cdn.shopify.com/s/files/1/0564/5405/4087/products/045_20KISS_20Paul_20Stanley_201979.jpg?v=1632779697' width = >";
    }
    else if(integrantesa == "Gene Simmons"){
        document.getElementById("integrantes1").innerHTML = '<div class="i">Gene Simmons é o vocalista, baixista e fundador da banda de hard rock Kiss. Simmons é mais conhecido pelo seu apelido "The Demon". Junto com o também vocalista Paul Stanley, Simmons é o único membro remanescente da formação original do Kiss, e participou de todos os álbuns da banda. Contrariamente a muitas personalidades do rock, Simmons afirma "nunca ter consumido drogas, nunca ter fumado nem nunca ter bebido álcool demais em toda a sua vida." É famoso pelo seu jeito demoníaco durante os shows, é também famoso por seu baixo em forma de machado, Axe Bass.</div>';
        document.getElementById("img1").innerHTML = "<img class='img2' src = 'https://cdn.artphotolimited.com/images/62018a1dbd40b826b265548f/300x300/kiss-1.jpg' width = '210' height = '225'>";
    }
    else if(integrantesa == "Eric Singer"){
        document.getElementById("integrantes1").innerHTML = '<div class="i">Eric Singer é um baterista norte-americano. Eric é conhecido por ser o baterista da banda de hard rock Kiss. Eric Singer ficou famoso por tocar em bandas como Kiss, Black Sabbath, Alice Cooper, Badlands, Glamnation, e ao lado de Brian May, Paul Stanley, Gary Moore, Gilby Clarke, Lita Ford, Doro Pesch.</div>';
        document.getElementById("img1").innerHTML = "<img class='img1' src = 'https://www.eric-singer.com/wp-content/uploads/2020/01/280full-207x300.jpg' width = '210' height = '225'>";
    }
    else if(integrantesa == "Tommy Thayer"){
        document.getElementById("integrantes1").innerHTML = '<div class="i">Ele está creditado como produtor no primeiro volume de 9 livros KISStory, coordenou e administrou a Kiss Convention World Tour oficial em 1995, dirigiu e produziu o DVD (que virou platina dupla) Kiss: The Second Coming, e criou o título de abertura de Detroit Rock City da New Line Cinema. Co-escreveu músicas com o Kiss incluindo "Betrayed", "The Street Giveth And The Street Taketh Away" do álbum Hot In The Shade de 1989 e "Childhoods End" do Carnival Of Souls: The Final Sessions de 1997.</div>';
        document.getElementById("img1").innerHTML = "<img class='img1' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Tommy_Thayer_live2012.jpg/640px-Tommy_Thayer_live2012.jpg' width = '210' height = '255'>";
    }
}
function biografia1(){
    var integrantes2 = (document.getElementById("lista2").value);


    if(integrantes2 == "Selecione um integrante"){
        document.getElementById("integrantes2").innerHTML = ("")
        document.getElementById("img2").innerHTML = ""
    }
 else if(integrantes2 == "Jimmy Page"){
    document.getElementById("integrantes2").innerHTML = '<div class="i">Jimmy Page é um músico, produtor musical e compositor britânico que alcançou sucesso internacional como guitarrista da banda de rock Led Zeppelin. Começou sua carreira como músico de estúdio em Londres e, em meados da década de 1960, tornou-se o guitarrista de sessão mais procurado na Inglaterra. Foi membro dos Yardbirds de 1966 até 1968, e posteriormente fundou o Led Zeppelin, em 1968.</div>';
    document.getElementById("img2").innerHTML = "<img class='img1' style='width:'210'; height : '225';' src = 'https://i.pinimg.com/originals/b3/86/0b/b3860b7fcd969ca8c008c20d97d3c4ec.jpg' width = '210' height = '255'> ";
}
else if(integrantes2 == "John Paul Jones"){
    document.getElementById("integrantes2").innerHTML = '<div class="i">Jhon Paul Jones é um multi-instrumentista, baixista e tecladista britânico. Jones ganhou notoriedade por ser o baixista, tecladista e um dos membros do Led Zeppelin até o desmembramento da banda após a morte de John Bonham, em 1980. Desde então, Jones vem desenvolvendo uma carreira solo. Também toca guitarra, bandolim, koto, gaita e ukulele. De acordo com o Allmusic, Jones "deixou sua marca na história da música rock & roll como um músico inovador, arranjador e diretor".</div>';
    document.getElementById("img2").innerHTML = "<img class='img1' src = 'https://i.pinimg.com/originals/df/39/c0/df39c0ca7e59132a64fa8a91d9272a09.jpg' width = '210' height = '225'>";
}
else if(integrantes2 == "Robert Plant"){
    document.getElementById("integrantes2").innerHTML = '<div class="i">Robert Plant é um músico, cantor, e compositor britânico mais conhecido por seu trabalho como vocalista da banda de rock Led Zeppelin. Plant desfrutou de grande sucesso com o Led Zeppelin do final da década de 1960 até o final da década de 1970 e desenvolveu uma imagem atraente como o carismático vocalista do rock and roll, semelhante a contemporâneos como Roger Daltrey do The Who, Freddie Mercury da Queen, Mick Jagger dos Rolling Stones e Jim Morrison do The Doors.</div>';
    document.getElementById("img2").innerHTML = "<img class='img1' src = 'https://i.pinimg.com/originals/c6/f3/45/c6f3450bf545c5e5fed0c22ffdfbc727.jpg' width = '210' height = '225'>";
}
else if(integrantes2 == "John Bonham"){
    document.getElementById("integrantes2").innerHTML = '<div class="i">John Bonham foi um músico e compositor inglês, mais conhecido por ter sido o baterista da banda Led Zeppelin. Bonham era admirado por sua velocidade, potência, sons característicos, e sensibilidade para o groove. É amplamente considerado um dos melhores bateristas da história do rock. Em 2011 os leitores da Rolling Stone consideraram Bonham o "melhor baterista de todos os tempos".</div>';
    document.getElementById("img2").innerHTML = "<img class='img3' src = 'https://i.redd.it/mvpl5p70i1oz.jpg' width = '210' height = '255'>";
}
}

function biografia2(){
    var integrantes3 = (document.getElementById("lista3").value);


    if(integrantes3 == "Selecione um integrante"){
        document.getElementById("integrantes3").innerHTML = ("")
        document.getElementById("img3").innerHTML = ""
    }
 else if(integrantes3 == "Tony lommi"){
    document.getElementById("integrantes3").innerHTML = '<div class="i">Tony lommi é conhecido mundialmente por ser guitarrista e membro fundador da banda britânica de metal Black Sabbath e do projeto Heaven & Hell com o vocalista Dio. Foi considerado o 25º melhor guitarrista de todos os tempos pela revista norte-americana Rolling Stone. É amplamente considerado o principal contribuidor na criação do Heavy Metal. A Rolling Stone[2] descreveu Iommi como o "Rei do Riffs", com as faixas de Iron Man, Paranoid e War Pigs.</div>';
    document.getElementById("img3").innerHTML = "<img class='img1' style='width:'210'; height : '225';' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Iommi_at_the_Forum_a.jpg/240px-Iommi_at_the_Forum_a.jpg' width = '210' height = '255'> ";
}
else if(integrantes3 == "Ozzy Osbourne"){
    document.getElementById("integrantes3").innerHTML = '<div class="i">Ozzy Ousbourne é um músico, compositor e vocalista britânico. Famoso tanto por seu trabalho como vocalista da banda britânica Black Sabbath, como por sua carreira solo. Consagrou diversos sucessos como "Crazy Train", "Mr. Crowley", "Mama, Im Coming Home", "Paranoid", "Iron Man" e lançou 12 álbuns de estúdio. Totalizando a soma de vendas de álbuns de sua carreira solo com sua carreira no Black Sabbath, Ozzy já alcançou a marca de 100 milhões de cópias vendidas.</div>';
    document.getElementById("img3").innerHTML = "<img class='img3' src = 'https://m.media-amazon.com/images/M/MV5BNzk3OTYyMzc2Nl5BMl5BanBnXkFtZTcwMTk3NTUyMg@@._V1_UY1200_CR196,0,630,1200_AL_.jpg' width = '210' height = '225'>";
}
else if(integrantes3 == "Bill Ward"){
    document.getElementById("integrantes3").innerHTML = '<div class="i">Bill Ward é um baterista inglês, sendo o primeiro baterista e um dos fundadores da banda britânica de heavy metal Black Sabbath. Ficou em 8° lugar na lista dos "50 melhores bateristas de hard rock e metal de todos os tempos" do site Loudwire. Em lista da revista Rolling Stone, Ward ficou na posição 42 dos "100 Maiores Bateristas de Todos os Tempos.</div>';
    document.getElementById("img3").innerHTML = "<img class='img1' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Black_Sabbath_%281970%29_%28cropped%29.jpg/220px-Black_Sabbath_%281970%29_%28cropped%29.jpg' width = '210' height = '225'>";
}
else if(integrantes3 == "Geezer Butler"){
    document.getElementById("integrantes3").innerHTML = '<div class="i">Geezer Butler é um baixista e compositor inglês. O músico é conhecido por ter tocado na banda de heavy metal Black Sabbath, pioneira do gênero, onde Butler escrevia todas as letras durante os anos 1970, e é tido como um dos mais influentes de todos os tempos com seu instrumento. Geezer foi conhecido como um dos primeiros baixistas a usar pedal wah-wah no seu baixo, que usou no início de "N.I.B." Geezer também foi um dos primeiros baixistas a usar uma afinação um tom abaixo no caso, D (Ré), após isso, Iommi passou a afinar sua guitarra em C#. A afinação em D é muito comum em bandas de Heavy Metal.</div>';
    document.getElementById("img3").innerHTML = "<img class='img1' src = 'https://i.pinimg.com/originals/28/b6/df/28b6df6b531c6c4bd2222131a57974dc.jpg' width = '210' height = '255'>";
}
}

function biografia3(){
    var integrantes4 = (document.getElementById("lista4").value);


    if(integrantes4 == "Selecione um integrante"){
        document.getElementById("integrantes4").innerHTML = ("")
        document.getElementById("img4").innerHTML = ""
    }
 else if(integrantes4 == "Angus Young"){
    document.getElementById("integrantes4").innerHTML = '<div class="i">Angus Young é um guitarrista e compositor escocês naturalizado na Austrália, conhecido por ser guitarrista solo, compositor, líder e co-fundador da banda de hard rock australiana AC/DC. No ano de 2003, foi introduzido juntamente de Malcolm Young, Brian Johnson e outros membros do AC/DC no Rock and Roll Hall of Fame. Foi considerado o 24.º melhor guitarrista de todos os tempos pela revista norte-americana Rolling Stone.</div>';
    document.getElementById("img4").innerHTML = "<img class='img2' style='width:'210'; height : '225';' src = 'https://www.dameocio.com/wp-content/uploads/2014/11/AC-DC-Angus-Young.jpg' width = '210' height = '255'> ";
}
else if(integrantes4 == "Phil Rudd"){
    document.getElementById("integrantes4").innerHTML = '<div class="i">Phil Rudd é um baterista australiano, membro da banda AC/DC. Entrou em 1975 na banda e ficou nesta até 1983, quando houve um desentendimento com Malcolm Young e após esse episódio, ele saiu do AC/DC. Em 1991 durante a turnê do álbum The Razors Edge, Phil recebeu um convite vindo de Malcolm Young para retornar ao AC/DC.</div>';
    document.getElementById("img4").innerHTML = "<img class='img3' src = 'http://s2.glbimg.com/vflDbASKsqgjrGI9_AyG01pq0s8=/288x0/top/s.glbimg.com/jo/eg/f/original/2014/11/25/phil_rudd.png' width = '210' height = '225'>";
}
else if(integrantes4 == "Stevie Young"){
    document.getElementById("integrantes4").innerHTML = '<div class="i">Stevie Young é um guitarrista escocês da banda de hard rock AC/DC, tendo entrado no lugar do seu tio Malcolm Young, que deixou o grupo por problemas de saúde. Ele é também sobrinho do outro guitarrista da banda, Angus Young; do produtor George Young, que já trabalhou com o grupo; e do músico Alexander Young, morto em 1997. Seu pai é Stephen Young, o mais velho dos irmãos.</div>';
    document.getElementById("img4").innerHTML = "<img class='img3' src = 'https://pbs.twimg.com/media/FGA4dP4VQAAVAwI?format=jpg&name=4096x4096' width = '210' height = '225'>";
}
else if(integrantes4 == "Brian Johnson"){
    document.getElementById("integrantes4").innerHTML = '<div class="i">Brian Johnson é um cantor e compositor britânico. Desde 1980 ele é o vocalista da banda de hard rock australiana AC/DC. Em 2016, foi afastado da banda por problemas auditivos, retornando em 2018. O primeiro álbum de Brian com o AC/DC foi Back in Black. Em 1997, Brian gravou com a banda Jackyl a música "Locked and Loaded", e em 2002 escreveu a música "Kill The Sunshine" do álbum Relentless.</div>';
    document.getElementById("img4").innerHTML = "<img class='img1' src = 'https://roquereverso.files.wordpress.com/2016/03/brian-johnson-e1457405666964.jpg?w=584' width = '210' height = '255'>";
}
else if(integrantes4 == "Cliff Williams"){
    document.getElementById("integrantes4").innerHTML = '<div class="i">Cliff Williams  é um baixista britânico que é membro da banda australiana de hard rock AC/DC como o baixista e cantor de apoio a partir de 1977, exceto por uma breve aposentadoria de 2016 a 2018. Começou sua carreira musical em 1967 e pertenceu anteriormente às bandas britânicas Home e Bandit. Seu primeiro álbum de estúdio com o AC/DC foi Powerage de 1978. Foi introduzido junto ao grupo no Rock and Roll Hall of Fame dos Estados Unidos em 2003.</div>';
    document.getElementById("img4").innerHTML = "<img class='img1' src = 'https://stmetal.files.wordpress.com/2008/10/cliff.jpg' width = '210' height = '255'>";
}
}

function biografia4(){
    var integrantes5 = (document.getElementById("lista5").value);


    if(integrantes5 == "Selecione um integrante"){
        document.getElementById("integrantes5").innerHTML = ("")
        document.getElementById("img5").innerHTML = ""
    }
 else if(integrantes5 == "Axl Rose"){
    document.getElementById("integrantes5").innerHTML = '<div class="i">Axl Rose é um cantor, compositor e multi-instrumentista norte-americano. Ficou conhecido como vocalista da banda de hard rock Guns N Roses, com quem atingiu popularidade, sucesso e reconhecimento no final dos anos 80 e início dos anos 90, antes de desaparecer dos olhos do público durante vários anos. Foi anunciado como vocalista convidado da banda AC/DC enquanto Brian Johnson cuidava da sua saúde. O AC/DC deixou claro que não seria um membro oficial, mas um membro convidado para realizar apenas alguns shows.</div>';
    document.getElementById("img5").innerHTML = "<img class='img3' style='width:'210'; height : '225';' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLLTEt56YD_kCwIUjlaXOZK-76G6hjlo7Glw&usqp=CAU' width = '210' height = '255'> ";
}
else if(integrantes5 == "Slash"){
    document.getElementById("integrantes5").innerHTML = '<div class="i">Slash é um guitarrista anglo-americano mundialmente famoso como integrante da formação clássica da banda Guns N Roses, com quem alcançou sucesso mundial no final da década de 1980 e início dos anos 90. Em sua carreira posterior, Slash integrou algumas outras bandas de diversos estilos, bem sucedidas em sua maioria, e em 2011 iniciou uma carreira solo, em que até agora lançou cinco discos.</div>';
    document.getElementById("img5").innerHTML = "<img src = 'https://i.scdn.co/image/ab6761610000e5eb16bbce3d5fb8a51e7cc3dce0' width = '210' height = '225'>";
}
else if(integrantes5 == "Duff McKagan"){
    document.getElementById("integrantes5").innerHTML = '<div class="i"> Duff McKagan é um músico estadunidense. Ele é mais conhecido por ser membro fundador e baixista por quase 30 anos da banda de hard rock Guns N Roses, com quem alcançou sucesso mundial no final de 1980 e início de 1990 e também que deixou no auge de sua fama em 1997.</div>';
    document.getElementById("img5").innerHTML = "<img class='img1' src = 'https://media.fstatic.com/OMWsTgzbOBqSmnUSAaCdrrj5g5M=/210x312/smart/media/artists/avatar/2022/05/duff-mckagan_a13714.jpg' width = '210' height = '225'>";
}
else if(integrantes5 == "Richard Fortus"){
    document.getElementById("integrantes5").innerHTML = '<div class="i">Richard Fortus é um guitarrista norte-americano. Ele é membro da banda de hard rock Guns N Roses, com quem gravou um álbum de estúdio, desde 2002. Fortus também colaborou extensivamente com o vocalista do The Psychedlic Furs, Richard Butler, e seu colega de banda do Guns N Roses, Frank Ferrer. Além do vocalista Axl Rose e do tecladista Dizzy Reed, Fortus é o membro mais antigo do Guns N Roses, tendo estado na banda continuamente desde 2002.</div>';
    document.getElementById("img5").innerHTML = "<img class='img3' src = 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Richard_Fortus_%288056234364%29.jpg' width = '210' height = '255'>";
}
else if(integrantes5 == "Frank Ferrer"){
    document.getElementById("integrantes5").innerHTML = '<div class="i">Frank Ferrer é um baterista de rock norte-americano. Em outubro de 2006, tornou-se membro oficial da banda Guns N Roses. Frank Ferrer é o chamado baterista de estúdio. Em sua carreira já tocou em diversos projetos como Love Spit Love (com Richard Fortus), Honky Toast (com Richard Fortus), The Psychedelic Furs (com Richard Fortus), Perry Farrell, The Beautiful, Pisser, Wyclef Jean, Robi Draco Rosa, Srah Clifford, entre outros.</div>';
    document.getElementById("img5").innerHTML = "<img class='img2' src = 'https://pbs.twimg.com/media/ExVuj7rXMAEmJoN.jpg' width = '210' height = '255'>";
}
else if(integrantes5 == "Dizzy Reed"){
    document.getElementById("integrantes5").innerHTML = '<div class="i"> Dizzy Reed é um multi-instrumentista norte-americano. Ele é o tecladista que atua na banda Guns N Roses desde 1990. Começou a sua carreira no show da banda Guns N Roses no Brasil no grande festival Rock in Rio de 1991.</div>';
    document.getElementById("img5").innerHTML = "<img src = 'https://mediamass.net/jdd/public/documents/celebrities/1354.jpg' width = '210' height = '255'>";
}
else if(integrantes5 == "Melissa Reese"){
    document.getElementById("integrantes5").innerHTML = '<div class="i">Melissa Reese é uma cantora e compositora norte-americana. Alguns de seus inúmeros trabalhos incluem projetos com o músico Bryan "Brain" Mantia. Atualmente, ela integra a banda de hard rock Guns N Roses.</div>';
    document.getElementById("img5").innerHTML = "<img  src = 'https://pbs.twimg.com/profile_images/1276331510765772801/habkQ40t_400x400.jpg' width = '210' height = '255'>";
}
}

function biografia5(){
    var integrantes6 = (document.getElementById("lista6").value);


    if(integrantes6 == "Selecione um integrante"){
        document.getElementById("integrantes6").innerHTML = ("")
        document.getElementById("img6").innerHTML = ""
    }
 else if(integrantes6 == "James Hetfield"){
    document.getElementById("integrantes6").innerHTML = '<div class="i">James Hetfield é um vocalista, guitarrista, produtor musical, empresário e customizador de carros norte-americano. É o co-fundador (juntamente com Lars Ulrich) e o principal compositor da banda de heavy metal Metallica. No ano de 2004, James foi considerado o melhor guitarrista base de heavy metal de todos os tempos pela revista Guitar World, e em 2010 considerado pela MusicRadar o 12º melhor vocalista de todos os tempos.</div>';
    document.getElementById("img6").innerHTML = "<img class='img3' style='width:'210'; height : '225';' src = 'https://m.media-amazon.com/images/M/MV5BNTU5NDc4MjE2MF5BMl5BanBnXkFtZTcwOTIwOTUzNw@@._V1_.jpg' width = '210' height = '255'> ";
}
else if(integrantes6 == "Lars Ulrich"){
    document.getElementById("integrantes6").innerHTML = '<div class="i">Lars Ulrich é um músico, ator, empresário, produtor musical, radialista e ex-tenista dinamarquês. Alcançou fama mundial por ser o baterista e o co-fundador (juntamente com James Hetfield) da banda norte-americana de heavy metal, Metallica. Ele é filho do ex-tenista profissional Torben Ulrich, neto do também ex-tenista Einer Ulrich, e foi afilhado do músico de jazz Dexter Gordon. Em 2004, a revista Kerrang! elegeu Lars a 9ª personalidade de maior influência no mundo do rock n roll. Ficou em 55° lugar na lista dos "66 melhores bateristas de hard rock e metal de todos os tempos" do site Loudwire.</div>';
    document.getElementById("img6").innerHTML = "<img class='img3' src = 'https://www.drummerworld.com/drummerworld2/larsulrich55021.jpg' width = '210' height = '225'>";
}
else if(integrantes6 == "Kirk Hammett"){
    document.getElementById("integrantes6").innerHTML = '<div class="i">Kirk Hammett é um guitarrista e compositor americano, conhecido principalmente por sua carreira de longa data na banda de heavy metal Metallica. Foi o fundador e um dos guitarristas da banda de thrash metal Exodus, uma das bandas pioneiras no gênero, até ser convidado para substituir Dave Mustaine no Metallica, em 1983. Em 2003, foi eleito pela revista Rolling Stone como o décimo primeiro melhor guitarrista de heavy metal do mundo. Em 2009, apareceu em quinto lugar no livro The 100 Greatest Metal Guitarists (Os 100 Maiores Guitarristas do Metal), de Joel McIver.</div>';
    document.getElementById("img6").innerHTML = "<img class='img3' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kirk_Hammett_live_in_London_15_September_2008.jpg/170px-Kirk_Hammett_live_in_London_15_September_2008.jpg' width = '210' height = '225'>";
}
else if(integrantes6 == "Robert Trujillo"){
    document.getElementById("integrantes6").innerHTML = '<div class="i">Robert Trujillo é um baixista e compositor estadunidense, conhecido mundialmente por sua atuação na banda de heavy metal Metallica. Anteriormente tocou com bandas como Suicidal Tendencies, Infectious Grooves, Mass Mental, Jerry Cantrell, Black Label Society e Ozzy Osbourne, até entrar para o Metallica, em 2003. A audição que o fez entrar para o Metallica, pode ser vista no DVD Some Kind of Monster. Os integrantes do Metallica mostraram-se impressionados com a sua apresentação e habilidade, e ele foi contratado antes da turnê do disco St. Anger ser lançada.</div>';
    document.getElementById("img6").innerHTML = "<img class='img3' src = 'https://br.web.img3.acsta.net/pictures/210/486/21048603_20131011090949129.jpg' width = '210' height = '255'>";
}
}

function biografia6(){
    var integrantes7 = (document.getElementById("lista7").value);


    if(integrantes7 == "Selecione um integrante"){
        document.getElementById("integrantes7").innerHTML = ("")
        document.getElementById("img7").innerHTML = ""
    }
 else if(integrantes7 == "Steve Harris"){
    document.getElementById("integrantes7").innerHTML = '<div class="i">Steve Harris é um músico e compositor inglês, conhecido por ser baixista, principal compositor, tecladista (nas gravações em studio), co-produtor e fundador da banda britânica de heavy metal Iron Maiden. Ele é o único integrante a permanecer na banda desde sua criação, e junto com o guitarrista Dave Murray são os únicos a tocar em todos os álbuns.</div>';
    document.getElementById("img7").innerHTML = "<img class='img3' style='width:'210'; height : '225';' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Iron_Maiden_%40_Bluesfest_July_6_2010_%282%29.jpg/200px-Iron_Maiden_%40_Bluesfest_July_6_2010_%282%29.jpg' width = '210' height = '255'> ";
}
else if(integrantes7 == "Dave Murray"){
    document.getElementById("integrantes7").innerHTML = '<div class="i">Dave Murray é um músico britânico, conhecido por ser o guitarrista da banda britânica de heavy metal Iron Maiden. Junto com o baixista e líder da banda Steve Harris, Murray é o único integrante a tocar em todos os álbuns do grupo. Dave está no Iron Maiden desde de 1976, saiu por um breve período em 1977, porém na primavera do ano seguinte Murray foi convidado a se juntar novamente com o Iron Maiden, no qual ele permaneceu até hoje. É amplamente considerado um dos melhores e mais influentes guitarristas da história do heavy metal.</div>';
    document.getElementById("img7").innerHTML = "<img class='img3' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Davemurray.jpg/640px-Davemurray.jpg' width = '210' height = '225'>";
}
else if(integrantes7 == "Adrian Smith"){
    document.getElementById("integrantes7").innerHTML = '<div class="i">Adrian Smith é um guitarrista inglês conhecido por tocar na banda de heavy metal Iron Maiden, para quem ele escreve canções e executa backing vocals ao vivo em algumas faixas. É considerado, junto de Dave Murray, um dos melhores e mais influentes guitarristas de todos os tempos. Integrou-se à banda logo após a saída de Dennis Straton, por indicação de seu amigo Dave Murray. Adrian manteve-se no Maiden durante 9 anos (1981-1990), saindo no fim da década para tentar outros projetos, e voltou junto a Bruce Dickinson em 1999, depois de gravar dois álbuns solo do vocalista.</div>';
    document.getElementById("img7").innerHTML = "<img class='img3' src = 'https://www.goldminemag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMTczNDM5OTAwNDI3NjI0/adrian_smith.jpg' width = '210' height = '225'>";
}
else if(integrantes7 == "Bruce Dickinson"){
    document.getElementById("integrantes7").innerHTML = '<div class="i">Bruce Dickinson é um músico inglês mais conhecido por seu trabalho como vocalista da banda britânica de heavy metal Iron Maiden desde 1981. Ele possui um estilo vocal operístico e uma presença de palco enérgica e teatral. Bruce começou sua carreira musical em bandas que tocavam em pequenos bares durante os anos 70, enquanto estava na escola em Sheffield e na faculdade, em Londres.</div>';
    document.getElementById("img7").innerHTML = "<img class='img2' src = 'https://roadie-metal.com/wp-content/uploads/2021/12/attachment-bruce_dickinson_iron_maiden_2018.jpg' width = '210' height = '255'>";
}
else if(integrantes7 == "Nicko McBrain"){
    document.getElementById("integrantes7").innerHTML = '<div class="i">Nicko McBrain é um músico inglês de heavy metal. É conhecido por ser o baterista da banda Iron Maiden, onde ingressou em dezembro de 1982 e permanece desde então gravando todos os discos. Anteriormente foi baterista de bandas como Trust, Streetwalkers e Pat Travers.</div>';
    document.getElementById("img7").innerHTML = "<img class='img1' src = 'https://lastfm.freetls.fastly.net/i/u/770x0/78f1baa4d95b41d5aa234a5c943b341a.jpg' width = '210' height = '255'>";
}
else if(integrantes7 == "Janick Gers"){
    document.getElementById("integrantes7").innerHTML = '<div class="i">Janick Gers é um guitarrista inglês, conhecido por ser membro do grupo de heavy metal britânico Iron Maiden. O guitarrista iniciou sua carreira na banda White Spirit, gravando o único disco da mesma em 1980. Logo após, gravou os discos Double Trouble [1981] e Magic [1982] com o cantor Ian Gillan (Deep Purple e ex-Black Sabbath).</div>';
    document.getElementById("img7").innerHTML = "<img class='img3' src = 'https://roadie-metal.com/wp-content/uploads/2019/01/jg.jpg' width = '210' height = '255'>";
}
}
