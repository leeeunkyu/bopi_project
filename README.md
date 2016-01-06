node js 와 express 프레임 워크를 이용한 사용자 피부관리를 도와주는 웹페이지 입니다.

view적인 부분은 jade 엔진을 사용하였스며 회원정보 회원들간 게시판등 데이터 베이스 적인 요소들은 Mongo DB를 이용해 

저장 및 관리할수있게 설계해두었습니다.

웹페이지 기능적인 부분을 간략하게 설명하자면 우선 회원가입 및 로그인,회원정보를 볼수있는  회원 관리기능

게시판 글작성및 댓글작성을이용한 사용자간 커뮤니티 생성기능 

마지막으로 사용자가 사용중인 화장품 성분을 분석하거나 자신에 피부상태를 측정하고 전문가 또는 기타 사용자와 영상 채팅을 

통한 뷰티 컨설팅 기능등을 생각해두었지만 아직 화장품 인식및 피부상태 측정,영상 채팅을 구현하지는 못하였스며

이후 Open cvs알고리즘을 이용해 구현해볼 계획이 있습니다.

후에 추가적으로 사용자가 화장품을 검색할수있으며 사용자간 사용중인 화장품을 평가하고 의견을 나누는등 기능등을 추가할 

예정입니다.

웹페이지 deploying 같은 경우는 heroku를이용하여 무료 도메인 주소를 사용하였습니다.

https://calm-temple-9697.herokuapp.com/   <--해당 도메인 주소입니다.

https://www.youtube.com/watch?v=cDW7cNNNjC8&feature=youtu.be  <--youtube주소입니다.

--------------------------------------------------------------------------------------------------------------------------

저희가 프로젝트를 진행하면서 사용한 오픈소스는 

일반적으로 node js 와 express , jade ,mongoDB이며 

시각적인 부분은 Navbar 부스트랩을 이용하였습니다. 그밖에도 웹페이지상에 웹캠을 사용할수있게 도와주는

Capturing Audio & Video등을 이용하였습니다.
