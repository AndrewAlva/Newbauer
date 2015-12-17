
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title> Newbauer Chemicals | Productos </title>
        <link rel="icon" 
        type="image/png" 
        href="favicon.png">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>

    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div id="fullwrapper">
            <div id="wrapper" class="productWrapper">
            <!-- MENU MOBILE -->
                <div id="mobNav">
                    <div id="logoMob">
                        <a href="index.html">
                            <img src="img/newbauer-logo-min.png" alt="Newbauer Chemicals">
                        </a>
                    </div>
                    <div id="burguerIcon">
                        <div class="burguerLines"></div>
                        <div class="burguerLines"></div>
                        <div class="burguerLines"></div>
                    </div>

                    <ul>
                        <li class="mobNavList hidden"><a href="index.html">Inicio</a></li>
                        <li class="mobNavList hidden"><a href="nosotros.html">Nosotros</a></li>
                        <li class="mobNavList hidden"><a href="beneficios.html">Beneficios</a></li>
                        <li class="mobNavList hidden"><a href="productos.php">Productos</a></li>
                        <li class="mobNavList hidden"><a href="distribuidores.html">Distribuidores</a></li>
                        <li class="mobNavList hidden"><a href="noticias.html">Noticias</a></li>
                        <li class="mobNavList hidden"><a href="contacto.html">Contacto</a></li>
                    </ul>

                    <img class="slogan" src="img/newbauer-slogan-min.png" alt="Las plantas no comen, beben.">
                </div>
            <!-- END MENU MOBILE -->

                <!-- INICIO HEADER -->
                <div class="header-menu">
                    <ul>
                        <li class="mnbtn"><a href="nosotros.html">nosotros</a></li>
                        <li class="mnbtn"><a href="beneficios.html">beneficios</a></li>
                        <li class="pressed-menu"><a href="#">productos</a></li>
                        <li class="header-logo"><a href="index.html"><img src="img/newbauer-logo-2.png"></a></li>
                        <li class="mnbtn"><a href="distribuidores.html">distribuidores</a></li>
                        <li class="mnbtn"><a href="noticias.html">noticias</a></li>
                        <li class="mnbtn"><a href="contacto.html">contacto</a></li>
                    </ul>
                    <img class="slogan" src="img/newbauer-slogan-min.png" alt="Las plantas no comen, beben.">
                    <img class="dotline" src="img/header-line.png">
                </div>
                <!-- FIN HEADER -->



                <!-- INICIO BODY -->
                <div class="container">
                    <div class="products-wrapper">
                        <?php
                            $p=$_GET['page'];

                            $page="products/".$p.".php";

                            if (file_exists($page))
                                include($page);
                            elseif ($p=="")
                                include("products/calcium.php");
                            else
                                include("products/not.php");
                        ?>

                    </div>



                    <div id="productsBurguer" class="justMob">
                        productos
                    </div>
                    
                    <div id="bidonesNavWrapper">
                        <div id="newNavCalcium" class="productsNavBars showProductsBars">
                            <div id="iconCalcium" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=calcium">
                                    <h3>New Calcium</h3>
                                </a>
                            </div>
                        </div>
                        <div id="newNavZinc" class="productsNavBars showProductsBars">
                            <div id="iconZinc" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=zinc">
                                    <h3>New Zinc</h3>
                                </a>
                            </div>
                        </div>
                        <div id="newNav8-24-0" class="productsNavBars showProductsBars">
                            <div id="icon8-24-0" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=8-24-0">
                                    <h3>New 8-24-0</h3>
                                </a>
                            </div>
                        </div>
                        <div id="newNavMKP" class="productsNavBars showProductsBars">
                            <div id="iconMKP" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=mkp">
                                    <h3>New MKP</h3>
                                </a>
                            </div>
                        </div>
                        <div id="newNavUan32" class="productsNavBars showProductsBars">
                            <div id="iconUan32" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=uan32">
                                    <h3>New UAN32</h3>
                                </a>
                            </div>
                        </div>
                        <div id="newNavNS40" class="productsNavBars showProductsBars">
                            <div id="iconNS40" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=ns40">
                                    <h3>New NS40</h3>
                                </a>
                            </div>
                        </div>
                        <div id="newNavMagnesium" class="productsNavBars showProductsBars">
                            <div id="iconMagnesium" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=magnesium">
                                    <h3>New Magnesium</h3>
                                </a>
                            </div>
                        </div>
                        <div id="newNavNitratos" class="productsNavBars showProductsBars">
                            <div id="iconNitratos" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=nitratos">
                                    <h3>New Nitratos</h3>
                                </a>
                            </div>
                        </div>
                        <div id="newNavAmmonium" class="productsNavBars showProductsBars">
                            <div id="iconAmmonium" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=ammonium">
                                    <h3>New Ammonium</h3>
                                </a>
                            </div>
                        </div>
                        <div id="newNavPotasium" class="productsNavBars showProductsBars">
                            <div id="iconPotasium" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=potasium">
                                    <h3>New Potasium</h3>
                                </a>
                            </div>
                        </div>

                        <div id="newNavBrix" class="productsNavBars showProductsBars">
                            <div id="iconBrix" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=brix">
                                    <h3>New Brix</h3>
                                </a>
                            </div>
                        </div>

                        <div id="newNavBlueba" class="productsNavBars showProductsBars">
                            <div id="iconBlueba" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=blueba">
                                    <h3>New BlueBerryAmmonia</h3>
                                </a>
                            </div>
                        </div>

                        <div id="newNavCalciumBoro" class="productsNavBars showProductsBars">
                            <div id="iconCalciumBoro" class="productBlock"></div>
                            <div class="productBar">
                                <a href="productos.php?page=calciumb">
                                    <h3>New CalciumBoro</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- FIN BODY -->



                <!-- INICIO FOOTER -->
                <footer >
                    <div class="downwrapper outindex">
                        
                        <div class="downboxes">
                            <div id="subnoticia" class="subtitles shiftheight suboutindex noticias">
                                <img src="img/sphere.png">
                                noticias<span class="onlyMob">, productos y promociones</span>
                            </div>
                            <!-- noticia 1 -->
                            <h5> / newbauer / </h5>
                            <div class="third-box-text gotonoticias">  
                                NEWBAUER CHEMICAL INDUSTRIES, presentes en La Expo Agroalimentaria Irapuato 2015. <br>
                                Visítanos en el Stand No.938 Nave A.

                            </div>
                            <img class="logoIrapuato gotonoticias" src="img/logo-expo-irapuato.png" alt="Logo Expo">
                            <img src="img/more-corner.png" class="corner">
                            <img class="dotline" src="img/div-line.png">
                            
                            <!-- noticia 2 -->
                            <!-- <h5> / newbauer / </h5>
                            <div class="third-box-text gotonoticias"> 
                                Te invitamos a conocer nuestra nueva línea de productos en el Congreso del Aguacate Jalisco 2015. Del 26 al 28 de Agosto, en Cd. Guzmán Jalisco.
                             </div>
                            <img src="img/more-corner.png" class="corner">
                            <img class="dotline" src="img/div-line.png"> -->

                            <!-- noticia 3 -->
                            <!-- <h5> / newbauer / </h5>
                            <div class="third-box-text gotonoticias"> 
                                Somos expositores en el Congreso del Maíz Jalisco 2015.
                            </div>
                            <img src="img/more-corner.png" class="corner"> -->
                            
                        </div>

                        <div class="downboxes destacados">
                            <div id="subproducto" class="subtitles shiftheight suboutindex noticias">
                                <img src="img/sphere.png">
                                productos destacados
                            </div>
                            <!-- producto 1 -->
                            <div class="mid-prod gotoBrix">
                                <h5> / newbauer / </h5>
                                <div class="mid-box-text"> 
                                    NEWBRIX <br>
                                    Polihidrocarboxilato de potasio líquido de alta pureza y 100% asimilable. <br>
                                    + Azúcares. <br>
                                    0 Nitrógeno. <br>
                                    100% Asimilable.

                                </div>
                                <img src="img/productos/bidon_brix.png" class="tanque" alt="NEWBRIX">
                                <img src="img/more-corner.png" class="corner">
                                <img class="dotline" src="img/div-line.png">
                            </div>
                            
                            <!-- producto 2 -->
                            <div class="mid-prod gotoZinc">
                                <h5> / newbauer / </h5>
                                <div class="mid-box-text">
                                    NEWZINC<br>
                                    Nitrato de Zinc de alta pureza. <br>
                                    + Concentración <br>
                                    + Eficiencia <br>
                                    - Menor Costo <br>
                                    Forma Química Ideal

                                </div>
                                <img src="img/productos/bidon_zinc.png" class="tanque2">
                                <img src="img/more-corner.png" class="corner2">
                            </div>   
                            

                            
                        </div>

                        <div class="downboxes promos">
                            <div id="subpromocion" class="subtitles shiftheight suboutindex noticias">
                                <img src="img/sphere.png">
                                promociones
                            </div>
                            <!-- PROMOCIÓN -->
                            <h5> / NEWBAUER / </h5>
                            <p class="gotoNS40"> 
                                NEWNS40 <br><br>
                                • Nitrógeno Biogeoquímico <br>
                                • Azufre Elemental <br>
                                • Sin pérdidas
                                
                            </p>
                            <img class="gotoNS40 tanque3" src="img/productos/bidon_ns40.png">
                            <img class="corner3 crystal" src="img/more-corner.png">
                            
                        </div>
                    </div>
                    <div class="barrafinal">
                        newbauer / Carretera Sahuayo-Colima Km.102.86, Zona Industrial Crucero de Villa, Zapotiltic, Jalisco. C.P.49600 / tel. 33 33 33 33
 
                    </div>
                    
                    <div class="footprint">
                        <div class="iconsBox">
                            <a target="_blank" href="https://www.facebook.com/newbauerchemicals/">
                                <img src="img/icons/facebook.png" alt="RRSS">
                            </a>
                        </div>
                        <div class="iconsBox">
                            <a target="_blank" href="https://www.instagram.com/newbauerchemicals/">
                                <img src="img/icons/instagram.png" alt="RRSS">
                            </a>
                        </div>
                        <div class="iconsBox">
                            <a target="_blank" href="https://twitter.com/Newbauer_Mexico">
                                <img src="img/icons/twitter.png" alt="RRSS">
                            </a>
                        </div>
                        <div class="iconsBox">
                            <a target="_blank" href="mailto:ventas@newbauerchemicals.com">
                                <img src="img/icons/mail.png" alt="RRSS">
                            </a>
                        </div>
                    </div> 
                </footer>
                <!-- FIN FOOTER -->



            </div>
        </div>






        <!-- Add your site or application content here -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>