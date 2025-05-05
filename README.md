# ParserLicke
solving a problem on parsing html pages
Из странички испольуя querySelector вытащить суммарное количество лайков с 
комментария пользователя под названием "@art_creator"

Сам код странички нужно скопировать к себе и написать скрипт, выводящий информацию в консоль.

Код ниже:

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>20 постов пользователей</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
        }
        .post {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .post-content {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 10px;
        }
        .post-author {
            font-weight: bold;
            color: #555;
            display: inline-block;
            margin-right: 15px;
        }
        .post-likes {
            color: #888;
            display: inline-block;
        }
        .art-creator-post {
            border-left: 4px solid #ff6b6b;
            background-color: #fff9f9;
        }
    </style>
</head>
<body>
    <h1>20 последних постов</h1>
    
    <div class="post">
        <div class="post-content">
            Только что вернулся из похода в горы. Виды были потрясающие, хотя и пришлось идти под дождем.
        </div>
        <div class="post-author">@adventurer</div>
        <div class="post-likes">❤️ 42 лайка</div>
    </div>
    
    <div class="post art-creator-post">
        <div class="post-content">
            Выставил свою новую картину "Рассвет в горах" в местной галерее. Приходите посмотреть!
        </div>
        <div class="post-author">@art_creator</div>
        <div class="post-likes">❤️ 78 лайков</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Кто-нибудь знает хорошее кафе с веганскими десертами в центре?
        </div>
        <div class="post-author">@vegan_foodie</div>
        <div class="post-likes">❤️ 15 лайков</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Сегодня пробежал свой первый полумарафон! Время 1:58:34. Доволен результатом.
        </div>
        <div class="post-author">@runner123</div>
        <div class="post-likes">❤️ 63 лайка</div>
    </div>
    
    <div class="post art-creator-post">
        <div class="post-content">
            Провожу мастер-класс по акварельной живописи в эту субботу. Осталось 2 места!
        </div>
        <div class="post-author">@art_creator</div>
        <div class="post-likes">❤️ 34 лайка</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Посоветуйте хороший ноутбук для работы с графикой. Бюджет до 100к.
        </div>
        <div class="post-author">@graphic_designer</div>
        <div class="post-likes">❤️ 28 лайков</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Нашел отличный рецепт домашнего хлеба без глютена. Получается невероятно вкусно!
        </div>
        <div class="post-author">@home_baker</div>
        <div class="post-likes">❤️ 47 лайков</div>
    </div>
    
    <div class="post art-creator-post">
        <div class="post-content">
            Моя новая серия картин "Городские пейзажи" будет выставлена в галерее Modern Art с понедельника.
        </div>
        <div class="post-author">@art_creator</div>
        <div class="post-likes">❤️ 92 лайка</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Кто-нибудь ходил на новый фильм Marvel? Стоит идти в кино или подождать стриминга?
        </div>
        <div class="post-author">@movie_fan</div>
        <div class="post-likes">❤️ 56 лайков</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Поделюсь лайфхаком: как научиться вставать в 5 утра без будильника за 2 недели.
        </div>
        <div class="post-author">@early_bird</div>
        <div class="post-likes">❤️ 104 лайка</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Купил новые кроссовки для бега. Разница с обычными просто колоссальная!
        </div>
        <div class="post-author">@sneaker_head</div>
        <div class="post-likes">❤️ 38 лайков</div>
    </div>
    
    <div class="post art-creator-post">
        <div class="post-content">
            Сегодня весь день работал над портретом на заказ. Клиент хочет, чтобы в глазах было больше жизни...
        </div>
        <div class="post-author">@art_creator</div>
        <div class="post-likes">❤️ 65 лайков</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Кто знает хорошие курсы по итальянскому языку онлайн? Хочу подготовиться к поездке.
        </div>
        <div class="post-author">@language_learner</div>
        <div class="post-likes">❤️ 22 лайка</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Нашел старую фотографию из детства. Как же быстро летит время...
        </div>
        <div class="post-author">@nostalgic_soul</div>
        <div class="post-likes">❤️ 87 лайков</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Поделюсь своим утренним ритуалом, который помогает сохранять продуктивность весь день.
        </div>
        <div class="post-author">@productivity_guru</div>
        <div class="post-likes">❤️ 112 лайков</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Вчера впервые попробовал суши с угрем. Это было... интересно.
        </div>
        <div class="post-author">@food_explorer</div>
        <div class="post-likes">❤️ 29 лайков</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Кто-нибудь может порекомендовать хорошую книгу по истории Древнего Рима?
        </div>
        <div class="post-author">@history_buff</div>
        <div class="post-likes">❤️ 18 лайков</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Нашел отличный способ организовать пространство в маленькой квартире. Фото в комментариях.
        </div>
        <div class="post-author">@space_organizer</div>
        <div class="post-likes">❤️ 73 лайка</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Вчера весь вечер играл в новую RPG. Забыл про время и проспал на работу!
        </div>
        <div class="post-author">@gamer4life</div>
        <div class="post-likes">❤️ 51 лайк</div>
    </div>
    
    <div class="post">
        <div class="post-content">
            Поделюсь своим рецептом идеального капучино в домашних условиях без дорогой кофемашины.
        </div>
        <div class="post-author">@coffee_lover</div>
        <div class="post-likes">❤️ 96 лайков</div>
    </div>
</body>
</html>
