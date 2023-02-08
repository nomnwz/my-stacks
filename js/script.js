jQuery(document).ready(function($) {
    $("ul.pagination li.page-to").click(function(e) {
        let page    = $(this).attr("data-page-to")

        $("ul.pagination li.page-to").removeClass("page-to-active")
        $(this).addClass("page-to-active")

        $(".card").hide()
        $(".card ul.list").attr("data-page", page)
        setTimeout(() => {
            $(".card").show()            
        }, 0)
    })
})