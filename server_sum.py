import socket
import cv2
import numpy as np
import line_tracer_test
import Stand_turn
import Lifting
import time
import threading
import obstacle_avoidance

# socket에서 수신한 버퍼를 반환하는 함수
def recvall(sock, count):
    # 바이트 문자열
    buf = b''
    while count:
        newbuf = sock.recv(count)
        if not newbuf: return None
        buf += newbuf
        count -= len(newbuf)
    return buf

HOST = ''
PORT = 8485


#   0 창고 적재
#   1 창고 반출
in_or_out = 0
status = 0

#   0 주행
#   1 파레트 들기
#   2 회전
#   3 주행
#   4 파레트내리기
#   5 회전
#   6 주차장 이동
current_situation = 0
counter = 0

# TCP 사용
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print('Socket created')

# 서버의 아이피와 포트번호 지정
s.bind((HOST, PORT))
print('Socket bind complete')
# 클라이언트의 접속을 기다린다. (클라이언트 연결을 10개까지 받는다)
s.listen(10)
print('Socket now listening')

# 연결, conn에는 소켓 객체, addr은 소켓에 바인드 된 주소
conn, addr = s.accept()


def Next_F(input_data):
    global current_situation
    if current_situation == input_data:
        current_situation += 1
    return

direction = "go".encode('utf-8')

while True:

    # client에서 받은 stringData의 크기 (==(str(len(stringData))).encode().ljust(16))
    length = recvall(conn, 16)
    stringData = recvall(conn, int(length))
    data = np.frombuffer(stringData, dtype='uint8')

    print(counter)
    # data를 디코딩한다.
    frame = cv2.imdecode(data, cv2.IMREAD_COLOR)

    # 0일경우 주행모드
    if current_situation == 0 :                             #주행모드

        direction = line_tracer_test.Line_tracer(frame,direction)
     #   emergency_action =obstacle_avoidance.Obstacle(frame)
      #  if emergency_action > 0:
       #     direction ="stop".encode('utf-8')

        print(direction)
        if direction.decode() == "Next":
            current_situation = 1
            conn.sendall(direction)
        else:
            conn.sendall(direction)
        print("지금 주행단계는 0단계입니다.")

    elif current_situation == 1:                            #포크리프트 맞춰 전진
        direction=Lifting.lift_up(frame)
        print("지금 주행단계는 1단계입니다.")
        if direction.decode() == "lift_up":                 # 포크리프트 올리고 n초 대기

            counter += 1
            if counter > 26:
                current_situation = 2
                counter = 0
                direction = "lift_stop".encode('utf-8')

        conn.sendall(direction)

    elif current_situation ==2:
        print("지금 주행단계는 2단계입니다.")
        direction = "back".encode('utf-8')
        counter += 1
        conn.sendall(direction)
        if counter > 42:
            current_situation = 3




    elif current_situation == 3:                            # 제자리 회전
        print("지금 주행단계는 3단계입니다.")
        direction = "turn_d".encode('utf-8')
        print(direction)
        counter += 1
        if counter > 26:
            current_situation =4
            direction = "stop".encode('utf-8')

        conn.sendall(direction)


    elif current_situation == 4:                            # 주행
        print("지금 주행단계는 4단계입니다.")
        direction = line_tracer_test.Line_tracer(frame, direction)

        print(direction)
        conn.sendall(direction)
        if direction.decode() == "Next":                                   
            current_situation = 5


    elif current_situation == 5:                        #다시 주행
        print("지금 주행단계는 5단계입니다.")
        direction = line_tracer_test.Line_tracer(frame)
        print(direction)
        conn.sendall(direction)
        if direction.decode() == "Next":
            current_situation = 6
            conn.sendall(direction)

    elif current_situation == 6:
        direction = "lift_down".encode('utf-8')
        conn.sendall(direction)



    cv2.imshow('jebal',frame)                                 #d 이미지를 출력한다
    k = cv2.waitKey(10) & 0xFF                        # 프레임 100이라는뜻


