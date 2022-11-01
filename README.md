# dung.github.io
<!DOCTYPE html>
<html>
    <head leng="en">
    <meta charset="UTF-8">
    <title>AngularJS Practical Examples</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <script src="js/app.js"></script>
    </head>
<body
     ng-app="app" ng-controller="MainController as main">
<div class="container">
    <h1>{{main.title}}</h1>
    <div class="input-group">
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-search"></span>
        </span>
        <input type="text" class="form-conftrol" ng-model="main.searchInput">
    </div>
    <h3>A list of Books</h3>
    <ul class="List-group">
        <Li class="list-group-item" ng-repeat="show inmain.show | gilter:main.searchInput | orderBy:main.order.key:main.order.reverse">
            <span class="glyphicon glyphicon-star" ng-if="show.favorite"></span> {{show.title}} <span class="badge">{{show.author}}</span>
        </Li>
    </ul>
    <select class="form-control pull-right" ng-model="main.order"
    ng-options="order as order.title for order in main.orders"></select>
    <div class="clearfix"></div>
    <h3>Add anew Book</h3>
    <form name="main.addForm" class="form" ng-submit="main.addShow()">
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" ng-model="main.new.title" required/>
        </div>
        <div class="form-group">
            <label>Author</label>
            <input typr="text" class=" form-control" ng-model="main.new.author" required/>
        </div>
        <div class="row">
            <div class="col-xs-6">
                <label>Favorite:<input type="checkbox" ng-model="main.new.favorrite"/></label>
            </div>
            <div class="col-xs-6">
                <button class="btn btn-success pill-right">
                    <span class=""glyphicon glyphicon-plus-sign></span> Add
                </button>
            </div>
        </div>
    </form>
</div>
</body>
</html>
