# theSlack

### 0. 클론 코딩의 시작

React와 GraphQL를 중심으로 학습하기 위해 업무용 메신저로 사용되고 있는 **Slack**을 따라 만들어보는 프로젝트를 시작했습니다.

### 1. 원하는 기능

##### v1.0

[ ] Google Social Login
[ ] 채널 목록을 실시간으로 추가
[ ] 실시간 채팅 기능
[ ] 채팅에서 표시될 사용자 정보는 google에서 가져온 정보 사용하기

---

##### v1.0 + a

[ ] slack에서 사용되고 있는 workspace 기능을 추가해서 초대 메일을 보낼 수 있도록 초대된 사용자만 사용가능하도록
[ ] 댓글
[ ] DM
[ ] 뒤로가기 & 앞으로 가기 (React-Router)
[ ] 검색 기능
[ ] Live Demo 제작하기

### 2. 학습 목표

[ ] React, Styled-Component를 활용한 UI 구성
[ ] Redux를 적용한 상태관리
[ ] Rest API 대신 GraphQL을 사용한 api 작성
[ ] ~~Socket.io를 사용해서 채팅 구현하기~~ Socketio 대신 GraphQL의 Subscription을 사용
[ ] OAuth2.0을 기반으로 한 구글 소셜 로그인 적용
[ ] client에서 Apollo-Client 적용
[ ] React-Router 적용

### 3. 사용된 기술

##### Client

React, Styled Component, Redux, GraphQL(apollo-client)

##### Server

GraphQL(graphql-yoga), mysql

### 4. 서비스 시연(gif)

##### 1. 소셜 로그인

![theSlack_google_login](https://user-images.githubusercontent.com/25023671/104295759-360d3f00-5504-11eb-86dd-52edd119fd68.gif)

##### 2. 채널 생성

![theSlack_addChannel](https://user-images.githubusercontent.com/25023671/104295815-402f3d80-5504-11eb-95a1-cf8256abefab.gif)

##### 3. 채팅 기능

![theSlack_chatting](https://user-images.githubusercontent.com/25023671/104295821-41606a80-5504-11eb-8f67-5154ddf36286.gif)
