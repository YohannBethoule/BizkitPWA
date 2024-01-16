<script setup lang="ts">

</script>

<template>
    <router-link to="/" class="back-btn">< Retour</router-link>
    <div class="rules">
        <h1>Le Bizkit Dungeon</h1>
        <section>
            <h2>Les règles</h2>
            <p>Affrontez dans ce jeu les Seigneurs Ethyliques du Bizkit ! </p>
            <p>Chaque Seigneur possède un nombre de points de Vie (V) inscrit en haut à droite de sa carte,
                et un nombre de oints d'Attaque (A) inscrit en bas à gauche de sa carte. </p>
            <p>Sauf contre-indication, tous les Seigneurs sont régis par les mêmes règles : </p>
            <ul>
                <li>Un seigneur perd 1 PV à chaque bizkit</li>
                <li>Un seigneur perd autant de PV que de gorgées distribuées à chaque double</li>
                <li>Si le seigneur doit boire à cause d'un 9 ou d'un 11, il perd un PV</li>
                <li>A chaque tour du Seigneur, celui-ci attaque. Tous les joueurs doivent boire un nombre de gorgées
                    équivalent à son attaque
                </li>
            </ul>
        </section>
        <section>
            <h2>Modes de jeu</h2>
            <ul class="game-modes">
                <li>Donjon : Affrontez 3 Seigeurs au hasard les uns après les autres.</li>
                <li>Aventure : Affrontez des boss au hasard jusqu'à plus soif.</li>
                <li>Panthéon : Entrez dans la légende (ou dans le coma) en défiant le Panthéon des Seigneurs. Terminez en
                    vainquant Shenbizkit, le dragon aux 7 dés de cristal.</li>
            </ul>

            <p>+ bonus Mort Subite : Les dégats subis par les Seigneurs sont multipliés par 3, mais l'attaque est égale
                à 1
                cul sec.</p>
        </section>

        <h1>Le Bizkit</h1>
        <h2 class="subtitle">Plus qu’un sport, plus qu’un art, plus qu’une religion… Un Jeu</h2>

        <section>
            <h2>Matériel nécessaire</h2>
            <ul class="equipment">
                <li>2 dés à 6 faces. Il est fortement déconseillé de jouer avec des dés virtuels, sur une application
                    smartphone par exemple. Préférez utiliser de vrais dés, si possible deux dés différenciables.
                    Des parties d’air-bizkit (bizkit sans dés) ont déjà été recensés à travers l’histoire, mais
                    celles-ci
                    demandent une connaissance des règles et une dose de fair-play qui seuls les joueurs les plus
                    expérimentés peuvent posséder.
                </li>
                <li>2 joueurs minimum. Plus le nombre de joueurs est restreint, plus le jeu est violent. Plus le nombre
                    de
                    joueurs est élevé, plus il est difficile de suivre la partie pour chacun. Il est généralement peine
                    perdue de tenter un bizkit avec plus de 10 joueurs.
                    Préférez des amis qui soient bons joueurs et qui aient l’alcool joyeux, au risque de mettre un terme
                    à
                    une belle amitié.
                </li>
                <li>Une surface de jeu plane et solide sur laquelle lancer les dés, si possible délimitée et surélevée
                    par
                    rapport au sol.
                </li>
                <li>
                    Une quantité importante d’alcool buvable en grands nombres de gorgées. Evitez l’alcool fort non
                    dilué,
                    même si vous pensez être capable de boire votre bouteille en moins d’une heure.
                </li>
                <li>De la confiance en soi et en son foie.</li>
            </ul>
        </section>

        <section class="">
            <h2>Déroulement d’une partie</h2>
            <p>Un joueur, habituellement le premier à avoir les dés en main, lance les dés. Selon la combinaison
                effectuée,
                une action va survenir, ou pas, et des joueurs vont boire, ou pas. Si le lanceur fait boire quelqu’un,
                il
                rejoue, dans le cas contraire c’est au tour du joueur à sa gauche. Si le lanceur boit, cela met fin à
                son
                tour même si il a fait boire quelqu’un d’autre. Cette règle vaut pour les gorgées distribuées par les
                dés
                aussi bien que celles distribuées par n’importe quelle autre règle.</p>
            <p>Habituellement, un Bizkit n’a pas de fin définie. On ne finit pas un Bizkit, c’est le Bizkit qui te
                finit.
                Il existe néanmoins une variante des règles du jeu proposant une façon de finir la partie. Dans cette
                variante, chaque lancé qui n’engendre aucune action est appelé un “creux”. On compte alors le nombre de
                creux effectués dans la partie, et cette dernière se finit lorsque l’on a atteint un nombre de creux
                défini
                à l’avance, habituellement correspondant au numéro du département dans lequel se déroule la partie (bon
                courage aux joueurs d’outre-mer !).
            </p>
        </section>

        <section>
            <h2>Les combinaisons de base</h2>
            <ul class="combinations">
                <li>Double = Distribue le nombre de gorgées du double</li>
                <li>Double 1 = Distribue une gorgée et invente une nouvelle règle</li>
                <li>Total 7 = Bizkit. Tous les joueurs doivent porter leur pouce à leur front et s’exprimer « Bizkit »
                    le
                    plus rapidement possible, le dernier joueur à le faire boit 1 gorgée.
                </li>
                <li>Total 9 = Le joueur précédent boit 1 gorgée</li>
                <li>Total 10 = Le lanceur boit 1 gorgée (même dans le cas d’un double 5)</li>
                <li>Total 11 = Le joueur suivant boit 1 gorgée</li>
                <li>Total 3 = Le lanceur devient le Gros Poulet. Le Gros Poulet boit 1 gorgée chaque fois qu’un 3
                    apparaît
                    sur la face d’un dé. Le Gros Poulet le reste jusqu’à ce qu’un nouveau joueur fasse la même
                    combinaison.
                    Si le Gros Poulet refait un lancer dont la somme est 3, il devient le double Gros Poulet, et boit
                    donc 2
                    gorgées à chaque 3 sur un dé. Il n’est pas possible d’être plus que double Gros Poulet.
                </li>
            </ul>
        </section>

        <section>
            <h2>Les fautes</h2>
            <ul class="fools">
                <li>Faute de jeu = toute action physique contrevenant directement aux règles du jeu. 3 gorgées pour le fautif.
                    <p>Exemples : dire bizkit quand les dés ne l’indiquent pas, faire tomber un dé, …</p>
                </li>
                <li>Perte de notion = sanction pour les joueurs qui perdent leurs notions du jeu et incitent les
                    autres
                    joueurs à l’erreur. 1 gorgée pour le paumé.
                    <p>Exemple : dire à un joueur qu’il doit boire ou jouer alors que ce n’est pas le cas</p>
                </li>
            </ul>
        </section>

        <section>
            <h2>Idées de règles à ajouter</h2>
            <ul class="additional-rules">
                <li>
                    4 + 1 = Le lanceur devient la Catin. La Catin boit 1 gorgée chaque fois que le Gros Poulet boit 1
                    gorgée, même si ces gorgées ne sont pas en rapport direct avec le statut du Poulet.
                </li>
                <li>
                    3 + 1 = Le lanceur devient le Dindon. Le Dindon distribue 1 gorgée chaque fois qu’un 3 apparaît sur
                    la
                    face d’un dé.
                </li>
                <li>
                    <p>Les règles de passation de la Catin et du Dindon sont les mêmes que celles du Gros Poulet. Le
                        Catin
                        et la Dindon le restent donc jusqu’à ce qu’un autre joueur prenne le rôle, et il n’est pas
                        possible
                        d’être plus de double Catin ou Dindon.</p>
                    <p>Ces deux règles sous-entendent implicitement qu’il n’est pas possible de cumuler plusieurs rôles
                        à la
                        foi. Ainsi, un Gros Poulet qui ferait un lancer 4 + 1 deviendrait la Catin et ne serait plus
                        Poulet,
                        il sera donc la Catin de personne jusqu’à ce qu’un nouveau Gros Poulet arrive en jeu.</p>
                </li>
                <li>
                    Enlever les limitations des rôles : possibilité de devenir triple, quadrupe, … Poulet/Catin/Dindon,
                    possibilité de cumuler les rôles
                </li>
                <li>
                    5 + 1 = Pastis. Tous les joueurs doivent dire « Pastis ». Le lanceur boit un nombre de gorgées
                    correspondant au nombre de personnes l’ayant dit avant lui. Tous ceux qui l’ont dit après le lanceur
                    boivent 1 gorgée.
                </li>
                <li>
                    Si les deux dés sont différenciables, désigner l’un des deux dés comme étant le dé dominant.
                    Lorsqu’il
                    est plus fort que l’autre dé, toutes les gorgées mises en jeu sont doublées.
                </li>
                <li>Interdire le verbe « boire » et toutes ses conjugaisons</li>
                <li>Interdire les mots « oui » et « non »</li>
                <li>
                    Lorsqu’un joueur fait tomber un dé, au lieu de boire 3 gorgées pour sa faute de jeu, il relance le
                    dé
                    tombé et boit le nombre de gorgées affichées sur le dé. Si les deux dés sont tombés, il relance les
                    deux
                    dés.
                </li>
                <li>Ajouter des jeux sur des combinaisons (lorsque le total fait 5, 6 ou 8 par exemple) : dans ma
                    valise, combat de dés, shifumi, ....
                </li>
            </ul>
            <p>N’hésitez pas à faire preuve de créativité et inventez vos propres règles !</p>
        </section>
    </div>
</template>

<style scoped>
.rules {
    padding: 10%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

h1 {
    margin-top: 3rem;
    text-align: center;
}

h2 {
    margin-bottom: 3rem;
}

section {
    margin-bottom: 3rem;
}

p {
    margin: 1rem 0;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style-position: inside;
}

.subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    font-style: italic;
    text-align: center;
}

.back-btn {
    position: fixed;
    bottom: 1rem;
    left: 1rem;
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
        opacity: 0.8;
    }
}
</style>