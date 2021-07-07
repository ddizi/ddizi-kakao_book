// ddizi-kakao_book
//https://github.com/ddizi/ddizi-kakao_book
$(function() {
    $("#search").click(function() {
        $.ajax({
            method : "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",  //전송

            data: { query: $("#bookName").val()},   //보낼 데이터
            headers: { Authorization : "KakaoAK a974995883875e44e014f3b99b2b756d"}
        })
        .done(function(msg) {
            console.log(msg);
            document.getElementById("result").innerHTML = `
            <h1> 책 검색 결과</h1>
            <img height=200% src='${msg.documents[0].thumbnail}'>
            <h4>제목 :   ${msg.documents[0].title} </h4>
            <h4>작가 :   ${msg.documents[0].authors} </h4>
            <h4>줄거리 :   ${msg.documents[0].contents} </h4>
            <h4>가격 :   ${msg.documents[0].sale_price} </h4>
            <h4>출판사 :   ${msg.documents[0].publisher} </h4>
            
            
            `;
        });
    })
});

$(function() {
    $("#api").click(function() {
        $.ajax({
            method : "GET",
            url: "http://54.180.124.191:5000",  //전송

            //data: { query: $("#bookName").val()},   //보낼 데이터
            //headers: { Authorization : "KakaoAK a974995883875e44e014f3b99b2b756d"}
        })
        .done(function(msg) {
            console.log(msg);
            // document.getElementById("result").innerHTML = `
            // <h1> 책 검색 결과</h1>
            // <img height=200% src='${msg.documents[0].thumbnail}'>
            // <h4>제목 :   ${msg.documents[0].title} </h4>
            // <h4>작가 :   ${msg.documents[0].authors} </h4>
            // <h4>줄거리 :   ${msg.documents[0].contents} </h4>
            // <h4>가격 :   ${msg.documents[0].sale_price} </h4>
            // <h4>출판사 :   ${msg.documents[0].publisher} </h4>
            
            
            // `;
        });
    })
});