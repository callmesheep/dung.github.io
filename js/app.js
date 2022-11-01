angular.module("app",[]);

angular.module("app").controller("MainController", function(){
    var vm = this;
    vm.title = "learn Angularr by example";
    vm.searchInput ="";
    vm.shows = [
        {
            title:"Đôi mắt có lửa ",
            author:"Nguyễn Hùng sơn",
            favorite: true
        },
        {
            title:"Life of Pi",
            author:"Davan",
            favorite: fales
        },
        {
            title:"learn Angular bt example",
            author:"Fpt- Atech",
            favorite:true
        },
        {
            title:"Hoj nhaf trai",
            author:"Nguyen anh tu",
            favorite:false
        },
        {
            title:"Hoc code today ",
            author:"Fpt",
            favorite: true

        }
    ];
    vm.orders = [
        {
            id: 1 ,
            title:"Author Ascending",
            key:"author",
            reverse: false
        },
        {
            id:2,
            title:"Author Descending",
            key:"author",
            reverse:true
        },
        {
            id:3,
            title:"Title Ascending",
            key:"title",
            reverse: false
        },
        {
            id: 4,
            title:"Title Ascending",
            key: "title",
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new={};
    vm.addshow = function() {
        vm.shows.push(vm.new)
        vm.new = {}
    }
})