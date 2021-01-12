# theSlack

### 0. 클론 코딩의 시작

React와 GraphQL를 중심으로 학습하기 위해 업무용 메신저로 사용되고 있는 **Slack**을 따라 만들어보는 프로젝트를 시작했습니다.

### 1. 원하는 기능

#### v1.0

- [x] Google Social Login<br>
- [x] 채널 목록을 실시간으로 추가<br>
- [x] 실시간 채팅 기능<br>
- [x] 채팅에서 표시될 사용자 정보는 google에서 가져온 정보 사용하기<br>

---

#### v1.0 + a

- [ ] workspace 기능을 추가해서 초대된 사용자만 workspace 사용가능하도록 + 초대 메일 보내는 기능 추가<br>
- [ ] 게시된 글에 댓글을 추가할 수 있는 기능<br>
- [ ] workspace에 존재하는 유저에거 DM(Direct Message) 보내는 기능<br>
- [ ] React-Router를 사용한 페이지 뒤로가기 & 앞으로 가기<br>
- [ ] 검색 기능<br>
- [ ] Live Demo 제작하기<br>

### 2. 학습 목표

- [x] React, Styled-Component를 활용한 UI 구성<br>
- [x] Redux를 적용한 상태관리<br>
- [x] Rest API 대신 GraphQL을 사용한 api 작성<br>
- [x] ~~Socket.io를 사용해서 채팅 구현하기~~ Socketio 대신 GraphQL의 Subscription을 사용<br>
- [x] OAuth2.0을 기반으로 한 구글 소셜 로그인 적용<br>
- [ ] client에서 Apollo-Client 적용<br>
- [ ] React-Router 적용<br>

### 3. 사용된 기술

#### Client

React, Styled Component, Redux, GraphQL(apollo-client)

#### Server

GraphQL(graphql-yoga), mysql

### 4. 서비스 시연(gif)

#### 1. 소셜 로그인

![theSlack_google_login](https://user-images.githubusercontent.com/25023671/104295759-360d3f00-5504-11eb-86dd-52edd119fd68.gif)

#### 2. 채널 생성

![theSlack_addChannel](https://user-images.githubusercontent.com/25023671/104295815-402f3d80-5504-11eb-95a1-cf8256abefab.gif)

#### 3. 채팅 기능

![theSlack_chatting](https://user-images.githubusercontent.com/25023671/104295821-41606a80-5504-11eb-8f67-5154ddf36286.gif)
