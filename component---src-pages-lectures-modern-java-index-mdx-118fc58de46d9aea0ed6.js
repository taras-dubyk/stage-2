(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{445:function(e,a,t){"use strict";t.r(a),t.d(a,"metadata",function(){return g}),t.d(a,"_frontmatter",function(){return v}),t.d(a,"default",function(){return f});t(3);var b=t(2),c=t.n(b),n=(t(1),t(0)),l=t(5),s=t(8),i=t(6),r=t(205),o=t(206),m=t(207),j=t(208),O=t(209),p=t(210),d=t(211),u=t(212),N=t(14),g=(t(332),{orderId:7,author:"Кирилл Лесогорский",title:"Modern Java",description:"В этой лекции рассмотрим базовую информацию, экосистему и фичи <strong>Java</strong>. После этого Кирилл расскажет про структуру gradle проекта и создаст небольшое веб-приложение с использованием веб-сервера Undertow",keywords:["Java","JVM","Modern Java","Undertow"],duration:"1 час 25 мин.",publishedAt:"2019-05-19T15:00:00"}),v={},h={metadata:g,_frontmatter:v},y=l.f;function f(e){var a=e.components,t=c()(e,["components"]);return Object(n.b)(y,Object.assign({},h,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("div",null,Object(n.b)("h1",null,Object(n.b)("strong",null,"Modern java"))),Object(n.b)(l.o,{duration:"1 час 24 мин.",mdxType:"VideoWrapper"},Object(n.b)("iframe",{src:"https://www.youtube.com/watch?v=U5kfvTeg2sU",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),Object(n.b)("div",null,Object(n.b)("div",{className:"author"},Object(n.b)("div",{className:"avatar-wrapper"},Object(n.b)("object",{className:"avatar-object",data:N.b,role:"img","aria-label":"My profile picture"})),Object(n.b)("div",{className:"profile"},Object(n.b)("h3",{className:"name"},"Лесогорский Кирилл"),Object(n.b)("ul",{className:"contacts"},Object(n.b)("li",null,Object(n.b)("a",{href:"https://www.facebook.com/nempavel",rel:"author",className:"facebook"},Object(n.b)(s.a,{icon:i.m,className:"icon",mdxType:"FontAwesomeIcon"}),Object(n.b)("span",null,"@klesogor"))),Object(n.b)("li",null,Object(n.b)("a",{href:"https://github.com/klesogor",rel:"author",className:"github"},Object(n.b)(s.a,{icon:i.c,className:"icon",mdxType:"FontAwesomeIcon"}),Object(n.b)("span",null,"klesogor")))),Object(n.b)("p",{className:"about"},"Кирилл работает FullStack разработчиком в ",Object(n.b)("a",{href:"https://binary-studio.com"},Object(n.b)("strong",null,"Binary Studio"))," после того как закончил Академию по PHP в 2018 году. В работе использует JavaScript и TypeScript, но считает что язык лишь инструмент в руках программиста и в свободное время пробует новые языки и парадигмы, такие как Scala, Haskell, F#, Go, Rust и ",Object(n.b)("i",null,"Java"),". Любит функциональное программирование и компьютерные игры."))),Object(n.b)("div",{className:"bubble",style:{margin:"-0.5em 1em 1em"}},Object(n.b)("strong",null,"Привет, академисты! 👋"),Object(n.b)("br",null),"Встречайте первую профильную лекцию по Java «Modern Java»! Рассмотрим что нового в Java 8-11 и что будущее готовит. Но вначале дисклеймер:",Object(n.b)("ol",{className:"compact inverted"},Object(n.b)("li",null,"скорее всего вы всё это знаете, и это хорошо😊;"),Object(n.b)("li",null,"лекция обещает быть информативной ",Object(n.b)("em",null,"(за употребление слов-паразитов и терминов простите)"),";"),Object(n.b)("li",null,"практическая часть в лекции довольно большая, если вы уверены в своих силах, то можете её пропустить."),Object(n.b)("li",null,"Как видите, я весьма формальный зануда, но оно само получается 😢")),"И не забудьте взять с собой нужный инструментарий: ",Object(n.b)("a",{href:"https://git-scm.com/"},Object(n.b)("strong",null,"Git")),", ",Object(n.b)("a",{href:"https://www.jetbrains.com/ru-ru/idea/"},Object(n.b)("strong",null,"Intellij IDEA или другая IDE на выбор")),", ",Object(n.b)("a",{href:"https://www.oracle.com/java/technologies/javase-downloads.html"},Object(n.b)("strong",null,"JDK, куда же без неё")),". Поехали?")),Object(n.b)("div",{id:"table-of-contents",className:"table-of-contents",style:{marginTop:"1em"}},Object(n.b)(l.n,{timeline:[{linkTo:"#welcome-to-java",title:"Welcome to Java world"},{linkTo:"#whats-new-in-java",title:"What's new in Java 8-11"},{linkTo:"#java-ecosystem",title:"Java ecosystem"},{linkTo:"#typical-java-development-environment",title:"Typical Java development environment"}],mdxType:"TimelineOfContents"})),Object(n.b)(l.g,{id:"welcome-to-java",number:"1",name:"Welcome to Java world",difficulty:"Beginner",objectives:"Что такое Java и как её варить",mdxType:"Level"}),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Java")," это язык программирования общего назначения, основанный на классах, объектно-ориентированный и разработанный так, чтобы иметь как можно меньше зависимостей реализации. Он разработан с учётом парадигмы ",Object(n.b)("strong",{parentName:"p"},"W"),"rite ",Object(n.b)("strong",{parentName:"p"},"O"),"nce - ",Object(n.b)("strong",{parentName:"p"},"R"),"un ",Object(n.b)("strong",{parentName:"p"},"A"),"nywhere(WORA), что означает, что скомпилированный код Java может работать на всех платформах, поддерживающих Java, без необходимости перекомпиляции. Java-приложения обычно компилируются в байт-код, который может работать на любой виртуальной машине Java. (JVM) независимо от архитектуры компьютера."),Object(n.b)("div",{className:"bubble small subtle"},"Ява? Это когда вместо «Кобол наносит ответный удар» пишут «удар.нанестиОтвет (новый Кобол ())» — вот это Ява."),Object(n.b)("hr",{className:"small"}),Object(n.b)("ul",null,Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-1-1"}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-1-1"},Object(n.b)("strong",null,"Java - высокоуровневый язык")),Object(n.b)("div",{className:"details-body"},"Помимо того, что Java больше похожа на человеческий язык, чем на машинные коды, Java также берет на себя управление памятью, что значительно упрощает разработку и уменьшает кол-во багов.",Object(n.b)("div",{className:"gatsby-highlight","data-language":"java"},Object(n.b)("pre",Object.assign({parentName:"div"},{className:"language-java"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// C/C++ language allocate memory"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"int")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"*"),"testArray ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"malloc"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"5")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"*")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"sizeof"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"int"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"free"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"testArray",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// allocate memory"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"ArrayList")," list ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"new")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"ArrayList"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\nlist",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token function"}),"add"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token string"}),"'Hi!'"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// cleanup memory by garbage collector")))),Object(n.b)("p",null,"Память управляется автоматически."))),Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-1-2"}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-1-2"},Object(n.b)("strong",null,"Java - объектно ориентированный язык")),Object(n.b)("div",{className:"details-body"},"в Java есть:",Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"классы"),Object(n.b)("li",{parentName:"ul"},"интерфейсы"),Object(n.b)("li",{parentName:"ul"},"абстрактные классы"),Object(n.b)("li",{parentName:"ul"},"пакеты"),Object(n.b)("li",{parentName:"ul"},"наследование ")),Object(n.b)(r.default,{mdxType:"JavaOOSnippet"}))),Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-1-3"}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-1-3"},Object(n.b)("strong",null,"Java - в какой-то степени функциональный язык")),Object(n.b)("div",{className:"details-body"},Object(n.b)("ul",null,Object(n.b)("li",null," Функции высшего порядка с помощью функциональных интерфейсов "),Object(n.b)("li",null," Несколько абстракций из мира функционального программирования, таких как Optional "))))),Object(n.b)(l.g,{id:"whats-new-in-java",number:"2",name:"What's new in Java 8-11",difficulty:"Intermediate",objectives:"В Java 8+ было добавлено много новых фич. Они очень сильно повлияли на то, как мы пишем наши программы. Их знание и применение на практике - важно для современного Java разработчика",mdxType:"Level"}),Object(n.b)("ul",null,Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-2-1",hidden:!0}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-2-1"},"Functional Interfaces"),Object(n.b)("div",{className:"details-body"},Object(n.b)(o.default,{mdxType:"JavaFISnippet"}))),Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-2-2",hidden:!0}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-2-2"},"Stream API"),Object(n.b)("div",{className:"details-body"},Object(n.b)(m.default,{mdxType:"JavaStreamSnippet"}),Object(n.b)("p",null,"Часто используемые операции стримов:  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Intermediate",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"sorted"),Object(n.b)("li",{parentName:"ul"},"filter"),Object(n.b)("li",{parentName:"ul"},"map"))),Object(n.b)("li",{parentName:"ul"},"Terminal",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"collect"),Object(n.b)("li",{parentName:"ul"},"reduce"),Object(n.b)("li",{parentName:"ul"},"forEach"),Object(n.b)("li",{parentName:"ul"},"findAny"),Object(n.b)("li",{parentName:"ul"},"findFirst")))))),Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-2-3",hidden:!0}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-2-3"},"Optional"),Object(n.b)("div",{className:"details-body"},Object(n.b)("i",null,"Ah, almost monads"),Object(n.b)(j.default,{mdxType:"JavaOptionalSnippet"}))),Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-2-4",hidden:!0}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-2-4"},"Static, default and private interface methods"),Object(n.b)("div",{className:"details-body"},Object(n.b)(O.default,{mdxType:"JavaPSDIMSnippet"}))),Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-2-5",hidden:!0}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-2-5"},"Module system"),Object(n.b)("div",{className:"details-body"},Object(n.b)(p.default,{mdxType:"JavaModuleSnippet"}))),Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-2-5",hidden:!0}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-2-5"},"Try-catch with resources"),Object(n.b)("div",{className:"details-body"},Object(n.b)(d.default,{mdxType:"JavaTrycatchSnippet"}))),Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-2-5",hidden:!0}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-2-5"},"JSHell CLI REPL"),Object(n.b)("div",{className:"details-body"},"Введите в терминале `jshell` и эксперементируйте")),Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-2-5",hidden:!0}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-2-5"},"HTTP Client"),Object(n.b)("div",{className:"details-body"},Object(n.b)(u.default,{mdxType:"JavaHTTPClientSnippet"}))),Object(n.b)("li",{className:"details"},Object(n.b)("input",{type:"checkbox",id:"accordion-2-5",hidden:!0}),Object(n.b)("label",{className:"summary",htmlFor:"accordion-2-5"},"Other changes"),Object(n.b)("div",{className:"details-body"},"- GC interface - Nest Based Access Control - Immutable collections - String methods - Run java files from command line with `java` - No-Op GC - CompletableFuture - Variable handles"))),Object(n.b)(l.g,{id:"java-ecosystem",number:"3",name:"Java ecosystem",difficulty:"Hard",objectives:"Изучить экосистему и управление пакетами",mdxType:"Level"}),Object(n.b)("h3",null,"Виды кофе, или что можно создавать на Java"),Object(n.b)("div",{className:"columns"},Object(n.b)("div",{className:"column col-4"},Object(n.b)("div",{className:"panel"},Object(n.b)("div",{className:"panel-header"},Object(n.b)("a",{href:"https://spring.io/"},Object(n.b)("strong",null,"Web приложения"))),Object(n.b)("div",{className:"panel-body"},"API, MVC, Map-Reduce и многое другое. Огромный выбор библиотек и фреймворков"))),Object(n.b)("div",{className:"column col-4"},Object(n.b)("div",{className:"panel"},Object(n.b)("div",{className:"panel-header"},Object(n.b)("a",{href:"#"},Object(n.b)("strong",null,"Кросс-платформеный Desktop"))),Object(n.b)("div",{className:"panel-body"},"Кросс-платформеный дескотоп не очень востребован, однако для приложений, которые требуют доступа к операционной системе или очень требовательны к ресурсам, таких как IDE, Java - отличный выбор"))),Object(n.b)("div",{className:"column col-4"},Object(n.b)("div",{className:"panel"},Object(n.b)("div",{className:"panel-header"},Object(n.b)("a",{href:"#"},Object(n.b)("strong",null,"Нативная Android разработчика"))),Object(n.b)("div",{className:"panel-body"},"Нативная разработка приложений под аднроид. В последнее время вытесняется Kotlin.")))),Object(n.b)("h3",null,"Стиль написания кода"),Object(n.b)("p",null,"Стиль написания кода - это набор принципов для конкретного языка программирования, которые рекомендуют стиль и методы программирования для каждого аспекта программы, написанной на этом языке. Эти соглашения обычно охватывают организацию файлов, отступы, комментарии, объявления, операторы, пробелы, соглашения об именах, методы программирования, принципы программирования, практические правила программирования, передовые методы архитектуры и т. Д. Это руководящие указания по качеству структуры программного обеспечения. Программистам настоятельно рекомендуется следовать этим рекомендациям, чтобы улучшить удобочитаемость исходного кода и облегчить обслуживание программного обеспечения."),Object(n.b)("p",null,"В Java нет единого стиля написания кода, вместо этого каждый проект выбирает стиль под свои нужды. Однако существует 3 популярных стиля:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Google style guide"),Object(n.b)("li",{parentName:"ul"},"Oracle code conventions"),Object(n.b)("li",{parentName:"ul"},"Spring code style")),Object(n.b)("h3",null,"Фреймворки и библиотеки"),Object(n.b)("p",null,Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"Фре́ймворк — программная платформа, определяющая структуру программной системы; программное обеспечение, облегчающее разработку и объединение разных компонентов большого программного проекта.")," - Wikipedia"),Object(n.b)("img",{src:"https://pbs.twimg.com/media/DvIFxwfXcAAEyWL.jpg"}),Object(n.b)("p",null,"Фреймворки предоставляют необходимую инфраструктуру для проекта, тем самым уменьшая колличество боилерплейта и увеличивая скорость разработки.\nОт библиотеки фреймворк отличает использование принципа инверсии управления - прикладной код написанный программистами вызывается из кода фреймворка, что позволяет абстрагироваться от многих низкоуровневых операций."),Object(n.b)("p",null,"Примеры Java фреймворков и библиотек:  "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Web",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Spring"),Object(n.b)("li",{parentName:"ul"},"Play"),Object(n.b)("li",{parentName:"ul"},"Vert.x"))),Object(n.b)("li",{parentName:"ul"},"ORMs",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Hibernate"),Object(n.b)("li",{parentName:"ul"},"EclipseLink"),Object(n.b)("li",{parentName:"ul"},"OpenJPA"))),Object(n.b)("li",{parentName:"ul"},"Misc",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"RX Java"),Object(n.b)("li",{parentName:"ul"},"Apache Hadoop"),Object(n.b)("li",{parentName:"ul"},"Apache Lucene ")))),Object(n.b)("h3",null,"Статические анализаторы(aka линтеры)"),Object(n.b)("p",null,"Статические анализаторы - инструмент, который следит за корректностью программы не запуская её. Инструменты для статического анализа могут находить распространенные ошибки и антипаттерны, которые компилятор пропустил. Также они могут следить за соответствием стилю написания кода, тем самым упрощая жизнь программистам."),Object(n.b)("p",null,"В ",Object(n.b)("strong",{parentName:"p"},"Java")," для статического анализа используют такие инструменты:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"PMD"),Object(n.b)("li",{parentName:"ul"},"Cobertura"),Object(n.b)("li",{parentName:"ul"},"FindBugs"),Object(n.b)("li",{parentName:"ul"},"Jacoco ")),Object(n.b)("h3",null,"Профайлеры"),Object(n.b)("p",null,"Ghjafqkths - это инструмент, который отслеживает конструкции и операции Java-байткода на уровне JVM. Эти конструкции и операции включают создание объектов, итеративные выполнения (включая рекурсивные вызовы), выполнение методов, выполнение потоков и сборку мусора.\nПримеры профилировщиков:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"JProfiler"),Object(n.b)("li",{parentName:"ul"},"YourKit"),Object(n.b)("li",{parentName:"ul"},"VisualVM")),Object(n.b)("h3",null,"JVM Languages"),Object(n.b)("p",null,"Java - не единственный JVM язык. Существуют и другие языки, которые можно компилировать в Java-байткод. Такие языки зачастую совметсимы с существующим Java-кодом."),Object(n.b)("p",null,"Примеры таких языков: "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Scala"),Object(n.b)("li",{parentName:"ul"},"Kotlin"),Object(n.b)("li",{parentName:"ul"},"Clojure"),Object(n.b)("li",{parentName:"ul"},"Groovy")),Object(n.b)("h3",null,"Package management"),Object(n.b)("p",null,'Пакетные менеджеры позволяют переиспользовать существующий код и библиотеки с лёгкостью. "Внешний" по отношению к проекту код называется ',Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"зависимостью"),".\nВ мире Java активно используют два пактеных менеджера: ",Object(n.b)("strong",{parentName:"p"},"Gradle")," и ",Object(n.b)("strong",{parentName:"p"},"Maven")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Gradle"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Maven"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gradle Build time is short and fast."),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"Maven performance is slow as compared to Gradle.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Gradle Scripts are shorter and cleaner."),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"Maven scripts are a bit lengthy as compared to Gradle.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"DSL based"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"XML-based")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"Supports incremental compilation"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"Does not supports incremental compilation")))),Object(n.b)("h4",null,"Примеры gradle комманд"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{align:null}),"Комманда"),Object(n.b)("th",Object.assign({parentName:"tr"},{align:"center"}),"Описание"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"gradle build"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"сборка проекта, запуск ",Object(n.b)("code",Object.assign({parentName:"td"},{className:"language-text"}),"assemble")," и ",Object(n.b)("code",Object.assign({parentName:"td"},{className:"language-text"}),"check")," задач")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"gradle clean build"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"сборка проекта с нуля, без использования кеша")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{align:null}),"gradle test"),Object(n.b)("td",Object.assign({parentName:"tr"},{align:"center"}),"запуск тестов")))),Object(n.b)(l.g,{id:"typical-java-development-environment",number:"4",name:"Typical java development envicronment",difficulty:"Easy",objectives:"Узнать, что необходимо для разработки на Java помимо JDK",mdxType:"Level"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"IDE - Intellij IDEA / Eclipse / NetBeansIDE / VS Code / Text Editor"),Object(n.b)("li",{parentName:"ul"},"Operating System - Linux / Windows / Mac"),Object(n.b)("li",{parentName:"ul"},"VM/Container - Vagrant / Docker"),Object(n.b)("li",{parentName:"ul"},"VCS - Git / SVN / Mercurial")),Object(n.b)("h2",null,"Useful links"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/Vedenin/useful-java-links"}),"Useful java links repository")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://www.baeldung.com/"}),"Useful java articles and guides"),"  "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/akullpp/awesome-java"}),"List of popular java libraries"))),Object(n.b)("h2",null,"Additional materials"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship-ebook/dp/B001GSTOAM"}),"Clean code")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8"}),"GOF Design Patterns")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://www.amazon.com/Structure-Interpretation-Computer-Programs-Engineering/dp/0262510871"}),"SICP")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://www.amazon.de/dp/0134685997?tag=hackr03c-21"}),"Effective Java"))),Object(n.b)(l.m,{mdxType:"ThatsAllFolks"}),Object(n.b)("div",{className:"bubble"},"А на сегодня всё! Свои вопросы и отзывы оставляйте на сайте ",Object(n.b)("a",{href:"https://academy.binary-studio.com/"},Object(n.b)("strong",null,"Binary Studio Academy")),". Желаю вам успехов, не теряйте мотивации и учитесь с удовольствием. Спасибо за внимание!"))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-modern-java-index-mdx-118fc58de46d9aea0ed6.js.map