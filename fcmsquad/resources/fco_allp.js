const allData = [
    {
        "name": "존 스톤스",
        "originName": "존 스톤스",
        "pos": "CB",
        "birth": "1994.05.28",
        "country": "잉글랜드",
        "team": "맨체스터 시티"
    },
    {
        "name": "에데르송",
        "originName": "에데르송 산타나 지 모라이스",
        "pos": "GK",
        "birth": "1993.08.17",
        "country": "브라질",
        "team": "맨체스터 시티"
    },
    {
        "name": "로드리",
        "originName": "로드리고 에르난데스 카스칸테",
        "pos": "CDM",
        "birth": "1996.06.22",
        "country": "스페인",
        "team": "맨체스터 시티"
    },
    {
        "name": "E. 홀란",
        "originName": "엘링 홀란",
        "pos": "ST",
        "birth": "2000.07.21",
        "country": "노르웨이",
        "team": "맨체스터 시티"
    },
    {
        "name": "후벵 디아스",
        "originName": "후벵 산투스 가투 알베스 디아스",
        "pos": "CB",
        "birth": "1997.05.14",
        "country": "포르투갈",
        "team": "맨체스터 시티"
    },
    {
        "name": "베르나르두 실바",
        "originName": "베르나르두 모타 카르발류 에 실바",
        "pos": "CAM",
        "birth": "1994.08.10",
        "country": "포르투갈",
        "team": "맨체스터 시티"
    },
    {
        "name": "C. 은쿤쿠",
        "originName": "크리스토페르 은쿤쿠",
        "pos": "CF",
        "birth": "1997.11.14",
        "country": "프랑스",
        "team": "첼시"
    },
    {
        "name": "케빈 더브라위너",
        "originName": "케빈 더브라위너",
        "pos": "CM",
        "birth": "1991.06.28",
        "country": "벨기에",
        "team": "맨체스터 시티"
    },
    {
        "name": "모하메드 살라",
        "originName": "모하메드 살라",
        "pos": "RW",
        "birth": "1992.06.15",
        "country": "이집트",
        "team": "리버풀"
    },
    {
        "name": "앙드레 오나나",
        "originName": "앙드레 오나나",
        "pos": "GK",
        "birth": "1996.04.02",
        "country": "카메룬",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "이브라히마 코나테",
        "originName": "이브라히마 코나테",
        "pos": "CB",
        "birth": "1999.05.25",
        "country": "프랑스",
        "team": "리버풀"
    },
    {
        "name": "K. 치미카스",
        "originName": "콘스탄티노스 치미카스",
        "pos": "LB",
        "birth": "1996.05.12",
        "country": "그리스",
        "team": "리버풀"
    },
    {
        "name": "P. 호이비에르",
        "originName": "피에르-에밀 호이비에르",
        "pos": "CDM",
        "birth": "1995.08.05",
        "country": "덴마크",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "마누엘 아칸지",
        "originName": "마누엘 아칸지",
        "pos": "CB",
        "birth": "1995.07.19",
        "country": "스위스",
        "team": "맨체스터 시티"
    },
    {
        "name": "이반 페리시치",
        "originName": "이반 페리시치",
        "pos": "LWB",
        "birth": "1989.02.02",
        "country": "크로아티아",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "리스 제임스",
        "originName": "리스 제임스",
        "pos": "RWB",
        "birth": "1999.12.08",
        "country": "잉글랜드",
        "team": "첼시"
    },
    {
        "name": "산드로 토날리",
        "originName": "산드로 토날리",
        "pos": "CDM",
        "birth": "2000.05.08",
        "country": "이탈리아",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "T. 알렉산더-아놀드",
        "originName": "트렌트 알렉산더-아놀드",
        "pos": "RB",
        "birth": "1998.10.07",
        "country": "잉글랜드",
        "team": "리버풀"
    },
    {
        "name": "벤 칠웰",
        "originName": "벤 칠웰",
        "pos": "LWB",
        "birth": "1996.12.21",
        "country": "잉글랜드",
        "team": "첼시"
    },
    {
        "name": "루이스 디아스",
        "originName": "루이스 디아스",
        "pos": "LM",
        "birth": "1997.01.13",
        "country": "콜롬비아",
        "team": "리버풀"
    },
    {
        "name": "카제미루",
        "originName": "카를루스 엔히키 베난시우 카지미루",
        "pos": "CDM",
        "birth": "1992.02.23",
        "country": "브라질",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "버질 반데이크",
        "originName": "버질 반데이크",
        "pos": "CB",
        "birth": "1991.07.08",
        "country": "네덜란드",
        "team": "리버풀"
    },
    {
        "name": "티아구 실바",
        "originName": "치아구 에밀리아누 다 시우바",
        "pos": "CB",
        "birth": "1984.09.22",
        "country": "브라질",
        "team": "첼시"
    },
    {
        "name": "손흥민",
        "originName": "손흥민",
        "pos": "LW",
        "birth": "1992.07.08",
        "country": "대한민국",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "엔소 페르난데스",
        "originName": "엔소 페르난데스",
        "pos": "CM",
        "birth": "2001.01.17",
        "country": "아르헨티나",
        "team": "첼시"
    },
    {
        "name": "훌리안 알바레스",
        "originName": "훌리안 알바레스",
        "pos": "CF",
        "birth": "2000.01.31",
        "country": "아르헨티나",
        "team": "맨체스터 시티"
    },
    {
        "name": "안토니",
        "originName": "안토니 마테우스 두스산투스",
        "pos": "RW",
        "birth": "2000.02.24",
        "country": "브라질",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "티아고",
        "originName": "티아고 알칸타라",
        "pos": "CM",
        "birth": "1991.04.11",
        "country": "스페인",
        "team": "리버풀"
    },
    {
        "name": "필 포든",
        "originName": "필 포든",
        "pos": "LW",
        "birth": "2000.05.28",
        "country": "잉글랜드",
        "team": "맨체스터 시티"
    },
    {
        "name": "A. 단주마",
        "originName": "아르노 단주마",
        "pos": "LW",
        "birth": "1997.01.31",
        "country": "네덜란드",
        "team": "비야레알 CF"
    },
    {
        "name": "브루누 페르난데스",
        "originName": "브루누 미겔 보르지스 페르난데스",
        "pos": "CAM",
        "birth": "1994.09.08",
        "country": "포르투갈",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "앤드루 로버트슨",
        "originName": "앤드루 로버트슨",
        "pos": "LB",
        "birth": "1994.03.11",
        "country": "스코틀랜드",
        "team": "리버풀"
    },
    {
        "name": "디오구 조타",
        "originName": "디오구 주제 테이셰이라 다 실바",
        "pos": "CF",
        "birth": "1996.12.04",
        "country": "포르투갈",
        "team": "리버풀"
    },
    {
        "name": "마테오 코바치치",
        "originName": "마테오 코바치치",
        "pos": "CM",
        "birth": "1994.05.06",
        "country": "크로아티아",
        "team": "맨체스터 시티"
    },
    {
        "name": "J. 그바르디올",
        "originName": "요슈코 그바르디올",
        "pos": "CB",
        "birth": "2002.01.23",
        "country": "크로아티아",
        "team": "맨체스터 시티"
    },
    {
        "name": "카이 하베르츠",
        "originName": "카이 하베르츠",
        "pos": "CF",
        "birth": "1999.06.11",
        "country": "독일",
        "team": "아스널"
    },
    {
        "name": "R. 그라벤베르흐",
        "originName": "라이언 그라벤베르흐",
        "pos": "CM",
        "birth": "2002.05.16",
        "country": "네덜란드",
        "team": "리버풀"
    },
    {
        "name": "M. 무드리크",
        "originName": "미하일로 무드리크",
        "pos": "LW",
        "birth": "2001.01.05",
        "country": "우크라이나",
        "team": "첼시"
    },
    {
        "name": "조엘 마티프",
        "originName": "조엘 마티프",
        "pos": "CB",
        "birth": "1991.08.08",
        "country": "카메룬",
        "team": "리버풀"
    },
    {
        "name": "로드리고 벤탕쿠르",
        "originName": "로드리고 벤탕쿠르",
        "pos": "CM",
        "birth": "1997.06.25",
        "country": "우루과이",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "클레망 랑글레",
        "originName": "클레망 랑글레",
        "pos": "CB",
        "birth": "1995.06.17",
        "country": "프랑스",
        "team": "FC 바르셀로나"
    },
    {
        "name": "네이선 아케",
        "originName": "네이선 아케",
        "pos": "CB",
        "birth": "1995.02.18",
        "country": "네덜란드",
        "team": "맨체스터 시티"
    },
    {
        "name": "다르윈 누녜스",
        "originName": "다르윈 누녜스",
        "pos": "ST",
        "birth": "1999.06.24",
        "country": "우루과이",
        "team": "리버풀"
    },
    {
        "name": "L. 마르티네스",
        "originName": "리산드로 마르티네스",
        "pos": "CB",
        "birth": "1998.01.18",
        "country": "아르헨티나",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "O. 블라호디모스",
        "originName": "오디세아스 블라호디모스",
        "pos": "GK",
        "birth": "1994.04.26",
        "country": "그리스",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "메이슨 마운트",
        "originName": "메이슨 마운트",
        "pos": "CAM",
        "birth": "1999.01.10",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "파우 토레스",
        "originName": "파우 프란시스코 토레스",
        "pos": "CB",
        "birth": "1997.01.16",
        "country": "스페인",
        "team": "애스턴 빌라"
    },
    {
        "name": "트레보 찰로바",
        "originName": "트레보 찰로바",
        "pos": "CB",
        "birth": "1999.07.05",
        "country": "잉글랜드",
        "team": "첼시"
    },
    {
        "name": "D. 소보슬러이",
        "originName": "도미니크 소보슬러이",
        "pos": "RW",
        "birth": "2000.10.25",
        "country": "헝가리",
        "team": "리버풀"
    },
    {
        "name": "H. 엘리엇",
        "originName": "하비 엘리엇",
        "pos": "CAM",
        "birth": "2003.04.04",
        "country": "잉글랜드",
        "team": "리버풀"
    },
    {
        "name": "팔리냐",
        "originName": "주앙 마리아 팔리냐 곤살베스",
        "pos": "CDM",
        "birth": "1995.07.09",
        "country": "포르투갈",
        "team": "풀럼"
    },
    {
        "name": "가브리엘 제주스",
        "originName": "가브리엘 페르난두 지 제주스",
        "pos": "ST",
        "birth": "1997.04.03",
        "country": "브라질",
        "team": "아스널"
    },
    {
        "name": "데헤아",
        "originName": "다비드 데헤아 킨타나",
        "pos": "GK",
        "birth": "1990.11.07",
        "country": "스페인",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "에메르송 로얄",
        "originName": "에메르송 레이치 지 소자",
        "pos": "RWB",
        "birth": "1999.01.14",
        "country": "브라질",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "페드로 포로",
        "originName": "페드로 안토니오 포로 사우세다",
        "pos": "RWB",
        "birth": "1999.09.13",
        "country": "스페인",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "마테우스 누니스",
        "originName": "마테우스 루이스 누니스",
        "pos": "CM",
        "birth": "1998.08.27",
        "country": "포르투갈",
        "team": "맨체스터 시티"
    },
    {
        "name": "히샤를리송",
        "originName": "히샤를리송 지 안드라지",
        "pos": "ST",
        "birth": "1997.05.10",
        "country": "브라질",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "잭 그릴리시",
        "originName": "잭 그릴리시",
        "pos": "LW",
        "birth": "1995.09.10",
        "country": "잉글랜드",
        "team": "맨체스터 시티"
    },
    {
        "name": "알리송",
        "originName": "알리송 함시스 베케르",
        "pos": "GK",
        "birth": "1992.10.02",
        "country": "브라질",
        "team": "리버풀"
    },
    {
        "name": "커티스 존스",
        "originName": "커티스 존스",
        "pos": "CM",
        "birth": "2001.01.30",
        "country": "잉글랜드",
        "team": "리버풀"
    },
    {
        "name": "에드손 알바레스",
        "originName": "에드손 알바레스",
        "pos": "CDM",
        "birth": "1997.10.24",
        "country": "멕시코",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "위리엔 팀버",
        "originName": "위리엔 팀버",
        "pos": "CB",
        "birth": "2001.06.17",
        "country": "네덜란드",
        "team": "아스널"
    },
    {
        "name": "C. 허드슨-오도이",
        "originName": "칼럼 허드슨-오도이",
        "pos": "LW",
        "birth": "2000.11.07",
        "country": "잉글랜드",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "웨슬리 포파나",
        "originName": "웨슬리 포파나",
        "pos": "CB",
        "birth": "2000.12.17",
        "country": "프랑스",
        "team": "첼시"
    },
    {
        "name": "크리스티안 로메로",
        "originName": "크리스티안 로메로",
        "pos": "CB",
        "birth": "1998.04.27",
        "country": "아르헨티나",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "라이언 세세뇽",
        "originName": "라이언 세세뇽",
        "pos": "LWB",
        "birth": "2000.05.18",
        "country": "잉글랜드",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "루크 쇼",
        "originName": "루크 쇼",
        "pos": "LB",
        "birth": "1995.07.12",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "이드리사 게예",
        "originName": "이드리사 게예",
        "pos": "CDM",
        "birth": "1989.09.26",
        "country": "세네갈",
        "team": "에버턴"
    },
    {
        "name": "에릭 다이어",
        "originName": "에릭 다이어",
        "pos": "CB",
        "birth": "1994.01.15",
        "country": "잉글랜드",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "세르히오 고메스",
        "originName": "세르히오 고메스 마르틴",
        "pos": "LB",
        "birth": "2000.09.04",
        "country": "스페인",
        "team": "맨체스터 시티"
    },
    {
        "name": "스벤 보트만",
        "originName": "스벤 보트만",
        "pos": "CB",
        "birth": "2000.01.12",
        "country": "네덜란드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "올렉산드르 진첸코",
        "originName": "올렉산드르 진첸코",
        "pos": "LB",
        "birth": "1996.12.15",
        "country": "우크라이나",
        "team": "아스널"
    },
    {
        "name": "쿠쿠렐랴",
        "originName": "마르크 쿠쿠렐랴 사에스타",
        "pos": "LB",
        "birth": "1998.07.22",
        "country": "스페인",
        "team": "첼시"
    },
    {
        "name": "라힘 스털링",
        "originName": "라힘 스털링",
        "pos": "LW",
        "birth": "1994.12.08",
        "country": "잉글랜드",
        "team": "첼시"
    },
    {
        "name": "위고 요리스",
        "originName": "위고 요리스",
        "pos": "GK",
        "birth": "1986.12.26",
        "country": "프랑스",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "에런 완-비사카",
        "originName": "에런 완-비사카",
        "pos": "RB",
        "birth": "1997.11.26",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "스콧 맥토미니",
        "originName": "스콧 맥토미니",
        "pos": "CDM",
        "birth": "1996.12.08",
        "country": "스코틀랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "제임스 매디슨",
        "originName": "제임스 매디슨",
        "pos": "CAM",
        "birth": "1996.11.23",
        "country": "잉글랜드",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "해리 매과이어",
        "originName": "해리 매과이어",
        "pos": "CB",
        "birth": "1993.03.05",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "부카요 사카",
        "originName": "부카요 사카",
        "pos": "RW",
        "birth": "2001.09.05",
        "country": "잉글랜드",
        "team": "아스널"
    },
    {
        "name": "카일 워커",
        "originName": "카일 워커",
        "pos": "RB",
        "birth": "1990.05.28",
        "country": "잉글랜드",
        "team": "맨체스터 시티"
    },
    {
        "name": "디오구 달로",
        "originName": "주제 디오구 달로 테이셰이라",
        "pos": "RB",
        "birth": "1999.03.18",
        "country": "포르투갈",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "안수 파티",
        "originName": "안수마네 파티",
        "pos": "LW",
        "birth": "2002.10.31",
        "country": "스페인",
        "team": "FC 바르셀로나"
    },
    {
        "name": "쿠티뉴",
        "originName": "필리피 쿠티뉴 코헤이아",
        "pos": "CAM",
        "birth": "1992.06.12",
        "country": "브라질",
        "team": "애스턴 빌라"
    },
    {
        "name": "코너 갤러거",
        "originName": "코너 갤러거",
        "pos": "CM",
        "birth": "2000.02.06",
        "country": "잉글랜드",
        "team": "첼시"
    },
    {
        "name": "브루누 기마랑이스",
        "originName": "브루누 기마랑이스 모라",
        "pos": "CM",
        "birth": "1997.11.16",
        "country": "브라질",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "조르지뉴",
        "originName": "루이스 프렐루 필류 조르지",
        "pos": "CM",
        "birth": "1991.12.20",
        "country": "이탈리아",
        "team": "아스널"
    },
    {
        "name": "E. 마르티네스",
        "originName": "에밀리아노 마르티네스",
        "pos": "GK",
        "birth": "1992.09.02",
        "country": "아르헨티나",
        "team": "애스턴 빌라"
    },
    {
        "name": "빅토르 린델뢰프",
        "originName": "빅토르 린델뢰프",
        "pos": "CB",
        "birth": "1994.07.17",
        "country": "스웨덴",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "마르틴 외데고르",
        "originName": "마르틴 외데고르",
        "pos": "CAM",
        "birth": "1998.12.17",
        "country": "노르웨이",
        "team": "아스널"
    },
    {
        "name": "제이든 산초",
        "originName": "제이든 산초",
        "pos": "RM",
        "birth": "2000.03.25",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "파블로 사라비아",
        "originName": "파블로 사라비아 가르시아",
        "pos": "RW",
        "birth": "1992.05.11",
        "country": "스페인",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "조 고메스",
        "originName": "조 고메스",
        "pos": "CB",
        "birth": "1997.05.23",
        "country": "잉글랜드",
        "team": "리버풀"
    },
    {
        "name": "라파엘 바란",
        "originName": "라파엘 바란",
        "pos": "CB",
        "birth": "1993.04.25",
        "country": "프랑스",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "데클런 라이스",
        "originName": "데클런 라이스",
        "pos": "CDM",
        "birth": "1999.01.14",
        "country": "잉글랜드",
        "team": "아스널"
    },
    {
        "name": "디보크 오리기",
        "originName": "디보크 오리기",
        "pos": "ST",
        "birth": "1995.04.18",
        "country": "벨기에",
        "team": "AC 밀란"
    },
    {
        "name": "페르난지뉴",
        "originName": "페르난두 루이스 호자",
        "pos": "CDM",
        "birth": "1985.05.04",
        "country": "브라질",
        "team": "아틀레티쿠 파렌세"
    },
    {
        "name": "크리스티안 에릭센",
        "originName": "크리스티안 에릭센",
        "pos": "CAM",
        "birth": "1992.02.14",
        "country": "덴마크",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "데얀 쿨루세브스키",
        "originName": "데얀 쿨루세브스키",
        "pos": "RW",
        "birth": "2000.04.25",
        "country": "스웨덴",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "윌리안",
        "originName": "윌리안 보르지스 다 시우바",
        "pos": "RW",
        "birth": "1988.08.09",
        "country": "브라질",
        "team": "풀럼"
    },
    {
        "name": "일카이 귄도안",
        "originName": "일카이 귄도안",
        "pos": "CM",
        "birth": "1990.10.24",
        "country": "독일",
        "team": "FC 바르셀로나"
    },
    {
        "name": "비니시우스",
        "originName": "비니시우스 호세 지 올리베이라 주니오르",
        "pos": "LW",
        "birth": "2000.07.12",
        "country": "브라질",
        "team": "레알 마드리드"
    },
    {
        "name": "주드 벨링엄",
        "originName": "주드 벨링엄",
        "pos": "CM",
        "birth": "2003.06.29",
        "country": "잉글랜드",
        "team": "레알 마드리드"
    },
    {
        "name": "페데리코 발베르데",
        "originName": "페데리코 발베르데",
        "pos": "CM",
        "birth": "1998.07.22",
        "country": "우루과이",
        "team": "레알 마드리드"
    },
    {
        "name": "티보 쿠르투아",
        "originName": "티보 쿠르투아",
        "pos": "GK",
        "birth": "1992.05.11",
        "country": "벨기에",
        "team": "레알 마드리드"
    },
    {
        "name": "호드리구",
        "originName": "호드리구 시우바 지 고이스",
        "pos": "RW",
        "birth": "2001.01.09",
        "country": "브라질",
        "team": "레알 마드리드"
    },
    {
        "name": "주앙 칸셀루",
        "originName": "주앙 페드루 카바쿠 칸셀루",
        "pos": "LB",
        "birth": "1994.05.27",
        "country": "포르투갈",
        "team": "맨체스터 시티"
    },
    {
        "name": "토니 크로스",
        "originName": "토니 크로스",
        "pos": "CM",
        "birth": "1990.01.04",
        "country": "독일",
        "team": "레알 마드리드"
    },
    {
        "name": "루카 모드리치",
        "originName": "루카 모드리치",
        "pos": "CM",
        "birth": "1985.09.09",
        "country": "크로아티아",
        "team": "레알 마드리드"
    },
    {
        "name": "카르바할",
        "originName": "다니엘 카르바할 라모스",
        "pos": "RB",
        "birth": "1992.01.11",
        "country": "스페인",
        "team": "레알 마드리드"
    },
    {
        "name": "에티엔 카푸",
        "originName": "에티엔 카푸",
        "pos": "CDM",
        "birth": "1988.07.11",
        "country": "프랑스",
        "team": "비야레알 CF"
    },
    {
        "name": "헤이닐두",
        "originName": "헤이닐두 이스나르드 만다바",
        "pos": "LB",
        "birth": "1994.01.21",
        "country": "모잠비크",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "파레호",
        "originName": "다니엘 파레호 무뇨스",
        "pos": "CM",
        "birth": "1989.04.16",
        "country": "스페인",
        "team": "비야레알 CF"
    },
    {
        "name": "안드레 실바",
        "originName": "안드레 미겔 발렌트 다 실바",
        "pos": "ST",
        "birth": "1995.11.06",
        "country": "포르투갈",
        "team": "RB 라이프치히"
    },
    {
        "name": "안토니오 뤼디거",
        "originName": "안토니오 뤼디거",
        "pos": "CB",
        "birth": "1993.03.03",
        "country": "독일",
        "team": "레알 마드리드"
    },
    {
        "name": "케파",
        "originName": "케파 아리사발라가",
        "pos": "GK",
        "birth": "1994.10.03",
        "country": "스페인",
        "team": "첼시"
    },
    {
        "name": "조나탕 밤바",
        "originName": "조나탕 밤바",
        "pos": "LW",
        "birth": "1996.03.26",
        "country": "프랑스",
        "team": "셀타 비고"
    },
    {
        "name": "세르히오 라모스",
        "originName": "세르히오 라모스 가르시아",
        "pos": "CB",
        "birth": "1986.03.30",
        "country": "스페인",
        "team": "세비야 FC"
    },
    {
        "name": "에데르 밀리탕",
        "originName": "에데르 가브리엘 밀리탕",
        "pos": "CB",
        "birth": "1998.01.18",
        "country": "브라질",
        "team": "레알 마드리드"
    },
    {
        "name": "페를랑 멘디",
        "originName": "페를랑 멘디",
        "pos": "LB",
        "birth": "1995.06.08",
        "country": "프랑스",
        "team": "레알 마드리드"
    },
    {
        "name": "제라르 모레노",
        "originName": "제라르 모레노 발라게로",
        "pos": "ST",
        "birth": "1992.04.07",
        "country": "스페인",
        "team": "비야레알 CF"
    },
    {
        "name": "아스필리쿠에타",
        "originName": "세사르 아스필리쿠에타 탄코",
        "pos": "CB",
        "birth": "1989.08.28",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "프렝키 더용",
        "originName": "프렝키 더용",
        "pos": "CM",
        "birth": "1997.05.12",
        "country": "네덜란드",
        "team": "FC 바르셀로나"
    },
    {
        "name": "앙투안 그리즈만",
        "originName": "앙투안 그리즈만",
        "pos": "ST",
        "birth": "1991.03.21",
        "country": "프랑스",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "R. 레반도프스키",
        "originName": "로베르트 레반도프스키",
        "pos": "ST",
        "birth": "1988.08.21",
        "country": "폴란드",
        "team": "FC 바르셀로나"
    },
    {
        "name": "얀 오블라크",
        "originName": "얀 오블라크",
        "pos": "GK",
        "birth": "1993.01.07",
        "country": "슬로베니아",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "데일리 블린트",
        "originName": "데일리 블린트",
        "pos": "LB",
        "birth": "1990.03.09",
        "country": "네덜란드",
        "team": "지로나 FC"
    },
    {
        "name": "R. 데폴",
        "originName": "로드리고 하비에르 데폴",
        "pos": "CM",
        "birth": "1994.05.24",
        "country": "아르헨티나",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "A. 크리스텐센",
        "originName": "안드레아스 크리스텐센",
        "pos": "CB",
        "birth": "1996.04.10",
        "country": "덴마크",
        "team": "FC 바르셀로나"
    },
    {
        "name": "데이비드 알라바",
        "originName": "데이비드 알라바",
        "pos": "CB",
        "birth": "1992.06.24",
        "country": "오스트리아",
        "team": "레알 마드리드"
    },
    {
        "name": "후안 포이트",
        "originName": "후안 포이트",
        "pos": "RB",
        "birth": "1998.01.12",
        "country": "아르헨티나",
        "team": "비야레알 CF"
    },
    {
        "name": "지브릴 소브",
        "originName": "지브릴 소브",
        "pos": "CDM",
        "birth": "1997.02.06",
        "country": "스위스",
        "team": "세비야 FC"
    },
    {
        "name": "I. 그르비치",
        "originName": "이보 그르비치",
        "pos": "GK",
        "birth": "1996.01.18",
        "country": "크로아티아",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "예레미 피노",
        "originName": "예레미 헤수스 피노 산투스",
        "pos": "RW",
        "birth": "2002.10.20",
        "country": "스페인",
        "team": "비야레알 CF"
    },
    {
        "name": "마테오 가비아",
        "originName": "마테오 가비아",
        "pos": "CB",
        "birth": "1999.10.21",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "페란 토레스",
        "originName": "페란 토레스 가르시아",
        "pos": "ST",
        "birth": "2000.02.29",
        "country": "스페인",
        "team": "FC 바르셀로나"
    },
    {
        "name": "안데르 에레라",
        "originName": "안데르 에레라 아구에라",
        "pos": "CM",
        "birth": "1989.08.14",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "마누 트리게로스",
        "originName": "마누엘 트리게로스 무뇨스",
        "pos": "CM",
        "birth": "1991.10.17",
        "country": "스페인",
        "team": "비야레알 CF"
    },
    {
        "name": "E. 카마빙가",
        "originName": "에두아르도 카마빙가",
        "pos": "CM",
        "birth": "2002.11.10",
        "country": "프랑스",
        "team": "레알 마드리드"
    },
    {
        "name": "나초 페르난데스",
        "originName": "호세 이그나시오 페르난데스 이글레시아스",
        "pos": "CB",
        "birth": "1990.01.18",
        "country": "스페인",
        "team": "레알 마드리드"
    },
    {
        "name": "라울 알비올",
        "originName": "라울 알비올 토르타하다",
        "pos": "CB",
        "birth": "1985.09.04",
        "country": "스페인",
        "team": "비야레알 CF"
    },
    {
        "name": "A. 추아메니",
        "originName": "오렐리앙 추아메니",
        "pos": "CDM",
        "birth": "2000.01.27",
        "country": "프랑스",
        "team": "레알 마드리드"
    },
    {
        "name": "모라타",
        "originName": "알바로 보르하 모라타 마르틴",
        "pos": "ST",
        "birth": "1992.10.23",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "유세프 엔네시리",
        "originName": "유세프 엔네시리",
        "pos": "ST",
        "birth": "1997.06.01",
        "country": "모로코",
        "team": "세비야 FC"
    },
    {
        "name": "M. 테어슈테겐",
        "originName": "마르크-안드레 테어슈테겐",
        "pos": "GK",
        "birth": "1992.04.30",
        "country": "독일",
        "team": "FC 바르셀로나"
    },
    {
        "name": "마르코스 요렌테",
        "originName": "마르코스 요렌테 모레노",
        "pos": "RM",
        "birth": "1995.01.30",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "마르코스 알론소",
        "originName": "마르코스 알론소 멘도사",
        "pos": "LWB",
        "birth": "1990.12.28",
        "country": "스페인",
        "team": "FC 바르셀로나"
    },
    {
        "name": "미켈 메리노",
        "originName": "미켈 메리노 사손",
        "pos": "CM",
        "birth": "1996.06.22",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "브라힘",
        "originName": "브라힘 디아스",
        "pos": "CAM",
        "birth": "1999.08.03",
        "country": "스페인",
        "team": "레알 마드리드"
    },
    {
        "name": "마리오 에르모소",
        "originName": "마리오 에르모소 칸세코",
        "pos": "CB",
        "birth": "1995.06.18",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "로만 야렘추크",
        "originName": "로만 야렘추크",
        "pos": "ST",
        "birth": "1995.11.27",
        "country": "우크라이나",
        "team": "클럽 브루게"
    },
    {
        "name": "J. 히메네스",
        "originName": "호세 마리아 히메네스",
        "pos": "CB",
        "birth": "1995.01.20",
        "country": "우루과이",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "주앙 펠릭스",
        "originName": "주앙 펠릭스 세케이라",
        "pos": "CF",
        "birth": "1999.11.10",
        "country": "포르투갈",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "이냐키 윌리암스",
        "originName": "이냐키 윌리암스 아르투에르",
        "pos": "RM",
        "birth": "1994.06.15",
        "country": "가나",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "루카스 바스케스",
        "originName": "루카스 바스케스 이글레시아스",
        "pos": "RB",
        "birth": "1991.07.01",
        "country": "스페인",
        "team": "레알 마드리드"
    },
    {
        "name": "마르코스 아쿠냐",
        "originName": "마르코스 아쿠냐",
        "pos": "LB",
        "birth": "1991.10.28",
        "country": "아르헨티나",
        "team": "세비야 FC"
    },
    {
        "name": "페드리",
        "originName": "페드로 곤살레스 로페스",
        "pos": "CM",
        "birth": "2002.11.25",
        "country": "스페인",
        "team": "FC 바르셀로나"
    },
    {
        "name": "알렉스 레미로",
        "originName": "알레한드로 레미로 가르가요",
        "pos": "GK",
        "birth": "1995.03.24",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "세르히오 아구에로",
        "originName": "세르히오 아구에로",
        "pos": "ST",
        "birth": "1988.06.02",
        "country": "아르헨티나",
        "team": "FC 바르셀로나"
    },
    {
        "name": "루이스 수아레스",
        "originName": "루이스 수아레스",
        "pos": "ST",
        "birth": "1987.01.24",
        "country": "우루과이",
        "team": "그레미우"
    },
    {
        "name": "스테판 사비치",
        "originName": "스테판 사비치",
        "pos": "CB",
        "birth": "1991.01.08",
        "country": "몬테네그로",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "에덴 아자르",
        "originName": "에덴 아자르",
        "pos": "LW",
        "birth": "1991.01.07",
        "country": "벨기에",
        "team": "레알 마드리드"
    },
    {
        "name": "T. 니안주",
        "originName": "탕기 니안주",
        "pos": "CB",
        "birth": "2002.06.07",
        "country": "프랑스",
        "team": "세비야 FC"
    },
    {
        "name": "토마 르마르",
        "originName": "토마 르마르",
        "pos": "LM",
        "birth": "1995.11.12",
        "country": "프랑스",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "이아고 아스파스",
        "originName": "이아고 아스파스 훙칼",
        "pos": "ST",
        "birth": "1987.08.01",
        "country": "스페인",
        "team": "셀타 비고"
    },
    {
        "name": "이반 라키티치",
        "originName": "이반 라키티치",
        "pos": "CM",
        "birth": "1988.03.10",
        "country": "크로아티아",
        "team": "세비야 FC"
    },
    {
        "name": "기도 로드리게스",
        "originName": "기도 로드리게스",
        "pos": "CDM",
        "birth": "1995.04.11",
        "country": "아르헨티나",
        "team": "레알 베티스"
    },
    {
        "name": "구보 다케후사",
        "originName": "구보 다케후사",
        "pos": "RW",
        "birth": "2001.06.04",
        "country": "일본",
        "team": "레알 소시에다드"
    },
    {
        "name": "R. 아라우호",
        "originName": "로날드 아라우호",
        "pos": "CB",
        "birth": "1999.03.07",
        "country": "우루과이",
        "team": "FC 바르셀로나"
    },
    {
        "name": "V. 치한코우",
        "originName": "빅토르 치한코우",
        "pos": "RM",
        "birth": "1997.11.15",
        "country": "우크라이나",
        "team": "지로나 FC"
    },
    {
        "name": "마르셀루",
        "originName": "마르셀루 비에이라 다 시우바",
        "pos": "LB",
        "birth": "1988.05.12",
        "country": "브라질",
        "team": "플루미넨세"
    },
    {
        "name": "코케",
        "originName": "호르헤 레수렉시온",
        "pos": "CM",
        "birth": "1992.01.08",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "보르하 이글레시아스",
        "originName": "보르하 이글레시아스 킨타스",
        "pos": "ST",
        "birth": "1993.01.17",
        "country": "스페인",
        "team": "레알 베티스"
    },
    {
        "name": "하리스 세페로비치",
        "originName": "하리스 세페로비치",
        "pos": "ST",
        "birth": "1992.02.22",
        "country": "스위스",
        "team": "알와슬"
    },
    {
        "name": "안드리 루닌",
        "originName": "안드리 루닌",
        "pos": "GK",
        "birth": "1999.02.11",
        "country": "우크라이나",
        "team": "레알 마드리드"
    },
    {
        "name": "아구스틴 마르체신",
        "originName": "아구스틴 마르체신",
        "pos": "GK",
        "birth": "1988.03.16",
        "country": "아르헨티나",
        "team": "셀타 비고"
    },
    {
        "name": "후이 실바",
        "originName": "후이 티아구 단타스 다 실바",
        "pos": "GK",
        "birth": "1994.02.07",
        "country": "포르투갈",
        "team": "레알 베티스"
    },
    {
        "name": "우나이 시몬",
        "originName": "우나이 시몬 멘디빌",
        "pos": "GK",
        "birth": "1997.06.11",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "다비드 가르시아",
        "originName": "다비드 가르시아 수비리아",
        "pos": "CB",
        "birth": "1994.02.14",
        "country": "스페인",
        "team": "오사수나"
    },
    {
        "name": "다비드 실바",
        "originName": "다비드 호수에 히메네스 실바",
        "pos": "CAM",
        "birth": "1986.01.08",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "산세트",
        "originName": "오이안 산세트 티라푸",
        "pos": "CAM",
        "birth": "2000.04.25",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "로뱅 르노르망",
        "originName": "로뱅 르노르망",
        "pos": "CB",
        "birth": "1996.11.11",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "하피냐",
        "originName": "하파에우 지아스 벨롤리",
        "pos": "RW",
        "birth": "1996.12.14",
        "country": "브라질",
        "team": "FC 바르셀로나"
    },
    {
        "name": "악셀 비첼",
        "originName": "악셀 비첼",
        "pos": "CDM",
        "birth": "1989.01.12",
        "country": "벨기에",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "나빌 페키르",
        "originName": "나빌 페키르",
        "pos": "CAM",
        "birth": "1993.07.18",
        "country": "프랑스",
        "team": "레알 베티스"
    },
    {
        "name": "이니고 마르티네스",
        "originName": "이니고 마르티네스 베리디",
        "pos": "CB",
        "birth": "1991.05.17",
        "country": "스페인",
        "team": "FC 바르셀로나"
    },
    {
        "name": "피케",
        "originName": "제라르 피케 베르나베우",
        "pos": "CB",
        "birth": "1987.02.02",
        "country": "스페인",
        "team": "FC 바르셀로나"
    },
    {
        "name": "멤피스 데파이",
        "originName": "멤피스 데파이",
        "pos": "CF",
        "birth": "1994.02.13",
        "country": "네덜란드",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "앙헬 코레아",
        "originName": "앙헬 코레아",
        "pos": "ST",
        "birth": "1995.03.09",
        "country": "아르헨티나",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "쥘 쿤데",
        "originName": "쥘 쿤데",
        "pos": "CB",
        "birth": "1998.11.12",
        "country": "프랑스",
        "team": "FC 바르셀로나"
    },
    {
        "name": "김민재",
        "originName": "김민재",
        "pos": "CB",
        "birth": "1996.11.15",
        "country": "대한민국",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "레온 고레츠카",
        "originName": "레온 고레츠카",
        "pos": "CM",
        "birth": "1995.02.06",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "리로이 자네",
        "originName": "리로이 자네",
        "pos": "LW",
        "birth": "1996.01.11",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "그리말도",
        "originName": "알렉스 그리말도 가르시아",
        "pos": "LB",
        "birth": "1995.09.20",
        "country": "스페인",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "마테이스 더리흐트",
        "originName": "마테이스 더리흐트",
        "pos": "CB",
        "birth": "1999.08.12",
        "country": "네덜란드",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "E. 추포-모팅",
        "originName": "에릭 막심 추포-모팅",
        "pos": "ST",
        "birth": "1989.03.23",
        "country": "카메룬",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "알폰소 데이비스",
        "originName": "알폰소 데이비스",
        "pos": "LB",
        "birth": "2000.11.02",
        "country": "캐나다",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "요주아 키미히",
        "originName": "요주아 키미히",
        "pos": "CDM",
        "birth": "1995.02.08",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "다요 우파메카노",
        "originName": "다요 우파메카노",
        "pos": "CB",
        "birth": "1998.10.27",
        "country": "프랑스",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "모하메드 시마칸",
        "originName": "모하메드 시마칸",
        "pos": "RB",
        "birth": "2000.05.03",
        "country": "프랑스",
        "team": "RB 라이프치히"
    },
    {
        "name": "누사이르 마즈라위",
        "originName": "누사이르 마즈라위",
        "pos": "RB",
        "birth": "1997.11.14",
        "country": "모로코",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "토마스 뮐러",
        "originName": "토마스 뮐러",
        "pos": "CAM",
        "birth": "1989.09.13",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "킹슬레 코망",
        "originName": "킹슬레 코망",
        "pos": "RW",
        "birth": "1996.06.13",
        "country": "프랑스",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "해리 케인",
        "originName": "해리 케인",
        "pos": "ST",
        "birth": "1993.07.28",
        "country": "잉글랜드",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "율리안 브란트",
        "originName": "율리안 브란트",
        "pos": "CAM",
        "birth": "1996.05.02",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "세바스티앙 알레르",
        "originName": "세바스티앙 알레르",
        "pos": "ST",
        "birth": "1994.06.22",
        "country": "코트디부아르",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "토마 뫼니에",
        "originName": "토마 뫼니에",
        "pos": "RB",
        "birth": "1991.09.12",
        "country": "벨기에",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "하파엘 게헤이루",
        "originName": "하파엘 게헤이루",
        "pos": "LB",
        "birth": "1993.12.22",
        "country": "포르투갈",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "레오나르도 보누치",
        "originName": "레오나르도 보누치",
        "pos": "CB",
        "birth": "1987.05.01",
        "country": "이탈리아",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "세르주 그나브리",
        "originName": "세르주 그나브리",
        "pos": "RW",
        "birth": "1995.07.14",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "J. 무시알라",
        "originName": "자말 무시알라",
        "pos": "CAM",
        "birth": "2003.02.26",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "티모 베르너",
        "originName": "티모 베르너",
        "pos": "ST",
        "birth": "1996.03.06",
        "country": "독일",
        "team": "RB 라이프치히"
    },
    {
        "name": "카림 아데예미",
        "originName": "카림 아데예미",
        "pos": "ST",
        "birth": "2002.01.18",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "J. 블라스비히",
        "originName": "야니스 블라스비히",
        "pos": "GK",
        "birth": "1991.05.02",
        "country": "독일",
        "team": "RB 라이프치히"
    },
    {
        "name": "그레고르 코벨",
        "originName": "그레고르 코벨",
        "pos": "GK",
        "birth": "1997.12.06",
        "country": "스위스",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "N. 슐로터베크",
        "originName": "니코 슐로터베크",
        "pos": "CB",
        "birth": "1999.12.01",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "니클라스 쥘레",
        "originName": "니클라스 쥘레",
        "pos": "CB",
        "birth": "1995.09.03",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "마누엘 노이어",
        "originName": "마누엘 노이어",
        "pos": "GK",
        "birth": "1986.03.27",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "마츠 후멜스",
        "originName": "마츠 후멜스",
        "pos": "CB",
        "birth": "1988.12.16",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "다비트 라움",
        "originName": "다비트 라움",
        "pos": "LB",
        "birth": "1998.04.22",
        "country": "독일",
        "team": "RB 라이프치히"
    },
    {
        "name": "크사버 슐라거",
        "originName": "크사버 슐라거",
        "pos": "CDM",
        "birth": "1997.09.28",
        "country": "오스트리아",
        "team": "RB 라이프치히"
    },
    {
        "name": "율리안 바이글",
        "originName": "율리안 바이글",
        "pos": "CDM",
        "birth": "1995.09.08",
        "country": "독일",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "살리흐 외즈잔",
        "originName": "살리흐 외즈잔",
        "pos": "CDM",
        "birth": "1998.01.11",
        "country": "튀르키예",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "A. 마이어",
        "originName": "알렉산더 마이어",
        "pos": "GK",
        "birth": "1991.04.13",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "지오바니 레이나",
        "originName": "지오바니 레이나",
        "pos": "LM",
        "birth": "2002.11.13",
        "country": "미국",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "F. 비르츠",
        "originName": "플로리안 비르츠",
        "pos": "CAM",
        "birth": "2003.05.03",
        "country": "독일",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "막시밀리안 뵈버",
        "originName": "막시밀리안 뵈버",
        "pos": "CB",
        "birth": "1998.02.04",
        "country": "오스트리아",
        "team": "리즈 유나이티드"
    },
    {
        "name": "J. 스타니시치",
        "originName": "요시프 스타니시치",
        "pos": "LB",
        "birth": "2000.04.02",
        "country": "크로아티아",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "A. 크나우프",
        "originName": "안스가르 크나우프",
        "pos": "LWB",
        "birth": "2002.01.10",
        "country": "독일",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "브렌던 에런슨",
        "originName": "브렌던 에런슨",
        "pos": "CM",
        "birth": "2000.10.22",
        "country": "미국",
        "team": "리즈 유나이티드"
    },
    {
        "name": "니코 엘베디",
        "originName": "니코 엘베디",
        "pos": "CB",
        "birth": "1996.09.30",
        "country": "스위스",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "N. 자이발트",
        "originName": "니콜라스 자이발트",
        "pos": "LM",
        "birth": "2001.05.04",
        "country": "오스트리아",
        "team": "RB 라이프치히"
    },
    {
        "name": "마르코 로이스",
        "originName": "마르코 로이스",
        "pos": "CAM",
        "birth": "1989.05.31",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "알라산 플레아",
        "originName": "알라산 플레아",
        "pos": "ST",
        "birth": "1993.03.10",
        "country": "프랑스",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "나비 케이타",
        "originName": "나비 케이타",
        "pos": "CM",
        "birth": "1995.02.10",
        "country": "기니",
        "team": "베르더 브레멘"
    },
    {
        "name": "Y. 무코코",
        "originName": "유수파 무코코",
        "pos": "ST",
        "birth": "2004.11.20",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "아마두 아이다라",
        "originName": "아마두 아이다라",
        "pos": "CDM",
        "birth": "1998.01.31",
        "country": "말리",
        "team": "RB 라이프치히"
    },
    {
        "name": "빌리 오르반",
        "originName": "빌리 오르반",
        "pos": "CB",
        "birth": "1992.11.03",
        "country": "헝가리",
        "team": "RB 라이프치히"
    },
    {
        "name": "케빈 트라프",
        "originName": "케빈 트라프",
        "pos": "GK",
        "birth": "1990.07.08",
        "country": "독일",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "스벤 울라이히",
        "originName": "스벤 울라이히",
        "pos": "GK",
        "birth": "1988.08.03",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "로빈 고젠스",
        "originName": "로빈 고젠스",
        "pos": "LWB",
        "birth": "1994.07.05",
        "country": "독일",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "마르셀 자비처",
        "originName": "마르셀 자비처",
        "pos": "CAM",
        "birth": "1994.03.17",
        "country": "오스트리아",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "디오구 레이트",
        "originName": "디오구 필리프 핀투 레이트",
        "pos": "CB",
        "birth": "1999.01.23",
        "country": "포르투갈",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "라미 벤세바이니",
        "originName": "라미 벤세바이니",
        "pos": "LB",
        "birth": "1995.04.16",
        "country": "알제리",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "F. 노이하우스",
        "originName": "플로리안 노이하우스",
        "pos": "CM",
        "birth": "1997.03.16",
        "country": "독일",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "제레미 프림퐁",
        "originName": "제레미 프림퐁",
        "pos": "RWB",
        "birth": "2000.12.10",
        "country": "네덜란드",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "L. 오펜다",
        "originName": "로이스 오펜다",
        "pos": "ST",
        "birth": "2000.02.16",
        "country": "벨기에",
        "team": "RB 라이프치히"
    },
    {
        "name": "하세베 마코토",
        "originName": "하세베 마코토",
        "pos": "CB",
        "birth": "1984.01.18",
        "country": "일본",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "제바스티안 로데",
        "originName": "제바스티안 로데",
        "pos": "CDM",
        "birth": "1990.10.11",
        "country": "독일",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "엠레 잔",
        "originName": "엠레 잔",
        "pos": "CDM",
        "birth": "1994.01.12",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "마티아스 긴터",
        "originName": "마티아스 긴터",
        "pos": "CB",
        "birth": "1994.01.19",
        "country": "독일",
        "team": "SC 프라이부르크"
    },
    {
        "name": "에밀 포르스베리",
        "originName": "에밀 포르스베리",
        "pos": "CAM",
        "birth": "1991.10.23",
        "country": "스웨덴",
        "team": "RB 라이프치히"
    },
    {
        "name": "다니 올모",
        "originName": "다니엘 올오 카르바할",
        "pos": "CAM",
        "birth": "1998.05.07",
        "country": "스페인",
        "team": "RB 라이프치히"
    },
    {
        "name": "니클라스 퓔크루크",
        "originName": "니클라스 퓔크루크",
        "pos": "ST",
        "birth": "1993.02.09",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "파비우 카르발류",
        "originName": "파비우 레안드루 카르발류",
        "pos": "CAM",
        "birth": "2002.08.30",
        "country": "포르투갈",
        "team": "리버풀"
    },
    {
        "name": "도니얼 말런",
        "originName": "도니얼 말런",
        "pos": "RM",
        "birth": "1999.01.19",
        "country": "네덜란드",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "K. 야키치",
        "originName": "크리스티얀 야키치",
        "pos": "RWB",
        "birth": "1997.05.14",
        "country": "크로아티아",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "로베르트 안드리히",
        "originName": "로베르트 안드리히",
        "pos": "CDM",
        "birth": "1994.09.22",
        "country": "독일",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "쿤 카스테일스",
        "originName": "쿤 카스테일스",
        "pos": "GK",
        "birth": "1992.06.25",
        "country": "벨기에",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "마리오 괴체",
        "originName": "마리오 괴체",
        "pos": "CAM",
        "birth": "1992.06.03",
        "country": "독일",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "M. 텔",
        "originName": "마티스 텔",
        "pos": "ST",
        "birth": "2005.04.27",
        "country": "프랑스",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "에드몽 탑소바",
        "originName": "에드몽 탑소바",
        "pos": "CB",
        "birth": "1999.02.02",
        "country": "부르키나파소",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "H. 스몰치치",
        "originName": "흐르보예 스몰치치",
        "pos": "CB",
        "birth": "2000.08.17",
        "country": "크로아티아",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "투타",
        "originName": "루카스 시우바 멜루",
        "pos": "CB",
        "birth": "1999.07.04",
        "country": "브라질",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "요나탄 타",
        "originName": "요나탄 타",
        "pos": "CB",
        "birth": "1996.02.11",
        "country": "독일",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "페테르 굴라치",
        "originName": "페테르 굴라치",
        "pos": "GK",
        "birth": "1990.05.06",
        "country": "헝가리",
        "team": "RB 라이프치히"
    },
    {
        "name": "A. 크라마리치",
        "originName": "안드레이 크라마리치",
        "pos": "CF",
        "birth": "1991.06.19",
        "country": "크로아티아",
        "team": "TSG 호펜하임"
    },
    {
        "name": "그라니트 자카",
        "originName": "그라니트 자카",
        "pos": "CM",
        "birth": "1992.09.27",
        "country": "스위스",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "케빈 폴란트",
        "originName": "케빈 폴란트",
        "pos": "ST",
        "birth": "1992.07.30",
        "country": "독일",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "콘라트 라이머",
        "originName": "콘라트 라이머",
        "pos": "CDM",
        "birth": "1997.05.27",
        "country": "오스트리아",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "요나스 호프만",
        "originName": "요나스 호프만",
        "pos": "CM",
        "birth": "1992.07.14",
        "country": "독일",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "올리버 바우만",
        "originName": "올리버 바우만",
        "pos": "GK",
        "birth": "1990.06.02",
        "country": "독일",
        "team": "TSG 호펜하임"
    },
    {
        "name": "파트리크 시크",
        "originName": "파트리크 시크",
        "pos": "ST",
        "birth": "1996.01.24",
        "country": "체코",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "루카시 흐라데키",
        "originName": "루카시 흐라데키",
        "pos": "GK",
        "birth": "1989.11.24",
        "country": "핀란드",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "니코 슐츠",
        "originName": "니코 슐츠",
        "pos": "LWB",
        "birth": "1993.04.01",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "하비 마르티네스",
        "originName": "하비에르 마르티네스 아히나가",
        "pos": "CDM",
        "birth": "1988.09.02",
        "country": "스페인",
        "team": "카타르 SC"
    },
    {
        "name": "F. 디마르코",
        "originName": "페데리코 디마르코",
        "pos": "LWB",
        "birth": "1997.11.10",
        "country": "이탈리아",
        "team": "인테르"
    },
    {
        "name": "조반니 디로렌초",
        "originName": "조반니 디로렌초",
        "pos": "RB",
        "birth": "1993.08.04",
        "country": "이탈리아",
        "team": "나폴리 FC"
    },
    {
        "name": "A. 바스토니",
        "originName": "알레산드로 바스토니",
        "pos": "CB",
        "birth": "1999.04.13",
        "country": "이탈리아",
        "team": "인테르"
    },
    {
        "name": "하파엘 레앙",
        "originName": "하파엘 다 콘세이상 레앙",
        "pos": "LW",
        "birth": "1999.06.10",
        "country": "포르투갈",
        "team": "AC 밀란"
    },
    {
        "name": "하칸 찰하놀루",
        "originName": "하칸 찰하놀루",
        "pos": "CM",
        "birth": "1994.02.08",
        "country": "튀르키예",
        "team": "인테르"
    },
    {
        "name": "K. 크바라츠헬리아",
        "originName": "흐비차 크바라츠헬리아",
        "pos": "LW",
        "birth": "2001.02.12",
        "country": "조지아",
        "team": "나폴리 FC"
    },
    {
        "name": "라우타로 마르티네스",
        "originName": "라우타로 마르티네스",
        "pos": "ST",
        "birth": "1997.08.22",
        "country": "아르헨티나",
        "team": "인테르"
    },
    {
        "name": "P. 지엘린스키",
        "originName": "피오트르 지엘린스키",
        "pos": "CAM",
        "birth": "1994.05.20",
        "country": "폴란드",
        "team": "나폴리 FC"
    },
    {
        "name": "올리비에 지루",
        "originName": "올리비에 지루",
        "pos": "ST",
        "birth": "1986.09.30",
        "country": "프랑스",
        "team": "AC 밀란"
    },
    {
        "name": "테오 에르난데스",
        "originName": "테오 에르난데스",
        "pos": "LB",
        "birth": "1997.10.06",
        "country": "프랑스",
        "team": "AC 밀란"
    },
    {
        "name": "S. 로보트카",
        "originName": "스타니슬라프 로보트카",
        "pos": "CM",
        "birth": "1994.11.25",
        "country": "슬로바키아",
        "team": "나폴리 FC"
    },
    {
        "name": "G. 라스파도리",
        "originName": "자코모 라스파도리",
        "pos": "CF",
        "birth": "2000.02.18",
        "country": "이탈리아",
        "team": "나폴리 FC"
    },
    {
        "name": "A. 잠보 앙기사",
        "originName": "앙드레-프랑크 잠보 앙기사",
        "pos": "CM",
        "birth": "1995.11.16",
        "country": "카메룬",
        "team": "나폴리 FC"
    },
    {
        "name": "조바니 시메오네",
        "originName": "조바니 시메오네",
        "pos": "ST",
        "birth": "1995.07.05",
        "country": "아르헨티나",
        "team": "나폴리 FC"
    },
    {
        "name": "헨릭 미키타리안",
        "originName": "헨릭 미키타리안",
        "pos": "CM",
        "birth": "1989.01.21",
        "country": "아르메니아",
        "team": "인테르"
    },
    {
        "name": "니콜로 바렐라",
        "originName": "니콜로 바렐라",
        "pos": "CM",
        "birth": "1997.02.07",
        "country": "이탈리아",
        "team": "인테르"
    },
    {
        "name": "F. 아체르비",
        "originName": "프란체스코 아체르비",
        "pos": "CB",
        "birth": "1988.02.10",
        "country": "이탈리아",
        "team": "인테르"
    },
    {
        "name": "알렉스 메레트",
        "originName": "알렉스 메레트",
        "pos": "GK",
        "birth": "1997.03.22",
        "country": "이탈리아",
        "team": "나폴리 FC"
    },
    {
        "name": "아미르 라흐마니",
        "originName": "아미르 라흐마니",
        "pos": "CB",
        "birth": "1994.02.24",
        "country": "코소보",
        "team": "나폴리 FC"
    },
    {
        "name": "A. 살레마커르스",
        "originName": "알렉시 살레마커르스",
        "pos": "RW",
        "birth": "1999.06.27",
        "country": "벨기에",
        "team": "AC 밀란"
    },
    {
        "name": "이스마엘 벤나세르",
        "originName": "이스마엘 벤나세르",
        "pos": "CDM",
        "birth": "1997.12.01",
        "country": "알제리",
        "team": "AC 밀란"
    },
    {
        "name": "P. 칼룰루",
        "originName": "피에르 칼룰루",
        "pos": "CB",
        "birth": "2000.06.05",
        "country": "프랑스",
        "team": "AC 밀란"
    },
    {
        "name": "가마다 다이치",
        "originName": "가마다 다이치",
        "pos": "CAM",
        "birth": "1996.08.05",
        "country": "일본",
        "team": "라티움"
    },
    {
        "name": "L. 외스티고르",
        "originName": "레오 외스티고르",
        "pos": "CB",
        "birth": "1999.11.28",
        "country": "노르웨이",
        "team": "나폴리 FC"
    },
    {
        "name": "덴젤 둠프리스",
        "originName": "덴젤 둠프리스",
        "pos": "RWB",
        "birth": "1996.04.18",
        "country": "네덜란드",
        "team": "인테르"
    },
    {
        "name": "빅터 오시멘",
        "originName": "빅터 오시멘",
        "pos": "ST",
        "birth": "1998.12.29",
        "country": "나이지리아",
        "team": "나폴리 FC"
    },
    {
        "name": "뱅자맹 파바르",
        "originName": "뱅자맹 파바르",
        "pos": "CB",
        "birth": "1996.03.28",
        "country": "프랑스",
        "team": "인테르"
    },
    {
        "name": "페데리코 키에사",
        "originName": "페데리코 키에사",
        "pos": "RW",
        "birth": "1997.10.25",
        "country": "이탈리아",
        "team": "유벤투스"
    },
    {
        "name": "M. 올리베라",
        "originName": "마티아스 올리베라",
        "pos": "LB",
        "birth": "1997.10.31",
        "country": "우루과이",
        "team": "나폴리 FC"
    },
    {
        "name": "R. 크리스텐센",
        "originName": "라스무스 크리스텐센",
        "pos": "RB",
        "birth": "1997.07.11",
        "country": "덴마크",
        "team": "리즈 유나이티드"
    },
    {
        "name": "노아 오카포르",
        "originName": "노아 오카포르",
        "pos": "ST",
        "birth": "2000.05.24",
        "country": "스위스",
        "team": "AC 밀란"
    },
    {
        "name": "알렉스 산드루",
        "originName": "알렉스 산드루 로부 시우바",
        "pos": "LB",
        "birth": "1991.01.26",
        "country": "브라질",
        "team": "유벤투스"
    },
    {
        "name": "아르투로 비달",
        "originName": "아르투로 비달",
        "pos": "CM",
        "birth": "1987.05.22",
        "country": "칠레",
        "team": "인테르"
    },
    {
        "name": "마리우 후이",
        "originName": "마리우 후이 실바 두아르트",
        "pos": "LB",
        "birth": "1991.05.27",
        "country": "포르투갈",
        "team": "나폴리 FC"
    },
    {
        "name": "에반 은디카",
        "originName": "에반 은디카",
        "pos": "CB",
        "birth": "1999.08.20",
        "country": "프랑스",
        "team": "로마 FC"
    },
    {
        "name": "시몬 키에르",
        "originName": "시몬 키에르",
        "pos": "CB",
        "birth": "1989.03.26",
        "country": "덴마크",
        "team": "AC 밀란"
    },
    {
        "name": "루벤 로프터스-칙",
        "originName": "루벤 로프터스-칙",
        "pos": "CM",
        "birth": "1996.01.23",
        "country": "잉글랜드",
        "team": "AC 밀란"
    },
    {
        "name": "마이크 메냥",
        "originName": "마이크 메냥",
        "pos": "GK",
        "birth": "1995.07.03",
        "country": "프랑스",
        "team": "AC 밀란"
    },
    {
        "name": "스테판 더브레이",
        "originName": "스테판 더브레이",
        "pos": "CB",
        "birth": "1992.02.05",
        "country": "네덜란드",
        "team": "인테르"
    },
    {
        "name": "파울로 디발라",
        "originName": "파울로 디발라",
        "pos": "CF",
        "birth": "1993.11.15",
        "country": "아르헨티나",
        "team": "로마 FC"
    },
    {
        "name": "우셈 아우아르",
        "originName": "우셈 아우아르",
        "pos": "CM",
        "birth": "1998.06.30",
        "country": "프랑스",
        "team": "로마 FC"
    },
    {
        "name": "마테오 다르미안",
        "originName": "마테오 다르미안",
        "pos": "RWB",
        "birth": "1989.12.02",
        "country": "이탈리아",
        "team": "인테르"
    },
    {
        "name": "사미르 한다노비치",
        "originName": "사미르 한다노비치",
        "pos": "GK",
        "birth": "1984.07.14",
        "country": "슬로베니아",
        "team": "인테르"
    },
    {
        "name": "후안 콰드라도",
        "originName": "후안 콰드라도",
        "pos": "RB",
        "birth": "1988.05.26",
        "country": "콜롬비아",
        "team": "인테르"
    },
    {
        "name": "Z. 첼리크",
        "originName": "제키 첼리크",
        "pos": "RB",
        "birth": "1997.02.17",
        "country": "튀르키예",
        "team": "로마 FC"
    },
    {
        "name": "마테오 폴리타노",
        "originName": "마테오 폴리타노",
        "pos": "RW",
        "birth": "1993.08.03",
        "country": "이탈리아",
        "team": "나폴리 FC"
    },
    {
        "name": "J. 린드스트룀",
        "originName": "예스퍼 린드스트룀",
        "pos": "CAM",
        "birth": "2000.02.29",
        "country": "덴마크",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "다비데 칼라브리아",
        "originName": "다비데 칼라브리아",
        "pos": "RB",
        "birth": "1996.12.06",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "웨스턴 매케니",
        "originName": "웨스턴 매케니",
        "pos": "CM",
        "birth": "1998.08.28",
        "country": "미국",
        "team": "유벤투스"
    },
    {
        "name": "라데 크루니치",
        "originName": "라데 크루니치",
        "pos": "CM",
        "birth": "1993.10.07",
        "country": "보스니아 헤르체고비나",
        "team": "AC 밀란"
    },
    {
        "name": "아르만도 이초",
        "originName": "아르만도 이초",
        "pos": "CB",
        "birth": "1992.03.02",
        "country": "이탈리아",
        "team": "토리노"
    },
    {
        "name": "치로 임모빌레",
        "originName": "치로 임모빌레",
        "pos": "ST",
        "birth": "1990.02.20",
        "country": "이탈리아",
        "team": "라티움"
    },
    {
        "name": "다닐루",
        "originName": "다닐루 루이스 다 시우바",
        "pos": "RB",
        "birth": "1991.07.15",
        "country": "브라질",
        "team": "유벤투스"
    },
    {
        "name": "마누엘 로카텔리",
        "originName": "마누엘 로카텔리",
        "pos": "CDM",
        "birth": "1998.01.08",
        "country": "이탈리아",
        "team": "유벤투스"
    },
    {
        "name": "로멜루 루카쿠",
        "originName": "로멜루 루카쿠",
        "pos": "ST",
        "birth": "1993.05.13",
        "country": "벨기에",
        "team": "첼시"
    },
    {
        "name": "요시프 일리치치",
        "originName": "요시프 일리치치",
        "pos": "CF",
        "birth": "1988.01.29",
        "country": "슬로베니아",
        "team": "NK 마리보르"
    },
    {
        "name": "마르쿠스 튀람",
        "originName": "마르쿠스 튀람",
        "pos": "LW",
        "birth": "1997.08.06",
        "country": "프랑스",
        "team": "인테르"
    },
    {
        "name": "도메니코 베라르디",
        "originName": "도메니코 베라르디",
        "pos": "RW",
        "birth": "1994.08.01",
        "country": "이탈리아",
        "team": "사수올로"
    },
    {
        "name": "마티아 데실리오",
        "originName": "마티아 데실리오",
        "pos": "RB",
        "birth": "1992.10.20",
        "country": "이탈리아",
        "team": "유벤투스"
    },
    {
        "name": "베라트 짐시티",
        "originName": "베라트 짐시티",
        "pos": "CB",
        "birth": "1993.02.19",
        "country": "알바니아",
        "team": "베르가모 칼초"
    },
    {
        "name": "두반 사파타",
        "originName": "두반 사파타",
        "pos": "ST",
        "birth": "1991.04.01",
        "country": "콜롬비아",
        "team": "베르가모 칼초"
    },
    {
        "name": "플로리앙 토뱅",
        "originName": "플로리앙 토뱅",
        "pos": "RM",
        "birth": "1993.01.26",
        "country": "프랑스",
        "team": "우디네세"
    },
    {
        "name": "니콜라스 곤살레스",
        "originName": "니콜라스 곤살레스",
        "pos": "RW",
        "birth": "1998.04.06",
        "country": "아르헨티나",
        "team": "피오렌티나"
    },
    {
        "name": "피카요 토모리",
        "originName": "피카요 토모리",
        "pos": "CB",
        "birth": "1997.12.19",
        "country": "잉글랜드",
        "team": "AC 밀란"
    },
    {
        "name": "아드리앙 라비오",
        "originName": "아드리앙 라비오",
        "pos": "CM",
        "birth": "1995.04.03",
        "country": "프랑스",
        "team": "유벤투스"
    },
    {
        "name": "브레메르",
        "originName": "글레이송 브레메르 시우바 나시멘투",
        "pos": "CB",
        "birth": "1997.03.18",
        "country": "브라질",
        "team": "유벤투스"
    },
    {
        "name": "한스 하테부르",
        "originName": "한스 하테부르",
        "pos": "RM",
        "birth": "1994.01.09",
        "country": "네덜란드",
        "team": "베르가모 칼초"
    },
    {
        "name": "잔루카 만치니",
        "originName": "잔루카 만치니",
        "pos": "CB",
        "birth": "1996.04.17",
        "country": "이탈리아",
        "team": "로마 FC"
    },
    {
        "name": "톰마소 포베가",
        "originName": "톰마소 포베가",
        "pos": "CDM",
        "birth": "1999.07.15",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "얀 조머",
        "originName": "얀 조머",
        "pos": "GK",
        "birth": "1988.12.17",
        "country": "스위스",
        "team": "인테르"
    },
    {
        "name": "보이치에흐 슈체스니",
        "originName": "보이치에흐 슈체스니",
        "pos": "GK",
        "birth": "1990.04.18",
        "country": "폴란드",
        "team": "유벤투스"
    },
    {
        "name": "필리프 코스티치",
        "originName": "필리프 코스티치",
        "pos": "LM",
        "birth": "1992.11.01",
        "country": "세르비아",
        "team": "유벤투스"
    },
    {
        "name": "마리오 파샬리치",
        "originName": "마리오 파샬리치",
        "pos": "CM",
        "birth": "1995.02.09",
        "country": "크로아티아",
        "team": "베르가모 칼초"
    },
    {
        "name": "A. 사나브리아",
        "originName": "안토니오 사나브리아",
        "pos": "ST",
        "birth": "1996.03.04",
        "country": "파라과이",
        "team": "토리노"
    },
    {
        "name": "크리스천 풀리식",
        "originName": "크리스천 풀리식",
        "pos": "RW",
        "birth": "1998.09.18",
        "country": "미국",
        "team": "AC 밀란"
    },
    {
        "name": "태미 에이브러햄",
        "originName": "태미 에이브러햄",
        "pos": "ST",
        "birth": "1997.10.02",
        "country": "잉글랜드",
        "team": "로마 FC"
    },
    {
        "name": "데이비 클라선",
        "originName": "데이비 클라선",
        "pos": "CM",
        "birth": "1993.02.21",
        "country": "네덜란드",
        "team": "인테르"
    },
    {
        "name": "루이스 알베르토",
        "originName": "루이스 알베르토 로메로 알콘첼",
        "pos": "CAM",
        "birth": "1992.09.28",
        "country": "스페인",
        "team": "라티움"
    },
    {
        "name": "안드레아 라노키아",
        "originName": "안드레아 라노키아",
        "pos": "CB",
        "birth": "1988.02.16",
        "country": "이탈리아",
        "team": "AC 몬차"
    },
    {
        "name": "두샨 블라호비치",
        "originName": "두샨 블라호비치",
        "pos": "ST",
        "birth": "2000.01.28",
        "country": "세르비아",
        "team": "유벤투스"
    },
    {
        "name": "루카 요비치",
        "originName": "루카 요비치",
        "pos": "ST",
        "birth": "1997.12.23",
        "country": "세르비아",
        "team": "AC 밀란"
    },
    {
        "name": "마티아 페린",
        "originName": "마티아 페린",
        "pos": "GK",
        "birth": "1992.11.10",
        "country": "이탈리아",
        "team": "유벤투스"
    },
    {
        "name": "헤나투 산시스",
        "originName": "헤나투 주니오르 루스 산시스",
        "pos": "CM",
        "birth": "1997.08.18",
        "country": "포르투갈",
        "team": "파리 생제르맹"
    },
    {
        "name": "R. 말리노우스키",
        "originName": "루슬란 말리노우스키",
        "pos": "CF",
        "birth": "1993.05.04",
        "country": "우크라이나",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "엘리프 엘마스",
        "originName": "엘리프 엘마스",
        "pos": "CAM",
        "birth": "1999.09.24",
        "country": "북마케도니아",
        "team": "나폴리 FC"
    },
    {
        "name": "스테판 엘샤라위",
        "originName": "스테판 엘샤라위",
        "pos": "LW",
        "birth": "1992.10.27",
        "country": "이탈리아",
        "team": "로마 FC"
    },
    {
        "name": "K. 아슬라니",
        "originName": "크리스티안 아슬라니",
        "pos": "CDM",
        "birth": "2002.03.09",
        "country": "알바니아",
        "team": "인테르"
    },
    {
        "name": "기예르모 오초아",
        "originName": "기예르모 오초아",
        "pos": "GK",
        "birth": "1985.07.13",
        "country": "멕시코",
        "team": "살레르니타나"
    },
    {
        "name": "조나탕 이코네",
        "originName": "조나탕 이코네",
        "pos": "CAM",
        "birth": "1998.05.02",
        "country": "프랑스",
        "team": "피오렌티나"
    },
    {
        "name": "M. 아르나우토비치",
        "originName": "마르코 아르나우토비치",
        "pos": "ST",
        "birth": "1989.04.19",
        "country": "오스트리아",
        "team": "볼로냐"
    },
    {
        "name": "아르투르",
        "originName": "아르투르 엔리키 하무스 올리베이라 멜루",
        "pos": "CM",
        "birth": "1996.08.12",
        "country": "브라질",
        "team": "유벤투스"
    },
    {
        "name": "Z. 이브라히모비치",
        "originName": "즐라탄 이브라히모비치",
        "pos": "ST",
        "birth": "1981.10.03",
        "country": "스웨덴",
        "team": "AC 밀란"
    },
    {
        "name": "레모 프로일러",
        "originName": "레모 프로일러",
        "pos": "CDM",
        "birth": "1992.04.15",
        "country": "스위스",
        "team": "볼로냐"
    },
    {
        "name": "데울로페우",
        "originName": "제라르 데울로페우 라사로",
        "pos": "CF",
        "birth": "1994.03.13",
        "country": "스페인",
        "team": "우디네세"
    },
    {
        "name": "로렌초 펠레그리니",
        "originName": "로렌초 펠레그리니",
        "pos": "CAM",
        "birth": "1996.06.19",
        "country": "이탈리아",
        "team": "로마 FC"
    },
    {
        "name": "마누엘 라차리",
        "originName": "마누엘 라차리",
        "pos": "RM",
        "birth": "1993.11.29",
        "country": "이탈리아",
        "team": "라티움"
    },
    {
        "name": "A. 밀리크",
        "originName": "아르카디우시 밀리크",
        "pos": "ST",
        "birth": "1994.02.28",
        "country": "폴란드",
        "team": "유벤투스"
    },
    {
        "name": "안드레아 콘실리",
        "originName": "안드레아 콘실리",
        "pos": "GK",
        "birth": "1987.01.27",
        "country": "이탈리아",
        "team": "사수올로"
    },
    {
        "name": "마르코 베라티",
        "originName": "마르코 베라티",
        "pos": "CM",
        "birth": "1992.11.05",
        "country": "이탈리아",
        "team": "알아라비"
    },
    {
        "name": "P. 오바메양",
        "originName": "피에르-에므리크 오바메양",
        "pos": "ST",
        "birth": "1989.06.18",
        "country": "가봉",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "밀란 슈크리니아르",
        "originName": "밀란 슈크리니아르",
        "pos": "CB",
        "birth": "1995.02.11",
        "country": "슬로바키아",
        "team": "파리 생제르맹"
    },
    {
        "name": "마르코 아센시오",
        "originName": "마르코 아센시오 윌렘센",
        "pos": "RW",
        "birth": "1996.01.21",
        "country": "스페인",
        "team": "파리 생제르맹"
    },
    {
        "name": "루카스 에르난데스",
        "originName": "루카스 에르난데스",
        "pos": "CB",
        "birth": "1996.02.14",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "조너선 데이비드",
        "originName": "조너선 데이비드",
        "pos": "ST",
        "birth": "2000.01.14",
        "country": "캐나다",
        "team": "LOSC 릴"
    },
    {
        "name": "마르키뉴스",
        "originName": "마르쿠스 아오아스 코헤아",
        "pos": "CB",
        "birth": "1994.05.14",
        "country": "브라질",
        "team": "파리 생제르맹"
    },
    {
        "name": "킬리안 음바페",
        "originName": "킬리안 음바페",
        "pos": "ST",
        "birth": "1998.12.20",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "비티냐",
        "originName": "비토르 마샤두 페헤이라",
        "pos": "CM",
        "birth": "2000.02.13",
        "country": "포르투갈",
        "team": "파리 생제르맹"
    },
    {
        "name": "누누 멘데스",
        "originName": "누누 알레샨드르 타바레스 멘데스",
        "pos": "LB",
        "birth": "2002.06.19",
        "country": "포르투갈",
        "team": "파리 생제르맹"
    },
    {
        "name": "모하메드 카마라",
        "originName": "모하메드 카마라",
        "pos": "CM",
        "birth": "2000.01.06",
        "country": "말리",
        "team": "AS 모나코"
    },
    {
        "name": "R. 콜로 무아니",
        "originName": "란달 콜로 무아니",
        "pos": "ST",
        "birth": "1998.12.05",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "A. 실라",
        "originName": "아바카르 실라",
        "pos": "CB",
        "birth": "2002.12.25",
        "country": "코트디부아르",
        "team": "스트라스부르 알자스"
    },
    {
        "name": "티아구 잘로",
        "originName": "티아구 에마누엘 엠발로 잘로",
        "pos": "CB",
        "birth": "2000.04.09",
        "country": "포르투갈",
        "team": "LOSC 릴"
    },
    {
        "name": "잔루이지 돈나룸마",
        "originName": "잔루이지 돈나룸마",
        "pos": "GK",
        "birth": "1999.02.25",
        "country": "이탈리아",
        "team": "파리 생제르맹"
    },
    {
        "name": "아슈라프 하키미",
        "originName": "아슈라프 하키미",
        "pos": "RB",
        "birth": "1998.11.04",
        "country": "모로코",
        "team": "파리 생제르맹"
    },
    {
        "name": "뱅자맹 앙드레",
        "originName": "뱅자맹 앙드레",
        "pos": "CDM",
        "birth": "1990.08.03",
        "country": "프랑스",
        "team": "LOSC 릴"
    },
    {
        "name": "호아킨 코레아",
        "originName": "호아킨 코레아",
        "pos": "CF",
        "birth": "1994.08.13",
        "country": "아르헨티나",
        "team": "인테르"
    },
    {
        "name": "케일러 나바스",
        "originName": "케일러 나바스",
        "pos": "GK",
        "birth": "1986.12.15",
        "country": "코스타리카",
        "team": "파리 생제르맹"
    },
    {
        "name": "데니스 자카리아",
        "originName": "데니스 자카리아",
        "pos": "CDM",
        "birth": "1996.11.20",
        "country": "스위스",
        "team": "AS 모나코"
    },
    {
        "name": "샹셀 음벰바",
        "originName": "샹셀 음벰바",
        "pos": "CB",
        "birth": "1994.08.08",
        "country": "콩고 민주 공화국",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "에인절 고메스",
        "originName": "에인절 고메스",
        "pos": "LM",
        "birth": "2000.08.31",
        "country": "잉글랜드",
        "team": "LOSC 릴"
    },
    {
        "name": "우스만 뎀벨레",
        "originName": "우스만 뎀벨레",
        "pos": "RW",
        "birth": "1997.05.15",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "압두 디알로",
        "originName": "압두 디알로",
        "pos": "CB",
        "birth": "1996.05.04",
        "country": "세네갈",
        "team": "알아라비"
    },
    {
        "name": "제프리 콘도그비아",
        "originName": "제프리 콘도그비아",
        "pos": "CM",
        "birth": "1993.02.15",
        "country": "중앙아프리카 공화국",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "유세프 아탈",
        "originName": "유세프 아탈",
        "pos": "RB",
        "birth": "1996.05.17",
        "country": "알제리",
        "team": "OGC 니스"
    },
    {
        "name": "제롬 보아텡",
        "originName": "제롬 보아텡",
        "pos": "CB",
        "birth": "1988.09.03",
        "country": "독일",
        "team": "올랭피크 리옹"
    },
    {
        "name": "프레스넬 킴펨베",
        "originName": "프레스넬 킴펨베",
        "pos": "CB",
        "birth": "1995.08.13",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "살바토레 시리구",
        "originName": "살바토레 시리구",
        "pos": "GK",
        "birth": "1987.01.12",
        "country": "이탈리아",
        "team": "OGC 니스"
    },
    {
        "name": "브라이스 삼바",
        "originName": "브라이스 삼바",
        "pos": "GK",
        "birth": "1994.04.25",
        "country": "프랑스",
        "team": "RC 랑스"
    },
    {
        "name": "케니 랄라",
        "originName": "케니 랄라",
        "pos": "RWB",
        "birth": "1991.10.03",
        "country": "프랑스",
        "team": "스타드 브레스트 29"
    },
    {
        "name": "안토니 로페스",
        "originName": "안토니 로페스",
        "pos": "GK",
        "birth": "1990.10.01",
        "country": "포르투갈",
        "team": "올랭피크 리옹"
    },
    {
        "name": "N. 탈리아피코",
        "originName": "니콜라스 탈리아피코",
        "pos": "LB",
        "birth": "1992.08.31",
        "country": "아르헨티나",
        "team": "올랭피크 리옹"
    },
    {
        "name": "치아구 멘지스",
        "originName": "치아구 엔히키 멘지스 히베이루",
        "pos": "CDM",
        "birth": "1992.03.15",
        "country": "브라질",
        "team": "알라이얀"
    },
    {
        "name": "위삼 벤예데르",
        "originName": "위삼 벤예데르",
        "pos": "ST",
        "birth": "1990.08.12",
        "country": "프랑스",
        "team": "AS 모나코"
    },
    {
        "name": "코랑탕 톨리소",
        "originName": "코랑탕 톨리소",
        "pos": "CM",
        "birth": "1994.08.03",
        "country": "프랑스",
        "team": "올랭피크 리옹"
    },
    {
        "name": "테지 사바니에",
        "originName": "테지 사바니에",
        "pos": "CM",
        "birth": "1991.12.22",
        "country": "프랑스",
        "team": "몽펠리에 HSC"
    },
    {
        "name": "헤낭 로지",
        "originName": "헤낭 아우구스투 로지 두스산투스",
        "pos": "LB",
        "birth": "1998.04.08",
        "country": "브라질",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "뱅자맹 부리조",
        "originName": "뱅자맹 부리조",
        "pos": "RW",
        "birth": "1994.01.14",
        "country": "프랑스",
        "team": "스타드 렌"
    },
    {
        "name": "앙디 들로르",
        "originName": "앙디 들로르",
        "pos": "ST",
        "birth": "1991.10.09",
        "country": "프랑스",
        "team": "움살랄 SC"
    },
    {
        "name": "알렉상드르 라카제트",
        "originName": "알렉상드르 라카제트",
        "pos": "ST",
        "birth": "1991.05.28",
        "country": "프랑스",
        "team": "올랭피크 리옹"
    },
    {
        "name": "미나미노 다쿠미",
        "originName": "미나미노 다쿠미",
        "pos": "CF",
        "birth": "1995.01.16",
        "country": "일본",
        "team": "AS 모나코"
    },
    {
        "name": "다닐루 페레이라",
        "originName": "다닐루 루이스 엘리우 페레이라",
        "pos": "CB",
        "birth": "1991.09.09",
        "country": "포르투갈",
        "team": "파리 생제르맹"
    },
    {
        "name": "파우 로페스",
        "originName": "파우 로페스 사바타",
        "pos": "GK",
        "birth": "1994.12.13",
        "country": "스페인",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "와흐비 카즈리",
        "originName": "와흐비 카즈리",
        "pos": "ST",
        "birth": "1991.02.08",
        "country": "튀니지",
        "team": "몽펠리에 HSC"
    },
    {
        "name": "필리프 쾬",
        "originName": "필리프 쾬",
        "pos": "GK",
        "birth": "1998.04.02",
        "country": "스위스",
        "team": "AS 모나코"
    },
    {
        "name": "가에탕 라보르드",
        "originName": "가에탕 라보르드",
        "pos": "ST",
        "birth": "1994.05.03",
        "country": "프랑스",
        "team": "OGC 니스"
    },
    {
        "name": "조르당 베레투",
        "originName": "조르당 베레투",
        "pos": "CM",
        "birth": "1993.03.01",
        "country": "프랑스",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "마츠 셀스",
        "originName": "마츠 셀스",
        "pos": "GK",
        "birth": "1992.02.26",
        "country": "벨기에",
        "team": "스트라스부르 알자스"
    },
    {
        "name": "뱅자맹 르콩트",
        "originName": "뱅자맹 르콩트",
        "pos": "GK",
        "birth": "1991.04.26",
        "country": "프랑스",
        "team": "몽펠리에 HSC"
    },
    {
        "name": "발랑탕 롱지에",
        "originName": "발랑탕 롱지에",
        "pos": "CDM",
        "birth": "1994.12.07",
        "country": "프랑스",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "마르탱 테리에",
        "originName": "마르탱 테리에",
        "pos": "LM",
        "birth": "1997.03.04",
        "country": "프랑스",
        "team": "스타드 렌"
    },
    {
        "name": "P. 프랑코프스키",
        "originName": "프제미스와프 프랑코프스키",
        "pos": "RWB",
        "birth": "1995.04.12",
        "country": "폴란드",
        "team": "RC 랑스"
    },
    {
        "name": "K. 튀람",
        "originName": "케프렌 튀람",
        "pos": "CM",
        "birth": "2001.03.26",
        "country": "프랑스",
        "team": "OGC 니스"
    },
    {
        "name": "M. 우가르테",
        "originName": "마누엘 우가르테",
        "pos": "CDM",
        "birth": "2001.04.11",
        "country": "우루과이",
        "team": "파리 생제르맹"
    },
    {
        "name": "파쿤도 메디나",
        "originName": "파쿤도 메디나",
        "pos": "CB",
        "birth": "1999.05.28",
        "country": "아르헨티나",
        "team": "RC 랑스"
    },
    {
        "name": "레뱅 퀴르자와",
        "originName": "레뱅 퀴르자와",
        "pos": "LB",
        "birth": "1992.09.04",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "유수프 포파나",
        "originName": "유수프 포파나",
        "pos": "CDM",
        "birth": "1999.01.10",
        "country": "프랑스",
        "team": "AS 모나코"
    },
    {
        "name": "곤살루 하무스",
        "originName": "곤살루 마티아스 하무스",
        "pos": "ST",
        "birth": "2001.06.20",
        "country": "포르투갈",
        "team": "SL 벤피카"
    },
    {
        "name": "파비안 루이스",
        "originName": "파비안 루이스 페냐",
        "pos": "CM",
        "birth": "1996.04.03",
        "country": "스페인",
        "team": "파리 생제르맹"
    },
    {
        "name": "네마냐 마티치",
        "originName": "네마냐 마티치",
        "pos": "CDM",
        "birth": "1988.08.01",
        "country": "세르비아",
        "team": "스타드 렌"
    },
    {
        "name": "레미 카벨라",
        "originName": "레미 카벨라",
        "pos": "CAM",
        "birth": "1990.03.08",
        "country": "프랑스",
        "team": "LOSC 릴"
    },
    {
        "name": "아민 구이리",
        "originName": "아민 구이리",
        "pos": "ST",
        "birth": "2000.02.16",
        "country": "프랑스",
        "team": "스타드 렌"
    },
    {
        "name": "디미트리 파예트",
        "originName": "디미트리 파예트",
        "pos": "CAM",
        "birth": "1987.03.29",
        "country": "프랑스",
        "team": "바스쿠 다 가마"
    },
    {
        "name": "카를로스 솔레르",
        "originName": "카를로스 솔레르 바라간",
        "pos": "CM",
        "birth": "1997.01.02",
        "country": "스페인",
        "team": "파리 생제르맹"
    },
    {
        "name": "T. 바카요코",
        "originName": "티에무에 바카요코",
        "pos": "CDM",
        "birth": "1994.08.17",
        "country": "프랑스",
        "team": "FC 로리앙"
    },
    {
        "name": "무사 시소코",
        "originName": "무사 시소코",
        "pos": "CM",
        "birth": "1989.08.16",
        "country": "프랑스",
        "team": "FC 낭트"
    },
    {
        "name": "뱅자맹 멘디",
        "originName": "뱅자맹 멘디",
        "pos": "LB",
        "birth": "1994.07.17",
        "country": "프랑스",
        "team": "FC 로리앙"
    },
    {
        "name": "노르디 무키엘레",
        "originName": "노르디 무키엘레",
        "pos": "CB",
        "birth": "1997.11.01",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "스테브 망당다",
        "originName": "스테브 망당다",
        "pos": "GK",
        "birth": "1985.03.28",
        "country": "프랑스",
        "team": "스타드 렌"
    },
    {
        "name": "알렉산드르 골로빈",
        "originName": "알렉산드르 골로빈",
        "pos": "LM",
        "birth": "1996.05.30",
        "country": "러시아",
        "team": "AS 모나코"
    },
    {
        "name": "사뮈엘 움티티",
        "originName": "사뮈엘 움티티",
        "pos": "CB",
        "birth": "1993.11.14",
        "country": "프랑스",
        "team": "LOSC 릴"
    },
    {
        "name": "조현우",
        "originName": "조현우",
        "pos": "GK",
        "birth": "1991.09.25",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "제카",
        "originName": "주제 주아킹 지 카르발류",
        "pos": "ST",
        "birth": "1997.03.06",
        "country": "브라질",
        "team": "포항 스틸러스"
    },
    {
        "name": "오베르단",
        "originName": "오베르단 알리온수 지 리마",
        "pos": "CM",
        "birth": "1995.07.30",
        "country": "브라질",
        "team": "포항 스틸러스"
    },
    {
        "name": "주민규",
        "originName": "주민규",
        "pos": "ST",
        "birth": "1990.04.13",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "바코",
        "originName": "발레리 카자이슈빌리",
        "pos": "CAM",
        "birth": "1993.01.29",
        "country": "조지아",
        "team": "울산 현대"
    },
    {
        "name": "세징야",
        "originName": "세자르 페르난두 시우바 멜루",
        "pos": "CAM",
        "birth": "1989.11.29",
        "country": "브라질",
        "team": "대구 FC"
    },
    {
        "name": "헤이스",
        "originName": "이스나이루 헤이스 시우바 모라이스",
        "pos": "LW",
        "birth": "1993.01.06",
        "country": "브라질",
        "team": "제주 유나이티드"
    },
    {
        "name": "티모",
        "originName": "티모 레체르트",
        "pos": "CB",
        "birth": "1993.05.25",
        "country": "네덜란드",
        "team": "광주 FC"
    },
    {
        "name": "오스마르",
        "originName": "오스마르 이바녜스 바르바",
        "pos": "CB",
        "birth": "1988.06.05",
        "country": "스페인",
        "team": "FC 서울"
    },
    {
        "name": "A. 그랜트",
        "originName": "알렉산더 이언 그랜트",
        "pos": "CB",
        "birth": "1994.01.23",
        "country": "호주",
        "team": "포항 스틸러스"
    },
    {
        "name": "이창근",
        "originName": "이창근",
        "pos": "GK",
        "birth": "1993.08.30",
        "country": "대한민국",
        "team": "대전 하나 시티즌"
    },
    {
        "name": "설영우",
        "originName": "설영우",
        "pos": "RB",
        "birth": "1998.12.05",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "윤빛가람",
        "originName": "윤빛가람",
        "pos": "CM",
        "birth": "1990.05.07",
        "country": "대한민국",
        "team": "수원 FC"
    },
    {
        "name": "나상호",
        "originName": "나상호",
        "pos": "RW",
        "birth": "1996.08.12",
        "country": "대한민국",
        "team": "FC 서울"
    },
    {
        "name": "제르소",
        "originName": "제르수 페르난데스",
        "pos": "LW",
        "birth": "1991.02.23",
        "country": "기니비사우",
        "team": "인천 유나이티드"
    },
    {
        "name": "백성동",
        "originName": "백성동",
        "pos": "CAM",
        "birth": "1991.08.13",
        "country": "대한민국",
        "team": "포항 스틸러스"
    },
    {
        "name": "안영규",
        "originName": "안영규",
        "pos": "CB",
        "birth": "1989.12.04",
        "country": "대한민국",
        "team": "광주 FC"
    },
    {
        "name": "이명재",
        "originName": "이명재",
        "pos": "LB",
        "birth": "1993.11.04",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "고승범",
        "originName": "고승범",
        "pos": "CM",
        "birth": "1994.04.24",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "에드가",
        "originName": "에드가르 브루누 다 시우바",
        "pos": "ST",
        "birth": "1987.01.03",
        "country": "브라질",
        "team": "대구 FC"
    },
    {
        "name": "김영권",
        "originName": "김영권",
        "pos": "CB",
        "birth": "1990.02.27",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "이승우",
        "originName": "이승우",
        "pos": "CAM",
        "birth": "1998.01.06",
        "country": "대한민국",
        "team": "수원 FC"
    },
    {
        "name": "유리",
        "originName": "비토르 코엘류 유리 조나탕",
        "pos": "ST",
        "birth": "1998.06.12",
        "country": "브라질",
        "team": "제주 유나이티드"
    },
    {
        "name": "고재현",
        "originName": "고재현",
        "pos": "CF",
        "birth": "1999.03.05",
        "country": "대한민국",
        "team": "대구 FC"
    },
    {
        "name": "박진섭",
        "originName": "박진섭",
        "pos": "CB",
        "birth": "1995.10.23",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "이순민",
        "originName": "이순민",
        "pos": "CDM",
        "birth": "1994.05.22",
        "country": "대한민국",
        "team": "광주 FC"
    },
    {
        "name": "델브리지",
        "originName": "해리슨 델브리지",
        "pos": "CB",
        "birth": "1992.03.15",
        "country": "호주",
        "team": "인천 유나이티드"
    },
    {
        "name": "두현석",
        "originName": "두현석",
        "pos": "RB",
        "birth": "1995.12.21",
        "country": "대한민국",
        "team": "광주 FC"
    },
    {
        "name": "아사니",
        "originName": "야시르 아사니",
        "pos": "RW",
        "birth": "1995.05.19",
        "country": "알바니아",
        "team": "광주 FC"
    },
    {
        "name": "에르난데스",
        "originName": "에르난지스 호드리기스 다시우바",
        "pos": "CF",
        "birth": "1999.09.02",
        "country": "브라질",
        "team": "인천 유나이티드"
    },
    {
        "name": "고영준",
        "originName": "고영준",
        "pos": "CAM",
        "birth": "2001.07.09",
        "country": "대한민국",
        "team": "포항 스틸러스"
    },
    {
        "name": "박승욱",
        "originName": "박승욱",
        "pos": "RB",
        "birth": "1997.05.07",
        "country": "대한민국",
        "team": "포항 스틸러스"
    },
    {
        "name": "정호연",
        "originName": "정호연",
        "pos": "CM",
        "birth": "2000.09.28",
        "country": "대한민국",
        "team": "광주 FC"
    },
    {
        "name": "황재원",
        "originName": "황재원",
        "pos": "RWB",
        "birth": "2002.08.16",
        "country": "대한민국",
        "team": "대구 FC"
    },
    {
        "name": "김기희",
        "originName": "김기희",
        "pos": "CB",
        "birth": "1989.07.13",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "김경민",
        "originName": "김경민",
        "pos": "GK",
        "birth": "1991.11.01",
        "country": "대한민국",
        "team": "광주 FC"
    },
    {
        "name": "김승대",
        "originName": "김승대",
        "pos": "RW",
        "birth": "1991.04.01",
        "country": "대한민국",
        "team": "포항 스틸러스"
    },
    {
        "name": "오반석",
        "originName": "오반석",
        "pos": "CB",
        "birth": "1988.05.20",
        "country": "대한민국",
        "team": "인천 유나이티드"
    },
    {
        "name": "안현범",
        "originName": "안현범",
        "pos": "RWB",
        "birth": "1994.12.21",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "하창래",
        "originName": "하창래",
        "pos": "CB",
        "birth": "1994.10.16",
        "country": "대한민국",
        "team": "포항 스틸러스"
    },
    {
        "name": "송민규",
        "originName": "송민규",
        "pos": "LW",
        "birth": "1999.09.12",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "서민우",
        "originName": "서민우",
        "pos": "CDM",
        "birth": "1998.03.12",
        "country": "대한민국",
        "team": "강원 FC"
    },
    {
        "name": "김대원",
        "originName": "김대원",
        "pos": "LW",
        "birth": "1997.02.10",
        "country": "대한민국",
        "team": "강원 FC"
    },
    {
        "name": "신진호",
        "originName": "신진호",
        "pos": "CDM",
        "birth": "1988.09.07",
        "country": "대한민국",
        "team": "인천 유나이티드"
    },
    {
        "name": "김주성",
        "originName": "김주성",
        "pos": "CB",
        "birth": "2000.12.12",
        "country": "대한민국",
        "team": "FC 서울"
    },
    {
        "name": "기성용",
        "originName": "기성용",
        "pos": "CM",
        "birth": "1989.01.24",
        "country": "대한민국",
        "team": "FC 서울"
    },
    {
        "name": "안톤",
        "originName": "안톤 크리보추크",
        "pos": "CB",
        "birth": "1998.08.20",
        "country": "아제르바이잔",
        "team": "대전 하나 시티즌"
    },
    {
        "name": "엄지성",
        "originName": "엄지성",
        "pos": "LW",
        "birth": "2002.05.09",
        "country": "대한민국",
        "team": "광주 FC"
    },
    {
        "name": "루빅손",
        "originName": "구스타브 루빅손",
        "pos": "LW",
        "birth": "1993.10.20",
        "country": "스웨덴",
        "team": "울산 현대"
    },
    {
        "name": "이기제",
        "originName": "이기제",
        "pos": "LB",
        "birth": "1991.07.09",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "주세종",
        "originName": "주세종",
        "pos": "CM",
        "birth": "1990.10.30",
        "country": "대한민국",
        "team": "대전 하나 시티즌"
    },
    {
        "name": "김동준",
        "originName": "김동준",
        "pos": "GK",
        "birth": "1994.12.19",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "김오규",
        "originName": "김오규",
        "pos": "CB",
        "birth": "1989.06.20",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "김봉수",
        "originName": "김봉수",
        "pos": "CDM",
        "birth": "1999.12.26",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "J. 아마노",
        "originName": "아마노 준",
        "pos": "CAM",
        "birth": "1991.07.19",
        "country": "일본",
        "team": "요코하마 F. 마리노스"
    },
    {
        "name": "이영재",
        "originName": "이영재",
        "pos": "CAM",
        "birth": "1994.09.13",
        "country": "대한민국",
        "team": "수원 FC"
    },
    {
        "name": "이명주",
        "originName": "이명주",
        "pos": "CM",
        "birth": "1990.04.24",
        "country": "대한민국",
        "team": "인천 유나이티드"
    },
    {
        "name": "백승호",
        "originName": "백승호",
        "pos": "CM",
        "birth": "1997.03.17",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "허용준",
        "originName": "허용준",
        "pos": "ST",
        "birth": "1993.01.08",
        "country": "대한민국",
        "team": "포항 스틸러스"
    },
    {
        "name": "김정훈",
        "originName": "김정훈",
        "pos": "GK",
        "birth": "2001.04.20",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "엄원상",
        "originName": "엄원상",
        "pos": "RW",
        "birth": "1999.01.06",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "한국영",
        "originName": "한국영",
        "pos": "CDM",
        "birth": "1990.04.19",
        "country": "대한민국",
        "team": "강원 FC"
    },
    {
        "name": "김동민",
        "originName": "김동민",
        "pos": "CB",
        "birth": "1994.08.08",
        "country": "대한민국",
        "team": "인천 유나이티드"
    },
    {
        "name": "라스",
        "originName": "라스 벨트위크",
        "pos": "ST",
        "birth": "1991.08.21",
        "country": "남아프리카공화국",
        "team": "수원 FC"
    },
    {
        "name": "팔로세비치",
        "originName": "알렉산다르 팔로체비치",
        "pos": "CAM",
        "birth": "1993.08.22",
        "country": "세르비아",
        "team": "FC 서울"
    },
    {
        "name": "최영준",
        "originName": "최영준",
        "pos": "CDM",
        "birth": "1991.12.15",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "이청용",
        "originName": "이청용",
        "pos": "CAM",
        "birth": "1988.07.02",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "불투이스",
        "originName": "데이브 뷜트하위스",
        "pos": "CB",
        "birth": "1990.06.28",
        "country": "네덜란드",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "김진수",
        "originName": "김진수",
        "pos": "LB",
        "birth": "1992.06.13",
        "country": "대한민국",
        "team": "알나스르"
    },
    {
        "name": "구스타보",
        "originName": "구스타부 다시우바 소자",
        "pos": "ST",
        "birth": "1994.03.29",
        "country": "브라질",
        "team": "전북 현대 모터스"
    },
    {
        "name": "송범근",
        "originName": "송범근",
        "pos": "GK",
        "birth": "1997.10.15",
        "country": "대한민국",
        "team": "쇼난 벨마레"
    },
    {
        "name": "양형모",
        "originName": "양형모",
        "pos": "GK",
        "birth": "1991.07.16",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "김영빈",
        "originName": "김영빈",
        "pos": "CB",
        "birth": "1991.09.20",
        "country": "대한민국",
        "team": "강원 FC"
    },
    {
        "name": "홍정호",
        "originName": "홍정호",
        "pos": "CB",
        "birth": "1989.08.12",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "정운",
        "originName": "정운",
        "pos": "CB",
        "birth": "1989.06.30",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "이창민",
        "originName": "이창민",
        "pos": "CM",
        "birth": "1994.01.20",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "이규성",
        "originName": "이규성",
        "pos": "CM",
        "birth": "1994.05.10",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "권완규",
        "originName": "권완규",
        "pos": "CB",
        "birth": "1991.11.20",
        "country": "대한민국",
        "team": "성남 FC"
    },
    {
        "name": "양한빈",
        "originName": "양한빈",
        "pos": "GK",
        "birth": "1991.08.30",
        "country": "대한민국",
        "team": "세레소 오사카"
    },
    {
        "name": "일류첸코",
        "originName": "스타니슬라프 일류첸코",
        "pos": "ST",
        "birth": "1990.08.13",
        "country": "러시아",
        "team": "FC 서울"
    },
    {
        "name": "뮬리치",
        "originName": "페이살 물리치",
        "pos": "ST",
        "birth": "1994.10.03",
        "country": "세르비아",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "아길라르",
        "originName": "엘리아스 아길라르",
        "pos": "CAM",
        "birth": "1991.11.07",
        "country": "코스타리카",
        "team": "인천 유나이티드"
    },
    {
        "name": "임상협",
        "originName": "임상협",
        "pos": "RW",
        "birth": "1988.07.08",
        "country": "대한민국",
        "team": "FC 서울"
    },
    {
        "name": "무릴로",
        "originName": "무릴루 엔리키 페레이라 호샤",
        "pos": "CAM",
        "birth": "1994.11.20",
        "country": "브라질",
        "team": "수원 FC"
    },
    {
        "name": "정우재",
        "originName": "정우재",
        "pos": "LWB",
        "birth": "1992.06.28",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "김보경",
        "originName": "김보경",
        "pos": "CAM",
        "birth": "1989.10.06",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "권한진",
        "originName": "권한진",
        "pos": "CB",
        "birth": "1988.05.19",
        "country": "대한민국",
        "team": "인천 유나이티드"
    },
    {
        "name": "무고사",
        "originName": "스테판 무고샤",
        "pos": "ST",
        "birth": "1992.02.26",
        "country": "몬테네그로",
        "team": "인천 유나이티드"
    },
    {
        "name": "조유민",
        "originName": "조유민",
        "pos": "CB",
        "birth": "1996.11.17",
        "country": "대한민국",
        "team": "대전 하나 시티즌"
    },
    {
        "name": "김광석",
        "originName": "김광석",
        "pos": "CB",
        "birth": "1983.02.12",
        "country": "대한민국",
        "team": "인천 유나이티드"
    },
    {
        "name": "김진혁",
        "originName": "김진혁",
        "pos": "CB",
        "birth": "1993.06.03",
        "country": "대한민국",
        "team": "대구 FC"
    },
    {
        "name": "이동경",
        "originName": "이동경",
        "pos": "CAM",
        "birth": "1997.09.20",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "김태환",
        "originName": "김태환",
        "pos": "RB",
        "birth": "1989.07.24",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "문선민",
        "originName": "문선민",
        "pos": "RW",
        "birth": "1992.06.09",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "임채민",
        "originName": "임채민",
        "pos": "CB",
        "birth": "1990.11.18",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "김지현",
        "originName": "김지현",
        "pos": "ST",
        "birth": "1996.07.22",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "정태욱",
        "originName": "정태욱",
        "pos": "CB",
        "birth": "1997.05.16",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "정승원",
        "originName": "정승원",
        "pos": "RM",
        "birth": "1997.02.27",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "한승규",
        "originName": "한승규",
        "pos": "CAM",
        "birth": "1996.09.26",
        "country": "대한민국",
        "team": "FC 서울"
    },
    {
        "name": "정승현",
        "originName": "정승현",
        "pos": "CB",
        "birth": "1994.04.03",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "한교원",
        "originName": "한교원",
        "pos": "RW",
        "birth": "1990.06.15",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "유인수",
        "originName": "유인수",
        "pos": "RM",
        "birth": "1994.12.28",
        "country": "대한민국",
        "team": "성남 FC"
    },
    {
        "name": "김문환",
        "originName": "김문환",
        "pos": "RB",
        "birth": "1995.08.01",
        "country": "대한민국",
        "team": "알두하일"
    },
    {
        "name": "M. 아담",
        "originName": "마르틴 아담",
        "pos": "ST",
        "birth": "1994.11.06",
        "country": "헝가리",
        "team": "울산 현대"
    },
    {
        "name": "이동준",
        "originName": "이동준",
        "pos": "RW",
        "birth": "1997.02.01",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "연제운",
        "originName": "연제운",
        "pos": "CB",
        "birth": "1994.08.28",
        "country": "대한민국",
        "team": "성남 FC"
    },
    {
        "name": "홍철",
        "originName": "홍철",
        "pos": "LB",
        "birth": "1990.09.17",
        "country": "대한민국",
        "team": "대구 FC"
    },
    {
        "name": "이용",
        "originName": "이용",
        "pos": "RB",
        "birth": "1986.12.24",
        "country": "대한민국",
        "team": "수원 FC"
    },
    {
        "name": "리오넬 메시",
        "originName": "리오넬 메시",
        "pos": "RW",
        "birth": "1987.06.24",
        "country": "아르헨티나",
        "team": "인터 마이애미"
    },
    {
        "name": "디오구 코스타",
        "originName": "디아구 메이렐레스 코스타",
        "pos": "GK",
        "birth": "1999.09.19",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "알렉산더 바",
        "originName": "알렉산더 바",
        "pos": "RB",
        "birth": "1997.12.09",
        "country": "덴마크",
        "team": "SL 벤피카"
    },
    {
        "name": "니콜라스 오타멘디",
        "originName": "니콜라스 오타멘디",
        "pos": "CB",
        "birth": "1988.02.12",
        "country": "아르헨티나",
        "team": "SL 벤피카"
    },
    {
        "name": "오타비우",
        "originName": "오타비우 에드미우송 다 시우바 몬테이루",
        "pos": "RM",
        "birth": "1995.02.09",
        "country": "포르투갈",
        "team": "알나스르"
    },
    {
        "name": "안토니우 실바",
        "originName": "안토니우 주앙 타바레스 실바",
        "pos": "CB",
        "birth": "2003.10.31",
        "country": "포르투갈",
        "team": "SL 벤피카"
    },
    {
        "name": "스테번 베르하위스",
        "originName": "스테번 베르하위스",
        "pos": "CAM",
        "birth": "1991.12.19",
        "country": "네덜란드",
        "team": "아약스"
    },
    {
        "name": "M. 브로조비치",
        "originName": "마르첼로 브로조비치",
        "pos": "CDM",
        "birth": "1992.11.16",
        "country": "크로아티아",
        "team": "알나스르"
    },
    {
        "name": "크리스티아누 호날두",
        "originName": "크리스티아누 호날두 두스 산투스 아베이루",
        "pos": "ST",
        "birth": "1985.02.05",
        "country": "포르투갈",
        "team": "알나스르"
    },
    {
        "name": "조던 헨더슨",
        "originName": "조던 헨더슨",
        "pos": "CM",
        "birth": "1990.06.17",
        "country": "잉글랜드",
        "team": "에티파크 FC"
    },
    {
        "name": "카말 소와",
        "originName": "카말 소와",
        "pos": "LW",
        "birth": "2000.01.09",
        "country": "가나",
        "team": "클럽 브루게"
    },
    {
        "name": "헤로니모 룰리",
        "originName": "헤로니모 룰리",
        "pos": "GK",
        "birth": "1992.05.20",
        "country": "아르헨티나",
        "team": "아약스"
    },
    {
        "name": "A. 스코우 올센",
        "originName": "안드레아스 스코우 올센",
        "pos": "RW",
        "birth": "1999.12.29",
        "country": "덴마크",
        "team": "클럽 브루게"
    },
    {
        "name": "에므리크 라포르트",
        "originName": "에므리크 라포르트",
        "pos": "CB",
        "birth": "1994.05.27",
        "country": "스페인",
        "team": "알나스르"
    },
    {
        "name": "얀 베르통언",
        "originName": "얀 베르통언",
        "pos": "CB",
        "birth": "1987.04.24",
        "country": "벨기에",
        "team": "RSC 안데를레흐트"
    },
    {
        "name": "한스 바나컨",
        "originName": "한스 바나컨",
        "pos": "CM",
        "birth": "1992.08.24",
        "country": "벨기에",
        "team": "클럽 브루게"
    },
    {
        "name": "하킴 지예시",
        "originName": "하킴 지예시",
        "pos": "CAM",
        "birth": "1993.03.19",
        "country": "모로코",
        "team": "첼시"
    },
    {
        "name": "이르빙 로사노",
        "originName": "이르빙 로사노",
        "pos": "RW",
        "birth": "1995.07.30",
        "country": "멕시코",
        "team": "PSV"
    },
    {
        "name": "은골로 캉테",
        "originName": "은골로 캉테",
        "pos": "CDM",
        "birth": "1991.03.29",
        "country": "프랑스",
        "team": "알이티하드"
    },
    {
        "name": "제이-제이 오코차",
        "originName": "제이-제이 오코차",
        "pos": "CAM",
        "birth": "1973.08.14",
        "country": "나이지리아",
        "team": "헐 시티"
    },
    {
        "name": "로베르토 바조",
        "originName": "로베르토 바조",
        "pos": "CF",
        "birth": "1967.02.18",
        "country": "이탈리아",
        "team": "브레시아"
    },
    {
        "name": "잔프랑코 졸라",
        "originName": "잔프랑코 졸라",
        "pos": "CF",
        "birth": "1966.07.05",
        "country": "이탈리아",
        "team": "칼리아리"
    },
    {
        "name": "데이비드 베컴",
        "originName": "데이비드 베컴",
        "pos": "RM",
        "birth": "1975.05.02",
        "country": "잉글랜드",
        "team": "파리 생제르맹"
    },
    {
        "name": "로이 킨",
        "originName": "로이 킨",
        "pos": "CDM",
        "birth": "1971.08.10",
        "country": "아일랜드",
        "team": "셀틱"
    },
    {
        "name": "앨런 시어러",
        "originName": "앨런 시어러",
        "pos": "ST",
        "birth": "1970.08.13",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "솔 캠벨",
        "originName": "솔 캠벨",
        "pos": "CB",
        "birth": "1974.09.18",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "폴 스콜스",
        "originName": "폴 스콜스",
        "pos": "CM",
        "birth": "1974.11.16",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "호베르투 카를루스",
        "originName": "호베르투 카를루스 다 시우바 주니오르",
        "pos": "LB",
        "birth": "1973.04.10",
        "country": "브라질",
        "team": "델리 다이너모스 FC"
    },
    {
        "name": "후이 코스타",
        "originName": "세자르 코스타 후이 마누엘",
        "pos": "CAM",
        "birth": "1972.03.29",
        "country": "포르투갈",
        "team": "SL 벤피카"
    },
    {
        "name": "A. 델피에로",
        "originName": "알레산드로 델피에로",
        "pos": "CF",
        "birth": "1974.11.09",
        "country": "이탈리아",
        "team": "델리 다이너모스 FC"
    },
    {
        "name": "알레산드로 네스타",
        "originName": "알레산드로 네스타",
        "pos": "CB",
        "birth": "1976.03.19",
        "country": "이탈리아",
        "team": "첸나이 FC"
    },
    {
        "name": "하비에르 사네티",
        "originName": "하비에르 사네티",
        "pos": "LB",
        "birth": "1973.08.10",
        "country": "아르헨티나",
        "team": "인테르"
    },
    {
        "name": "파올로 말디니",
        "originName": "파올로 말디니",
        "pos": "LB",
        "birth": "1968.06.26",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "파비오 칸나바로",
        "originName": "파비오 칸나바로",
        "pos": "CB",
        "birth": "1973.09.13",
        "country": "이탈리아",
        "team": "알아흘리 두바이"
    },
    {
        "name": "마르셀 드사이",
        "originName": "마르셀 드사이",
        "pos": "CDM",
        "birth": "1968.09.07",
        "country": "프랑스",
        "team": "카타르 SC"
    },
    {
        "name": "클라렌스 세이도르프",
        "originName": "클라렌스 세이도르프",
        "pos": "CAM",
        "birth": "1976.04.01",
        "country": "네덜란드",
        "team": "보타포구"
    },
    {
        "name": "지네딘 지단",
        "originName": "지네딘 지단",
        "pos": "CAM",
        "birth": "1972.06.23",
        "country": "프랑스",
        "team": "레알 마드리드"
    },
    {
        "name": "올레 군나르 솔샤르",
        "originName": "올레 군나르 솔샤르",
        "pos": "ST",
        "birth": "1973.02.26",
        "country": "노르웨이",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "P. 비에이라",
        "originName": "파트리크 비에이라",
        "pos": "CDM",
        "birth": "1976.06.23",
        "country": "프랑스",
        "team": "맨체스터 시티"
    },
    {
        "name": "로베르 피레스",
        "originName": "로베르 피레스",
        "pos": "LM",
        "birth": "1973.10.29",
        "country": "프랑스",
        "team": "FC 고아"
    },
    {
        "name": "티에리 앙리",
        "originName": "티에리 앙리",
        "pos": "ST",
        "birth": "1977.08.17",
        "country": "프랑스",
        "team": "뉴욕 레드불스"
    },
    {
        "name": "에마뉘엘 프티",
        "originName": "에마뉘엘 프티",
        "pos": "CDM",
        "birth": "1970.09.22",
        "country": "프랑스",
        "team": "첼시"
    },
    {
        "name": "클로드 마켈렐레",
        "originName": "클로드 마켈렐레",
        "pos": "CDM",
        "birth": "1973.02.18",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "젠나로 가투소",
        "originName": "젠나로 가투소",
        "pos": "CDM",
        "birth": "1978.01.09",
        "country": "이탈리아",
        "team": "FC 시옹"
    },
    {
        "name": "데니스 베르캄프",
        "originName": "데니스 베르캄프",
        "pos": "CF",
        "birth": "1969.05.10",
        "country": "네덜란드",
        "team": "아스널"
    },
    {
        "name": "미하엘 발락",
        "originName": "미하엘 발락",
        "pos": "CAM",
        "birth": "1976.09.26",
        "country": "독일",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "히바우두",
        "originName": "히바우두 비토르 보르바 페헤이라",
        "pos": "CAM",
        "birth": "1972.04.19",
        "country": "브라질",
        "team": "모지미링"
    },
    {
        "name": "카푸",
        "originName": "카푸",
        "pos": "RB",
        "birth": "1970.06.07",
        "country": "브라질",
        "team": "가퍼스 타운 AFC"
    },
    {
        "name": "H. 스토이치코프",
        "originName": "흐리스토 스토이치코프",
        "pos": "RW",
        "birth": "1966.02.08",
        "country": "불가리아",
        "team": "D.C. 유나이티드"
    },
    {
        "name": "나카타 히데토시",
        "originName": "나카타 히데토시",
        "pos": "CAM",
        "birth": "1977.01.22",
        "country": "일본",
        "team": "피오렌티나"
    },
    {
        "name": "G. 잠브로타",
        "originName": "잔루카 잠브로타",
        "pos": "RB",
        "birth": "1977.02.19",
        "country": "이탈리아",
        "team": "FC 키아소"
    },
    {
        "name": "마이클 오언",
        "originName": "마이클 오언",
        "pos": "ST",
        "birth": "1979.12.14",
        "country": "잉글랜드",
        "team": "스토크 시티"
    },
    {
        "name": "프랭크 램파드",
        "originName": "프랭크 램파드",
        "pos": "CM",
        "birth": "1978.06.20",
        "country": "잉글랜드",
        "team": "뉴욕 시티 FC"
    },
    {
        "name": "야야 투레",
        "originName": "야야 투레",
        "pos": "CM",
        "birth": "1983.05.13",
        "country": "코트디부아르",
        "team": "칭다오 FC"
    },
    {
        "name": "리켈메",
        "originName": "후안 로만 리켈메",
        "pos": "CAM",
        "birth": "1978.06.24",
        "country": "아르헨티나",
        "team": "아르헨티노스 주니어스"
    },
    {
        "name": "카시야스",
        "originName": "이케르 카시야스 페르난데스",
        "pos": "GK",
        "birth": "1981.05.20",
        "country": "스페인",
        "team": "FC 포르투"
    },
    {
        "name": "루이스 피구",
        "originName": "루이스 필리프 마데이라 카에이루 피구",
        "pos": "RW",
        "birth": "1972.11.04",
        "country": "포르투갈",
        "team": "인테르"
    },
    {
        "name": "파벨 네드베드",
        "originName": "파벨 네드베드",
        "pos": "CAM",
        "birth": "1972.08.30",
        "country": "체코",
        "team": "유벤투스"
    },
    {
        "name": "야리 리트마넨",
        "originName": "야리 리트마넨",
        "pos": "CAM",
        "birth": "1971.02.20",
        "country": "핀란드",
        "team": "HJK 헬싱키"
    },
    {
        "name": "P. 클라위베르트",
        "originName": "패트릭 클라위베르트",
        "pos": "ST",
        "birth": "1976.07.01",
        "country": "네덜란드",
        "team": "LOSC 릴"
    },
    {
        "name": "다비드 트레제게",
        "originName": "다비드 트레제게",
        "pos": "ST",
        "birth": "1977.10.15",
        "country": "프랑스",
        "team": "하이데라바드 FC"
    },
    {
        "name": "프레디 융베리",
        "originName": "프레디 융베리",
        "pos": "RM",
        "birth": "1977.04.16",
        "country": "스웨덴",
        "team": "뭄바이 시티 FC"
    },
    {
        "name": "리오 퍼디난드",
        "originName": "리오 퍼디난드",
        "pos": "CB",
        "birth": "1978.11.07",
        "country": "잉글랜드",
        "team": "퀸스파크 레인저스"
    },
    {
        "name": "에르난 크레스포",
        "originName": "에르난 크레스포",
        "pos": "ST",
        "birth": "1975.07.05",
        "country": "아르헨티나",
        "team": "파르마"
    },
    {
        "name": "안드레아 피를로",
        "originName": "안드레아 피를로",
        "pos": "CM",
        "birth": "1979.05.19",
        "country": "이탈리아",
        "team": "뉴욕 시티 FC"
    },
    {
        "name": "베론",
        "originName": "후안 세바스티안 베론",
        "pos": "CM",
        "birth": "1975.03.09",
        "country": "아르헨티나",
        "team": "에스투디안테스 데라플라타"
    },
    {
        "name": "로빈 반페르시",
        "originName": "로빈 반페르시",
        "pos": "ST",
        "birth": "1983.08.06",
        "country": "네덜란드",
        "team": "페예노르트"
    },
    {
        "name": "사뮈엘 에토",
        "originName": "사뮈엘 에토",
        "pos": "ST",
        "birth": "1981.03.10",
        "country": "카메룬",
        "team": "카타르 SC"
    },
    {
        "name": "뤼트 반니스텔로이",
        "originName": "뤼트 반니스텔로이",
        "pos": "ST",
        "birth": "1976.07.01",
        "country": "네덜란드",
        "team": "말라가 CF"
    },
    {
        "name": "차비",
        "originName": "차비 에르난데스",
        "pos": "CM",
        "birth": "1980.01.25",
        "country": "스페인",
        "team": "알사드"
    },
    {
        "name": "카를레스 푸욜",
        "originName": "카를레스 푸욜 사포르카다",
        "pos": "CB",
        "birth": "1978.04.13",
        "country": "스페인",
        "team": "FC 바르셀로나"
    },
    {
        "name": "미로슬라프 클로제",
        "originName": "미로슬라프 클로제",
        "pos": "ST",
        "birth": "1978.06.09",
        "country": "독일",
        "team": "라티움"
    },
    {
        "name": "안드리 셰우첸코",
        "originName": "안드리 셰우첸코",
        "pos": "ST",
        "birth": "1976.09.29",
        "country": "우크라이나",
        "team": "디나모 키이우"
    },
    {
        "name": "샤비 알론소",
        "originName": "샤비에르 알론소 올라노",
        "pos": "CM",
        "birth": "1981.11.25",
        "country": "스페인",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "마이클 에시앙",
        "originName": "마이클 에시앙",
        "pos": "CDM",
        "birth": "1982.12.03",
        "country": "가나",
        "team": "FK 사바일"
    },
    {
        "name": "스티븐 제라드",
        "originName": "스티븐 제라드",
        "pos": "CAM",
        "birth": "1980.05.30",
        "country": "잉글랜드",
        "team": "LA 갤럭시"
    },
    {
        "name": "호나우지뉴",
        "originName": "호나우두 지 아시스 모레이라",
        "pos": "LW",
        "birth": "1980.03.21",
        "country": "브라질",
        "team": "플루미넨세"
    },
    {
        "name": "디디에 드로그바",
        "originName": "디디에 드로그바",
        "pos": "ST",
        "birth": "1978.03.11",
        "country": "코트디부아르",
        "team": "피닉스 라이징 FC"
    },
    {
        "name": "애슐리 콜",
        "originName": "애슐리 콜",
        "pos": "LB",
        "birth": "1980.12.20",
        "country": "잉글랜드",
        "team": "더비 카운티"
    },
    {
        "name": "네마냐 비디치",
        "originName": "네마냐 비디치",
        "pos": "CB",
        "birth": "1981.10.21",
        "country": "세르비아",
        "team": "인테르"
    },
    {
        "name": "루이스 에르난데스",
        "originName": "루이스 에르난데스",
        "pos": "ST",
        "birth": "1968.12.22",
        "country": "멕시코",
        "team": "로보스 B.U.A.P"
    },
    {
        "name": "지쿠",
        "originName": "아르투르 안투네스 코임브라",
        "pos": "CAM",
        "birth": "1953.03.03",
        "country": "브라질",
        "team": "가시마 앤틀러스"
    },
    {
        "name": "우고 산체스",
        "originName": "우고 산체스",
        "pos": "ST",
        "birth": "1958.07.11",
        "country": "멕시코",
        "team": "아틀레티코 셀라야"
    },
    {
        "name": "호나우두",
        "originName": "호나우두 루이스 나자리우 지 리마",
        "pos": "ST",
        "birth": "1976.09.22",
        "country": "브라질",
        "team": "코린치안스"
    },
    {
        "name": "라울",
        "originName": "라울 곤살레스 블랑코",
        "pos": "CF",
        "birth": "1977.06.27",
        "country": "스페인",
        "team": "뉴욕 코스모스"
    },
    {
        "name": "박지성",
        "originName": "박지성",
        "pos": "CAM",
        "birth": "1981.02.25",
        "country": "대한민국",
        "team": "퀸스파크 레인저스"
    },
    {
        "name": "페트르 체흐",
        "originName": "페트르 체흐",
        "pos": "GK",
        "birth": "1982.05.20",
        "country": "체코",
        "team": "아스널"
    },
    {
        "name": "페르난도 토레스",
        "originName": "페르난도 호세 토레스 산스",
        "pos": "ST",
        "birth": "1984.03.20",
        "country": "스페인",
        "team": "사간 도스"
    },
    {
        "name": "에드윈 반데르사르",
        "originName": "에드윈 반데르사르",
        "pos": "GK",
        "birth": "1970.10.29",
        "country": "네덜란드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "에릭 칸토나",
        "originName": "에릭 칸토나",
        "pos": "CF",
        "birth": "1966.05.24",
        "country": "프랑스",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "카를루스 아우베르투",
        "originName": "카를루스 아우베르투 토히스",
        "pos": "RB",
        "birth": "1944.07.17",
        "country": "브라질",
        "team": "뉴욕 코스모스"
    },
    {
        "name": "로날트 쿠만",
        "originName": "로날트 쿠만",
        "pos": "CB",
        "birth": "1963.03.21",
        "country": "네덜란드",
        "team": "페예노르트"
    },
    {
        "name": "헨릭 라르손",
        "originName": "헨릭 라르손",
        "pos": "ST",
        "birth": "1971.09.20",
        "country": "스웨덴",
        "team": "헬싱보리 IF"
    },
    {
        "name": "웨인 루니",
        "originName": "웨인 루니",
        "pos": "ST",
        "birth": "1985.10.24",
        "country": "잉글랜드",
        "team": "더비 카운티"
    },
    {
        "name": "필립 람",
        "originName": "필립 람",
        "pos": "RB",
        "birth": "1983.11.11",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "소크라테스",
        "originName": "소크라테스 비에이라 지 올리베이라",
        "pos": "CAM",
        "birth": "1954.02.19",
        "country": "브라질",
        "team": "가퍼스 타운 AFC"
    },
    {
        "name": "게르트 뮐러",
        "originName": "게르트 뮐러",
        "pos": "ST",
        "birth": "1945.11.03",
        "country": "독일",
        "team": "스미스 브라더스 라운지"
    },
    {
        "name": "파울루 푸트리",
        "originName": "파울루 조르주 두스산투스 푸트르",
        "pos": "CAM",
        "birth": "1966.02.28",
        "country": "포르투갈",
        "team": "요코하마 플뤼겔스"
    },
    {
        "name": "게리 리네커",
        "originName": "게리 리네커",
        "pos": "ST",
        "birth": "1960.11.30",
        "country": "잉글랜드",
        "team": "나고야 그램퍼스"
    },
    {
        "name": "다보르 슈케르",
        "originName": "다보르 슈케르",
        "pos": "ST",
        "birth": "1968.01.01",
        "country": "크로아티아",
        "team": "TSV 1860 뮌헨"
    },
    {
        "name": "조지 베스트",
        "originName": "조지 베스트",
        "pos": "RW",
        "birth": "1946.05.22",
        "country": "북아일랜드",
        "team": "터버모어 유나이티드"
    },
    {
        "name": "보비 찰턴",
        "originName": "보비 찰턴",
        "pos": "CAM",
        "birth": "1937.10.11",
        "country": "잉글랜드",
        "team": "블랙타운 시티"
    },
    {
        "name": "존 반스",
        "originName": "존 반스",
        "pos": "LW",
        "birth": "1963.11.07",
        "country": "잉글랜드",
        "team": "찰턴 애슬레틱"
    },
    {
        "name": "B. 슈바인슈타이거",
        "originName": "바스티안 슈바인슈타이거",
        "pos": "CM",
        "birth": "1984.08.01",
        "country": "독일",
        "team": "시카고 파이어 FC"
    },
    {
        "name": "카카",
        "originName": "히카르두 이젝송 두스 산투스 레이치",
        "pos": "CAM",
        "birth": "1982.04.22",
        "country": "브라질",
        "team": "올랜도 시티 SC"
    },
    {
        "name": "프랑크 리베리",
        "originName": "프랑크 리베리",
        "pos": "LW",
        "birth": "1983.04.07",
        "country": "프랑스",
        "team": "살레르니타나"
    },
    {
        "name": "페르난도 이에로",
        "originName": "페르난도 이에로 루이스",
        "pos": "CB",
        "birth": "1968.03.23",
        "country": "스페인",
        "team": "볼턴 원더러스"
    },
    {
        "name": "게오르게 하지",
        "originName": "게오르게 하지",
        "pos": "CAM",
        "birth": "1965.02.05",
        "country": "루마니아",
        "team": "갈라타사라이"
    },
    {
        "name": "케니 달글리시",
        "originName": "케니 달글리시",
        "pos": "CF",
        "birth": "1951.03.04",
        "country": "스코틀랜드",
        "team": "리버풀"
    },
    {
        "name": "가린샤",
        "originName": "마누엘 프란시스쿠 두스산투스",
        "pos": "RW",
        "birth": "1933.10.28",
        "country": "브라질",
        "team": "오라리아 AC"
    },
    {
        "name": "이언 러시",
        "originName": "이언 러시",
        "pos": "ST",
        "birth": "1961.10.20",
        "country": "웨일스",
        "team": "렉섬 AFC"
    },
    {
        "name": "페렌츠 푸스카스",
        "originName": "페렌츠 푸스카스",
        "pos": "CF",
        "birth": "1927.04.01",
        "country": "헝가리",
        "team": "레알 마드리드"
    },
    {
        "name": "프랑코 바레시",
        "originName": "프랑코 바레시",
        "pos": "CB",
        "birth": "1960.05.08",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "펠레",
        "originName": "에드송 아란치스 나시멘투",
        "pos": "CF",
        "birth": "1940.10.23",
        "country": "브라질",
        "team": "뉴욕 코스모스"
    },
    {
        "name": "보비 무어",
        "originName": "보비 무어",
        "pos": "CB",
        "birth": "1941.04.12",
        "country": "잉글랜드",
        "team": "FC 미트윌란"
    },
    {
        "name": "요한 크루이프",
        "originName": "요한 크루이프",
        "pos": "CF",
        "birth": "1947.04.25",
        "country": "네덜란드",
        "team": "페예노르트"
    },
    {
        "name": "로비 파울러",
        "originName": "로비 파울러",
        "pos": "ST",
        "birth": "1975.04.09",
        "country": "잉글랜드",
        "team": "무앙통 유나이티드"
    },
    {
        "name": "로타어 마테우스",
        "originName": "로타어 마테우스",
        "pos": "CM",
        "birth": "1961.03.21",
        "country": "독일",
        "team": "메트로스타스"
    },
    {
        "name": "페터 슈마이켈",
        "originName": "페터 슈마이켈",
        "pos": "GK",
        "birth": "1963.11.18",
        "country": "덴마크",
        "team": "맨체스터 시티"
    },
    {
        "name": "데이비드 시먼",
        "originName": "데이비드 시먼",
        "pos": "GK",
        "birth": "1963.09.19",
        "country": "잉글랜드",
        "team": "맨체스터 시티"
    },
    {
        "name": "차범근",
        "originName": "차범근",
        "pos": "ST",
        "birth": "1953.05.22",
        "country": "대한민국",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "자이르지뉴",
        "originName": "자이르 벤투라 필류",
        "pos": "RW",
        "birth": "1944.12.25",
        "country": "브라질",
        "team": "보타포구"
    },
    {
        "name": "부트라게뇨",
        "originName": "에밀리오 부트라게뇨 산토스",
        "pos": "ST",
        "birth": "1963.07.22",
        "country": "스페인",
        "team": "아틀레티코 셀라야"
    },
    {
        "name": "프랑크 레이카르트",
        "originName": "프랑크 레이카르트",
        "pos": "CDM",
        "birth": "1962.09.30",
        "country": "네덜란드",
        "team": "아약스"
    },
    {
        "name": "마르코 반바스텐",
        "originName": "마르코 반바스텐",
        "pos": "ST",
        "birth": "1964.10.31",
        "country": "네덜란드",
        "team": "AC 밀란"
    },
    {
        "name": "루드 굴리트",
        "originName": "루드 굴리트",
        "pos": "CF",
        "birth": "1962.09.01",
        "country": "네덜란드",
        "team": "첼시"
    },
    {
        "name": "미카엘 라우드루프",
        "originName": "미카엘 라우드루프",
        "pos": "CF",
        "birth": "1964.06.15",
        "country": "덴마크",
        "team": "아약스"
    },
    {
        "name": "로랑 블랑",
        "originName": "로랑 블랑",
        "pos": "CB",
        "birth": "1965.11.19",
        "country": "프랑스",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "이언 라이트",
        "originName": "이언 라이트",
        "pos": "ST",
        "birth": "1963.11.03",
        "country": "잉글랜드",
        "team": "번리"
    },
    {
        "name": "라이언 긱스",
        "originName": "라이언 긱스",
        "pos": "LM",
        "birth": "1973.11.29",
        "country": "웨일스",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "에우제비우",
        "originName": "에우제비우 다 실바 페헤이라",
        "pos": "ST",
        "birth": "1942.01.25",
        "country": "포르투갈",
        "team": "뉴저지 아메리칸스"
    },
    {
        "name": "게리 네빌",
        "originName": "게리 네빌",
        "pos": "RB",
        "birth": "1975.02.18",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "옌스 레만",
        "originName": "옌스 레만",
        "pos": "GK",
        "birth": "1969.11.10",
        "country": "독일",
        "team": "아스널"
    },
    {
        "name": "크리스티안 비에리",
        "originName": "크리스티안 비에리",
        "pos": "ST",
        "birth": "1973.07.12",
        "country": "이탈리아",
        "team": "베르가모 칼초"
    },
    {
        "name": "테디 셰링엄",
        "originName": "테디 셰링엄",
        "pos": "ST",
        "birth": "1966.04.02",
        "country": "잉글랜드",
        "team": "콜체스터 유나이티드"
    },
    {
        "name": "제이미 캐러거",
        "originName": "제이미 캐러거",
        "pos": "CB",
        "birth": "1978.01.28",
        "country": "잉글랜드",
        "team": "리버풀"
    },
    {
        "name": "필리포 인자기",
        "originName": "필리포 인자기",
        "pos": "ST",
        "birth": "1973.08.09",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "M. 오베르마르스",
        "originName": "마르크 오베르마르스",
        "pos": "LW",
        "birth": "1973.03.29",
        "country": "네덜란드",
        "team": "SV 에퍼"
    },
    {
        "name": "비토르 바이아",
        "originName": "비토르 마누엘 마르팅스 바이아",
        "pos": "GK",
        "birth": "1969.10.15",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "알렉시 랄라스",
        "originName": "알렉시 랄라스",
        "pos": "CB",
        "birth": "1970.06.01",
        "country": "미국",
        "team": "LA 갤럭시"
    },
    {
        "name": "파울레타",
        "originName": "페드루 미겔 카헤이루 헤센데스",
        "pos": "ST",
        "birth": "1973.04.28",
        "country": "포르투갈",
        "team": "파리 생제르맹"
    },
    {
        "name": "안드레아스 브레메",
        "originName": "안드레아스 브레메",
        "pos": "LWB",
        "birth": "1960.11.09",
        "country": "독일",
        "team": "1. FC 카이저슬라우테른"
    },
    {
        "name": "브리안 라우드루프",
        "originName": "브리안 라우드루프",
        "pos": "CF",
        "birth": "1969.02.22",
        "country": "덴마크",
        "team": "아약스"
    },
    {
        "name": "카를로스 발데라마",
        "originName": "카를로스 발데라마",
        "pos": "CAM",
        "birth": "1961.09.02",
        "country": "콜롬비아",
        "team": "콜로라도 래피즈"
    },
    {
        "name": "레프 야신",
        "originName": "레프 야신",
        "pos": "GK",
        "birth": "1929.10.22",
        "country": "러시아",
        "team": "디나모 모스크바"
    },
    {
        "name": "과르디올라",
        "originName": "주제프 과르디올라 살라",
        "pos": "CDM",
        "birth": "1971.01.18",
        "country": "스페인",
        "team": "도라도 데 시나로아"
    },
    {
        "name": "슈테판 에펜베르크",
        "originName": "슈테판 에펜베르크",
        "pos": "CM",
        "birth": "1968.08.02",
        "country": "독일",
        "team": "알아라비"
    },
    {
        "name": "올리버 비어호프",
        "originName": "올리버 비어호프",
        "pos": "ST",
        "birth": "1968.05.01",
        "country": "독일",
        "team": "키에보 베로나"
    },
    {
        "name": "올리버 칸",
        "originName": "올리버 칸",
        "pos": "GK",
        "birth": "1969.06.15",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "이니에스타",
        "originName": "안드레스 이니에스타 루한",
        "pos": "CM",
        "birth": "1984.05.11",
        "country": "스페인",
        "team": "에미리트 클럽"
    },
    {
        "name": "야프 스탐",
        "originName": "야프 스탐",
        "pos": "CB",
        "birth": "1972.07.17",
        "country": "네덜란드",
        "team": "아약스"
    },
    {
        "name": "페르난도 모리엔테스",
        "originName": "페르난도 모리엔테스 산체스",
        "pos": "ST",
        "birth": "1976.04.05",
        "country": "스페인",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "랜던 도노번",
        "originName": "랜던 도노번",
        "pos": "ST",
        "birth": "1982.03.04",
        "country": "미국",
        "team": "레온"
    },
    {
        "name": "얀 콜러",
        "originName": "얀 콜러",
        "pos": "ST",
        "birth": "1973.03.30",
        "country": "체코",
        "team": "AS 칸"
    },
    {
        "name": "아리언 로번",
        "originName": "아리언 로번",
        "pos": "LW",
        "birth": "1984.01.23",
        "country": "네덜란드",
        "team": "FC 흐로닝언"
    },
    {
        "name": "마이클 캐릭",
        "originName": "마이클 캐릭",
        "pos": "CM",
        "birth": "1981.07.28",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "술레만 카마라",
        "originName": "술레만 카마라",
        "pos": "ST",
        "birth": "1982.12.22",
        "country": "세네갈",
        "team": "몽펠리에 HSC"
    },
    {
        "name": "피터 크라우치",
        "originName": "피터 크라우치",
        "pos": "ST",
        "birth": "1981.01.30",
        "country": "잉글랜드",
        "team": "번리"
    },
    {
        "name": "다니엘레 데로시",
        "originName": "다니엘레 데로시",
        "pos": "CM",
        "birth": "1983.07.24",
        "country": "이탈리아",
        "team": "보카 주니어스"
    },
    {
        "name": "데쿠",
        "originName": "안데르송 루이스 드 소자",
        "pos": "CM",
        "birth": "1977.08.27",
        "country": "포르투갈",
        "team": "플루미넨세"
    },
    {
        "name": "페어 메르테사커",
        "originName": "페어 메르테사커",
        "pos": "CB",
        "birth": "1984.09.29",
        "country": "독일",
        "team": "아스널"
    },
    {
        "name": "나이젤 더용",
        "originName": "나이젤 더용",
        "pos": "CDM",
        "birth": "1984.11.30",
        "country": "네덜란드",
        "team": "알샤하니아"
    },
    {
        "name": "필 자기엘카",
        "originName": "필 자기엘카",
        "pos": "CB",
        "birth": "1982.08.17",
        "country": "잉글랜드",
        "team": "스토크 시티"
    },
    {
        "name": "S. 리히트슈타이너",
        "originName": "슈테판 리히트슈타이너",
        "pos": "RB",
        "birth": "1984.01.16",
        "country": "스위스",
        "team": "FC 아우크스부르크"
    },
    {
        "name": "프랑크 더부르",
        "originName": "프랑크 더부르",
        "pos": "CB",
        "birth": "1970.05.15",
        "country": "네덜란드",
        "team": "알라이얀"
    },
    {
        "name": "디에고 베날리오",
        "originName": "디에고 베날리오",
        "pos": "GK",
        "birth": "1983.09.08",
        "country": "스위스",
        "team": "AS 모나코"
    },
    {
        "name": "아루나 코네",
        "originName": "아루나 코네",
        "pos": "ST",
        "birth": "1983.11.11",
        "country": "코트디부아르",
        "team": "VK 비에르데"
    },
    {
        "name": "고메스",
        "originName": "에우렐류 시우바 고메스",
        "pos": "GK",
        "birth": "1981.02.15",
        "country": "브라질",
        "team": "왓퍼드"
    },
    {
        "name": "이동국",
        "originName": "이동국",
        "pos": "ST",
        "birth": "1979.04.29",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "안드레아 바르찰리",
        "originName": "안드레아 바르찰리",
        "pos": "CB",
        "birth": "1981.05.08",
        "country": "이탈리아",
        "team": "유벤투스"
    },
    {
        "name": "오바페미 마틴스",
        "originName": "오바페미 마틴스",
        "pos": "ST",
        "birth": "1984.10.28",
        "country": "나이지리아",
        "team": "우한 FC"
    },
    {
        "name": "나니",
        "originName": "루이스 카를루스 알메이다 다 쿠냐",
        "pos": "LW",
        "birth": "1986.11.17",
        "country": "포르투갈",
        "team": "아다나 데미르스포르"
    },
    {
        "name": "빈센트 콤파니",
        "originName": "빈센트 콤파니",
        "pos": "CB",
        "birth": "1986.04.10",
        "country": "벨기에",
        "team": "RSC 안데를레흐트"
    },
    {
        "name": "페데리코 마르케티",
        "originName": "페데리코 마르케티",
        "pos": "GK",
        "birth": "1983.02.07",
        "country": "이탈리아",
        "team": "스페치아"
    },
    {
        "name": "잔루이지 부폰",
        "originName": "잔루이지 부폰",
        "pos": "GK",
        "birth": "1978.01.28",
        "country": "이탈리아",
        "team": "파르마"
    },
    {
        "name": "두웨이",
        "originName": "두웨이",
        "pos": "CB",
        "birth": "1982.02.09",
        "country": "중국",
        "team": "구이저우 헝펑 FC"
    },
    {
        "name": "파블로 사발레타",
        "originName": "파블로 사발레타",
        "pos": "RB",
        "birth": "1985.01.16",
        "country": "아르헨티나",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "호아킨",
        "originName": "호아킨 산체스 로드리게스",
        "pos": "RM",
        "birth": "1981.07.21",
        "country": "스페인",
        "team": "레알 베티스"
    },
    {
        "name": "후안프란",
        "originName": "후안 프란시스코 토레스 벨렌",
        "pos": "RB",
        "birth": "1985.01.09",
        "country": "스페인",
        "team": "상 파울루"
    },
    {
        "name": "크리스티안 마조",
        "originName": "크리스티안 마조",
        "pos": "RB",
        "birth": "1982.02.11",
        "country": "이탈리아",
        "team": "비첸자"
    },
    {
        "name": "가엘 클리시",
        "originName": "가엘 클리시",
        "pos": "LB",
        "birth": "1985.07.26",
        "country": "프랑스",
        "team": "세르베트 FC"
    },
    {
        "name": "토마스 베르마엘렌",
        "originName": "토마스 베르마엘렌",
        "pos": "LB",
        "birth": "1985.11.14",
        "country": "벨기에",
        "team": "비셀 고베"
    },
    {
        "name": "요안 구르퀴프",
        "originName": "요안 구르퀴프",
        "pos": "CAM",
        "birth": "1986.07.11",
        "country": "프랑스",
        "team": "디종 FCO"
    },
    {
        "name": "젤송 페르난데스",
        "originName": "젤송 타바레스 페르난데스",
        "pos": "CDM",
        "birth": "1986.09.02",
        "country": "스위스",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "이브라힘 아펠라이",
        "originName": "이브라힘 아펠라이",
        "pos": "LM",
        "birth": "1986.04.02",
        "country": "네덜란드",
        "team": "PSV"
    },
    {
        "name": "살로몬 칼루",
        "originName": "살로몬 칼루",
        "pos": "LW",
        "birth": "1985.08.05",
        "country": "코트디부아르",
        "team": "보타포구"
    },
    {
        "name": "페페",
        "originName": "케플레르 라베랑 리마 페헤이라",
        "pos": "CDM",
        "birth": "1983.02.26",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "괴칸 인러",
        "originName": "괴칸 인러",
        "pos": "CM",
        "birth": "1984.06.27",
        "country": "스위스",
        "team": "베식타슈"
    },
    {
        "name": "리카르도 몬톨리보",
        "originName": "리카르도 몬톨리보",
        "pos": "CDM",
        "birth": "1985.01.18",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "제임스 밀너",
        "originName": "제임스 밀너",
        "pos": "LM",
        "birth": "1986.01.04",
        "country": "잉글랜드",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "조르조 키엘리니",
        "originName": "조르조 키엘리니",
        "pos": "CB",
        "birth": "1984.08.14",
        "country": "이탈리아",
        "team": "LA FC"
    },
    {
        "name": "게리 케이힐",
        "originName": "게리 케이힐",
        "pos": "CB",
        "birth": "1985.12.19",
        "country": "잉글랜드",
        "team": "AFC 본머스"
    },
    {
        "name": "곽태휘",
        "originName": "곽태휘",
        "pos": "CB",
        "birth": "1981.07.08",
        "country": "대한민국",
        "team": "경남 FC"
    },
    {
        "name": "하비에르 마스체라노",
        "originName": "하비에르 마스체라노",
        "pos": "CDM",
        "birth": "1984.06.08",
        "country": "아르헨티나",
        "team": "에스투디안테스 데라플라타"
    },
    {
        "name": "다니 아우베스",
        "originName": "다니엘 아우베스 다 시우바",
        "pos": "RM",
        "birth": "1983.05.06",
        "country": "브라질",
        "team": "클루브 우니베르시다드 나시오날"
    },
    {
        "name": "박주영",
        "originName": "박주영",
        "pos": "LW",
        "birth": "1985.07.10",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "산티 카소를라",
        "originName": "산티아고 카소를라 곤살레스",
        "pos": "RW",
        "birth": "1984.12.13",
        "country": "스페인",
        "team": "레알 오비에도"
    },
    {
        "name": "마리오 고메스",
        "originName": "마리오 고메스",
        "pos": "ST",
        "birth": "1985.07.10",
        "country": "독일",
        "team": "VfB 슈투트가르트"
    },
    {
        "name": "오범석",
        "originName": "오범석",
        "pos": "RB",
        "birth": "1984.07.29",
        "country": "대한민국",
        "team": "포항 스틸러스"
    },
    {
        "name": "마르틴 슈크르텔",
        "originName": "마르틴 슈크르텔",
        "pos": "CB",
        "birth": "1984.12.15",
        "country": "슬로바키아",
        "team": "바샥셰히르"
    },
    {
        "name": "스테판 뤼피에",
        "originName": "스테판 뤼피에",
        "pos": "GK",
        "birth": "1986.09.27",
        "country": "프랑스",
        "team": "AS 생테티엔"
    },
    {
        "name": "안토니오 발렌시아",
        "originName": "안토니오 발렌시아",
        "pos": "RB",
        "birth": "1985.08.04",
        "country": "에콰도르",
        "team": "가요스 블랑코스 데 케레타로"
    },
    {
        "name": "이냐치오 아바테",
        "originName": "이냐치오 아바테",
        "pos": "RB",
        "birth": "1986.11.12",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "프레디 과린",
        "originName": "프레디 과린",
        "pos": "CM",
        "birth": "1986.06.30",
        "country": "콜롬비아",
        "team": "미요나리오스 FC"
    },
    {
        "name": "대니얼 스터리지",
        "originName": "대니얼 스터리지",
        "pos": "ST",
        "birth": "1989.09.01",
        "country": "잉글랜드",
        "team": "퍼스 글로리"
    },
    {
        "name": "마레크 함시크",
        "originName": "마레크 함시크",
        "pos": "CAM",
        "birth": "1987.07.27",
        "country": "슬로바키아",
        "team": "트라브존스포르"
    },
    {
        "name": "케빈 미랄라스",
        "originName": "케빈 미랄라스",
        "pos": "RW",
        "birth": "1987.10.05",
        "country": "벨기에",
        "team": "모레이렌스"
    },
    {
        "name": "바렐라",
        "originName": "실베스트르 곤살베스 바렐라",
        "pos": "LM",
        "birth": "1985.02.02",
        "country": "포르투갈",
        "team": "FC 포르투 B"
    },
    {
        "name": "세르히오 로메로",
        "originName": "세르히오 로메로",
        "pos": "GK",
        "birth": "1987.02.22",
        "country": "아르헨티나",
        "team": "보카 주니어스"
    },
    {
        "name": "C. 마르키시오",
        "originName": "클라우디오 마르키시오",
        "pos": "CM",
        "birth": "1986.01.19",
        "country": "이탈리아",
        "team": "제니트"
    },
    {
        "name": "단테",
        "originName": "단테 본핌 코스타 산투스",
        "pos": "CB",
        "birth": "1983.10.18",
        "country": "브라질",
        "team": "OGC 니스"
    },
    {
        "name": "염기훈",
        "originName": "염기훈",
        "pos": "ST",
        "birth": "1983.03.30",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "김창수",
        "originName": "김창수",
        "pos": "RB",
        "birth": "1985.09.12",
        "country": "대한민국",
        "team": "천안 시티 FC"
    },
    {
        "name": "이근호",
        "originName": "이근호",
        "pos": "ST",
        "birth": "1985.04.11",
        "country": "대한민국",
        "team": "대구 FC"
    },
    {
        "name": "주앙 무티뉴",
        "originName": "주앙 필리피 무티뉴",
        "pos": "CM",
        "birth": "1986.09.08",
        "country": "포르투갈",
        "team": "SC 브라가"
    },
    {
        "name": "세스크 파브레가스",
        "originName": "프란세스크 파브레가스 이 솔레르",
        "pos": "CM",
        "birth": "1987.05.04",
        "country": "스페인",
        "team": "코모 1907"
    },
    {
        "name": "마루안 펠라이니",
        "originName": "마루안 펠라이니",
        "pos": "CM",
        "birth": "1987.11.22",
        "country": "벨기에",
        "team": "산둥 타이산"
    },
    {
        "name": "로랑 코시엘니",
        "originName": "로랑 코시엘니",
        "pos": "CB",
        "birth": "1985.09.10",
        "country": "프랑스",
        "team": "지롱댕 보르도"
    },
    {
        "name": "조나탄 데구스만",
        "originName": "조나탄 데구스만",
        "pos": "CM",
        "birth": "1987.09.13",
        "country": "네덜란드",
        "team": "스파르타 로테르담"
    },
    {
        "name": "마르코 마테라치",
        "originName": "마르코 마테라치",
        "pos": "CB",
        "birth": "1973.08.19",
        "country": "이탈리아",
        "team": "첸나이 FC"
    },
    {
        "name": "베네딕트 회베데스",
        "originName": "베네딕트 회베데스",
        "pos": "LB",
        "birth": "1988.02.29",
        "country": "독일",
        "team": "로코모티브 모스크바"
    },
    {
        "name": "곤살로 이과인",
        "originName": "곤살로 이과인",
        "pos": "ST",
        "birth": "1987.12.10",
        "country": "아르헨티나",
        "team": "인터 마이애미"
    },
    {
        "name": "가와시마 에이지",
        "originName": "가와시마 에이지",
        "pos": "GK",
        "birth": "1983.03.20",
        "country": "일본",
        "team": "스트라스부르 알자스"
    },
    {
        "name": "안드레스 과르다도",
        "originName": "안드레스 과르다도",
        "pos": "CM",
        "birth": "1986.09.28",
        "country": "멕시코",
        "team": "레알 베티스"
    },
    {
        "name": "블레즈 마튀이디",
        "originName": "블레즈 마튀이디",
        "pos": "CM",
        "birth": "1987.04.09",
        "country": "프랑스",
        "team": "인터 마이애미"
    },
    {
        "name": "마리오 만주키치",
        "originName": "마리오 만주키치",
        "pos": "ST",
        "birth": "1986.05.21",
        "country": "크로아티아",
        "team": "AC 밀란"
    },
    {
        "name": "구자철",
        "originName": "구자철",
        "pos": "CAM",
        "birth": "1989.02.27",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "소크라티스",
        "originName": "소크라티스 파파스타토풀로스",
        "pos": "CB",
        "birth": "1988.06.09",
        "country": "그리스",
        "team": "올림피아코스 CFP"
    },
    {
        "name": "케빈-프린스 보아텡",
        "originName": "케빈-프린스 보아텡",
        "pos": "CM",
        "birth": "1987.03.06",
        "country": "가나",
        "team": "헤르타 BSC"
    },
    {
        "name": "클라우디오 브라보",
        "originName": "클라우디오 브라보",
        "pos": "GK",
        "birth": "1983.04.13",
        "country": "칠레",
        "team": "레알 베티스"
    },
    {
        "name": "베투",
        "originName": "안토니우 알베르투 바스투스 핌파렐",
        "pos": "GK",
        "birth": "1982.05.01",
        "country": "포르투갈",
        "team": "SC 파렌스"
    },
    {
        "name": "막스-알랭 그라델",
        "originName": "막스-알랭 그라델",
        "pos": "LM",
        "birth": "1987.11.30",
        "country": "코트디부아르",
        "team": "가지안테프 FK"
    },
    {
        "name": "발렌틴 슈토커",
        "originName": "발렌틴 슈토커",
        "pos": "LM",
        "birth": "1989.04.12",
        "country": "스위스",
        "team": "FC 바젤 1893"
    },
    {
        "name": "지오바니 시오",
        "originName": "지오바니 시오",
        "pos": "ST",
        "birth": "1989.03.31",
        "country": "코트디부아르",
        "team": "FC 시옹"
    },
    {
        "name": "K. 미트로글루",
        "originName": "콘스탄티노스 미트로글루",
        "pos": "ST",
        "birth": "1988.03.12",
        "country": "그리스",
        "team": "아리스 테살로니키"
    },
    {
        "name": "메수트 외질",
        "originName": "메수트 외질",
        "pos": "CAM",
        "birth": "1988.10.15",
        "country": "독일",
        "team": "바샥셰히르"
    },
    {
        "name": "네벤 수보티치",
        "originName": "네벤 수보티치",
        "pos": "CB",
        "birth": "1988.12.10",
        "country": "세르비아",
        "team": "라인도르프 알타흐"
    },
    {
        "name": "카림 벤제마",
        "originName": "카림 벤제마",
        "pos": "ST",
        "birth": "1987.12.19",
        "country": "프랑스",
        "team": "알이티하드"
    },
    {
        "name": "하미레스",
        "originName": "하미레스 산투스 두 나시멘투",
        "pos": "CM",
        "birth": "1987.03.24",
        "country": "브라질",
        "team": "파우메이라스"
    },
    {
        "name": "미겔 벨로주",
        "originName": "미겔 루이스 핀투 벨로주",
        "pos": "CDM",
        "birth": "1986.05.11",
        "country": "포르투갈",
        "team": "피사"
    },
    {
        "name": "마르코 파비안",
        "originName": "마르코 파비안",
        "pos": "CAM",
        "birth": "1989.07.21",
        "country": "멕시코",
        "team": "마사틀란 풋볼 클럽"
    },
    {
        "name": "C. 스투아니",
        "originName": "크리스티안 스투아니",
        "pos": "ST",
        "birth": "1986.10.12",
        "country": "우루과이",
        "team": "지로나 FC"
    },
    {
        "name": "후이 파트리시우",
        "originName": "후이 페드루 두스 산투스 파트리시우",
        "pos": "GK",
        "birth": "1988.02.15",
        "country": "포르투갈",
        "team": "로마 FC"
    },
    {
        "name": "후안 마타",
        "originName": "후안 마누엘 마타 가르시아",
        "pos": "LW",
        "birth": "1988.04.28",
        "country": "스페인",
        "team": "비셀 고베"
    },
    {
        "name": "오스카",
        "originName": "오스카 두스 산투스 엠보아바",
        "pos": "CAM",
        "birth": "1991.09.09",
        "country": "브라질",
        "team": "상하이 하이강"
    },
    {
        "name": "무바라크 와카소",
        "originName": "무바라크 와카소",
        "pos": "LM",
        "birth": "1990.07.25",
        "country": "가나",
        "team": "선전 FC"
    },
    {
        "name": "리아드 부데부즈",
        "originName": "리아드 부데부즈",
        "pos": "CAM",
        "birth": "1990.02.19",
        "country": "알제리",
        "team": "오호드 클럽"
    },
    {
        "name": "세나드 룰리치",
        "originName": "세나드 룰리치",
        "pos": "CM",
        "birth": "1986.01.18",
        "country": "보스니아 헤르체고비나",
        "team": "라티움"
    },
    {
        "name": "헐크",
        "originName": "지바니우두 비에이라 지 소자",
        "pos": "RW",
        "birth": "1986.07.25",
        "country": "브라질",
        "team": "아틀레티쿠 미네이루"
    },
    {
        "name": "에딘손 카바니",
        "originName": "에딘손 카바니",
        "pos": "ST",
        "birth": "1987.02.14",
        "country": "우루과이",
        "team": "보카 주니어스"
    },
    {
        "name": "사미 케디라",
        "originName": "사미 케디라",
        "pos": "CDM",
        "birth": "1987.04.04",
        "country": "독일",
        "team": "헤르타 BSC"
    },
    {
        "name": "다비드 루이스",
        "originName": "다비드 루이스 모레이라 마리뉴",
        "pos": "CB",
        "birth": "1987.04.22",
        "country": "브라질",
        "team": "플라멩구"
    },
    {
        "name": "D. 오파레이",
        "originName": "대니얼 오파레이",
        "pos": "RB",
        "birth": "1990.10.18",
        "country": "가나",
        "team": "FRC 세랭"
    },
    {
        "name": "디에고 마라도나",
        "originName": "디에고 마라도나",
        "pos": "CAM",
        "birth": "1960.10.30",
        "country": "아르헨티나",
        "team": "보카 주니어스"
    },
    {
        "name": "오사코 유야",
        "originName": "오사코 유야",
        "pos": "ST",
        "birth": "1990.05.18",
        "country": "일본",
        "team": "비셀 고베"
    },
    {
        "name": "김신욱",
        "originName": "김신욱",
        "pos": "ST",
        "birth": "1988.04.14",
        "country": "대한민국",
        "team": "홈 유나이티드"
    },
    {
        "name": "다니엘 수바시치",
        "originName": "다니엘 수바시치",
        "pos": "GK",
        "birth": "1984.10.27",
        "country": "크로아티아",
        "team": "하이두크 스플리트"
    },
    {
        "name": "홀거 바트슈투버",
        "originName": "홀거 바트슈투버",
        "pos": "LB",
        "birth": "1989.03.13",
        "country": "독일",
        "team": "FC 루체른"
    },
    {
        "name": "나가토모 유토",
        "originName": "나가토모 유토",
        "pos": "LB",
        "birth": "1986.09.12",
        "country": "일본",
        "team": "FC 도쿄"
    },
    {
        "name": "디에고 고딘",
        "originName": "디에고 고딘",
        "pos": "CB",
        "birth": "1986.02.16",
        "country": "우루과이",
        "team": "벨레스 사르스피엘드"
    },
    {
        "name": "필 존스",
        "originName": "필 존스",
        "pos": "CB",
        "birth": "1992.02.21",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "매튜 레키",
        "originName": "매튜 레키",
        "pos": "RM",
        "birth": "1991.02.04",
        "country": "호주",
        "team": "멜버른 시티"
    },
    {
        "name": "S. 코아테스",
        "originName": "세바스티안 코아테스",
        "pos": "CB",
        "birth": "1990.10.07",
        "country": "우루과이",
        "team": "스포르팅 CP"
    },
    {
        "name": "앙헬 디마리아",
        "originName": "앙헬 디마리아",
        "pos": "LM",
        "birth": "1988.02.14",
        "country": "아르헨티나",
        "team": "SL 벤피카"
    },
    {
        "name": "마르코스 로호",
        "originName": "마르코스 로호",
        "pos": "LB",
        "birth": "1990.03.20",
        "country": "아르헨티나",
        "team": "보카 주니어스"
    },
    {
        "name": "T. 알데르베이럴트",
        "originName": "토비 알데르베이럴트",
        "pos": "RB",
        "birth": "1989.03.02",
        "country": "벨기에",
        "team": "로열 앤트워프"
    },
    {
        "name": "티미 챈들러",
        "originName": "티미 챈들러",
        "pos": "RB",
        "birth": "1990.03.29",
        "country": "미국",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "알렉시스 산체스",
        "originName": "알렉시스 산체스",
        "pos": "RW",
        "birth": "1988.12.19",
        "country": "칠레",
        "team": "인테르"
    },
    {
        "name": "A. 콜라로프",
        "originName": "알렉산다르 콜라로프",
        "pos": "LB",
        "birth": "1985.11.10",
        "country": "세르비아",
        "team": "인테르"
    },
    {
        "name": "루이스 구스타부",
        "originName": "루이스 구스타부 지아스",
        "pos": "CDM",
        "birth": "1987.07.23",
        "country": "브라질",
        "team": "알나스르"
    },
    {
        "name": "마리오 발로텔리",
        "originName": "마리오 발로텔리",
        "pos": "ST",
        "birth": "1990.08.12",
        "country": "이탈리아",
        "team": "아다나 데미르스포르"
    },
    {
        "name": "조엘 캠벨",
        "originName": "조엘 캠벨",
        "pos": "ST",
        "birth": "1992.06.26",
        "country": "코스타리카",
        "team": "레온"
    },
    {
        "name": "크리스토프 크라머",
        "originName": "크리스토프 크라머",
        "pos": "CDM",
        "birth": "1991.02.19",
        "country": "독일",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "조르디 알바",
        "originName": "조르디 알바 라모스",
        "pos": "LB",
        "birth": "1989.03.21",
        "country": "스페인",
        "team": "인터 마이애미"
    },
    {
        "name": "페드로",
        "originName": "페드로 로드리게스 레데스마",
        "pos": "LW",
        "birth": "1987.07.28",
        "country": "스페인",
        "team": "라티움"
    },
    {
        "name": "세르지오 부스케츠",
        "originName": "세르지오 부스케츠 부르고스",
        "pos": "CDM",
        "birth": "1988.07.16",
        "country": "스페인",
        "team": "인터 마이애미"
    },
    {
        "name": "크리스 스몰링",
        "originName": "크리스 스몰링",
        "pos": "CB",
        "birth": "1989.11.22",
        "country": "잉글랜드",
        "team": "로마 FC"
    },
    {
        "name": "토니 애덤스",
        "originName": "토니 애덤스",
        "pos": "CB",
        "birth": "1966.10.10",
        "country": "잉글랜드",
        "team": "아스널"
    },
    {
        "name": "아드난 야누자이",
        "originName": "아드난 야누자이",
        "pos": "RM",
        "birth": "1995.02.05",
        "country": "벨기에",
        "team": "세비야 FC"
    },
    {
        "name": "나빌 벤탈렙",
        "originName": "나빌 벤탈렙",
        "pos": "CM",
        "birth": "1994.11.24",
        "country": "알제리",
        "team": "LOSC 릴"
    },
    {
        "name": "안정환",
        "originName": "안정환",
        "pos": "CF",
        "birth": "1976.01.27",
        "country": "대한민국",
        "team": "다롄 스더"
    },
    {
        "name": "하비에르 파스토레",
        "originName": "하비에르 파스토레",
        "pos": "CAM",
        "birth": "1989.06.20",
        "country": "아르헨티나",
        "team": "카타르 SC"
    },
    {
        "name": "이운재",
        "originName": "이운재",
        "pos": "GK",
        "birth": "1973.04.26",
        "country": "대한민국",
        "team": "전남 드래곤즈"
    },
    {
        "name": "이을용",
        "originName": "이을용",
        "pos": "CM",
        "birth": "1975.09.08",
        "country": "대한민국",
        "team": "강원 FC"
    },
    {
        "name": "김남일",
        "originName": "김남일",
        "pos": "CDM",
        "birth": "1977.03.14",
        "country": "대한민국",
        "team": "교토 상가"
    },
    {
        "name": "송종국",
        "originName": "송종국",
        "pos": "RWB",
        "birth": "1979.02.20",
        "country": "대한민국",
        "team": "톈진 진먼후"
    },
    {
        "name": "이영표",
        "originName": "이영표",
        "pos": "LWB",
        "birth": "1977.04.23",
        "country": "대한민국",
        "team": "밴쿠버 화이트캡스"
    },
    {
        "name": "설기현",
        "originName": "설기현",
        "pos": "LW",
        "birth": "1979.01.08",
        "country": "대한민국",
        "team": "인천 유나이티드"
    },
    {
        "name": "김두현",
        "originName": "김두현",
        "pos": "CM",
        "birth": "1982.07.14",
        "country": "대한민국",
        "team": "인디 일레븐"
    },
    {
        "name": "이천수",
        "originName": "이천수",
        "pos": "LW",
        "birth": "1981.07.09",
        "country": "대한민국",
        "team": "인천 유나이티드"
    },
    {
        "name": "김진규",
        "originName": "김진규",
        "pos": "CB",
        "birth": "1985.02.16",
        "country": "대한민국",
        "team": "대전 하나 시티즌"
    },
    {
        "name": "최용수",
        "originName": "최용수",
        "pos": "ST",
        "birth": "1973.09.10",
        "country": "대한민국",
        "team": "FC 서울"
    },
    {
        "name": "서정원",
        "originName": "서정원",
        "pos": "RW",
        "birth": "1970.12.17",
        "country": "대한민국",
        "team": "SV 군타마틱 리트"
    },
    {
        "name": "이민성",
        "originName": "이민성",
        "pos": "CB",
        "birth": "1973.06.23",
        "country": "대한민국",
        "team": "용인시청 축구단"
    },
    {
        "name": "현영민",
        "originName": "현영민",
        "pos": "LB",
        "birth": "1979.12.25",
        "country": "대한민국",
        "team": "전남 드래곤즈"
    },
    {
        "name": "제르단 샤키리",
        "originName": "제르단 샤키리",
        "pos": "LM",
        "birth": "1991.10.10",
        "country": "스위스",
        "team": "시카고 파이어 FC"
    },
    {
        "name": "최진철",
        "originName": "최진철",
        "pos": "CB",
        "birth": "1971.03.26",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "최태욱",
        "originName": "최태욱",
        "pos": "RW",
        "birth": "1981.03.13",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "김병지",
        "originName": "김병지",
        "pos": "GK",
        "birth": "1970.04.08",
        "country": "대한민국",
        "team": "전남 드래곤즈"
    },
    {
        "name": "이정수",
        "originName": "이정수",
        "pos": "CB",
        "birth": "1980.01.08",
        "country": "대한민국",
        "team": "샬럿 인디펜던스"
    },
    {
        "name": "윤정환",
        "originName": "윤정환",
        "pos": "CAM",
        "birth": "1973.02.16",
        "country": "대한민국",
        "team": "사간 도스"
    },
    {
        "name": "김영광",
        "originName": "김영광",
        "pos": "GK",
        "birth": "1983.06.28",
        "country": "대한민국",
        "team": "성남 FC"
    },
    {
        "name": "김태영",
        "originName": "김태영",
        "pos": "LB",
        "birth": "1970.11.08",
        "country": "대한민국",
        "team": "전남 드래곤즈"
    },
    {
        "name": "폴 포그바",
        "originName": "폴 포그바",
        "pos": "CM",
        "birth": "1993.03.15",
        "country": "프랑스",
        "team": "유벤투스"
    },
    {
        "name": "최성용",
        "originName": "최성용",
        "pos": "RWB",
        "birth": "1975.12.25",
        "country": "대한민국",
        "team": "더스파구사쓰 군마"
    },
    {
        "name": "김도훈",
        "originName": "김도훈",
        "pos": "ST",
        "birth": "1970.07.21",
        "country": "대한민국",
        "team": "성남 FC"
    },
    {
        "name": "홍명보",
        "originName": "홍명보",
        "pos": "CB",
        "birth": "1969.02.12",
        "country": "대한민국",
        "team": "LA 갤럭시"
    },
    {
        "name": "정경호",
        "originName": "정경호",
        "pos": "LW",
        "birth": "1980.05.22",
        "country": "대한민국",
        "team": "대전 하나 시티즌"
    },
    {
        "name": "로렌초 인시녜",
        "originName": "로렌초 인시녜",
        "pos": "LW",
        "birth": "1991.06.04",
        "country": "이탈리아",
        "team": "토론토 FC"
    },
    {
        "name": "김상식",
        "originName": "김상식",
        "pos": "CB",
        "birth": "1976.12.17",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "A. 옥스-체임벌린",
        "originName": "앨릭스 옥슬레이드-체임벌린",
        "pos": "RM",
        "birth": "1993.08.15",
        "country": "잉글랜드",
        "team": "베식타슈"
    },
    {
        "name": "하메스 로드리게스",
        "originName": "하메스 로드리게스",
        "pos": "CAM",
        "birth": "1991.07.12",
        "country": "콜롬비아",
        "team": "알라이얀"
    },
    {
        "name": "김영철",
        "originName": "김영철",
        "pos": "CB",
        "birth": "1976.06.30",
        "country": "대한민국",
        "team": "부천 FC 1995"
    },
    {
        "name": "노정윤",
        "originName": "노정윤",
        "pos": "CM",
        "birth": "1971.03.28",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "최은성",
        "originName": "최은성",
        "pos": "GK",
        "birth": "1971.04.05",
        "country": "대한민국",
        "team": "전북 현대 모터스"
    },
    {
        "name": "조재진",
        "originName": "조재진",
        "pos": "ST",
        "birth": "1981.07.09",
        "country": "대한민국",
        "team": "감바 오사카"
    },
    {
        "name": "고종수",
        "originName": "고종수",
        "pos": "CAM",
        "birth": "1978.10.30",
        "country": "대한민국",
        "team": "대전 하나 시티즌"
    },
    {
        "name": "유상철",
        "originName": "유상철",
        "pos": "CM",
        "birth": "1971.10.18",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "차두리",
        "originName": "차두리",
        "pos": "RB",
        "birth": "1980.07.25",
        "country": "대한민국",
        "team": "FC 서울"
    },
    {
        "name": "서동명",
        "originName": "서동명",
        "pos": "GK",
        "birth": "1974.05.04",
        "country": "대한민국",
        "team": "부산 아이파크"
    },
    {
        "name": "황선홍",
        "originName": "황선홍",
        "pos": "ST",
        "birth": "1968.07.14",
        "country": "대한민국",
        "team": "전남 드래곤즈"
    },
    {
        "name": "하석주",
        "originName": "하석주",
        "pos": "LM",
        "birth": "1968.02.02",
        "country": "대한민국",
        "team": "포항 스틸러스"
    },
    {
        "name": "시메 브르살리코",
        "originName": "시메 브르살리코",
        "pos": "LB",
        "birth": "1992.01.10",
        "country": "크로아티아",
        "team": "올림피아코스 CFP"
    },
    {
        "name": "김도근",
        "originName": "김도근",
        "pos": "CM",
        "birth": "1972.03.02",
        "country": "대한민국",
        "team": "경남 FC"
    },
    {
        "name": "최영일",
        "originName": "최영일",
        "pos": "CB",
        "birth": "1966.04.25",
        "country": "대한민국",
        "team": "FC 서울"
    },
    {
        "name": "고정운",
        "originName": "고정운",
        "pos": "CF",
        "birth": "1966.06.27",
        "country": "대한민국",
        "team": "포항 스틸러스"
    },
    {
        "name": "신홍기",
        "originName": "신홍기",
        "pos": "LB",
        "birth": "1968.05.04",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "이상윤",
        "originName": "이상윤",
        "pos": "RW",
        "birth": "1969.04.10",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "이상헌",
        "originName": "이상훈",
        "pos": "CB",
        "birth": "1975.10.11",
        "country": "대한민국",
        "team": "인천 유나이티드"
    },
    {
        "name": "이임생",
        "originName": "이임생",
        "pos": "CB",
        "birth": "1971.11.18",
        "country": "대한민국",
        "team": "부산 아이파크"
    },
    {
        "name": "콰레스마",
        "originName": "히카르두 안드라드 쿠아레즈마 베르나르두",
        "pos": "RM",
        "birth": "1983.09.26",
        "country": "포르투갈",
        "team": "비토리아 SC"
    },
    {
        "name": "R. 야르스테인",
        "originName": "루네 알멘닝 야르스테인",
        "pos": "GK",
        "birth": "1984.09.29",
        "country": "노르웨이",
        "team": "헤르타 BSC"
    },
    {
        "name": "아두리스",
        "originName": "아리츠 아두리스 수벨디아",
        "pos": "ST",
        "birth": "1981.02.11",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "모야",
        "originName": "미겔 앙헬 모야 룸보",
        "pos": "GK",
        "birth": "1984.04.02",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "제레미 마티외",
        "originName": "제레미 마티외",
        "pos": "CB",
        "birth": "1983.10.29",
        "country": "프랑스",
        "team": "스포르팅 CP"
    },
    {
        "name": "블레림 제마일리",
        "originName": "블레림 제마일리",
        "pos": "CM",
        "birth": "1986.04.12",
        "country": "스위스",
        "team": "FC 취리히"
    },
    {
        "name": "라울 히메네스",
        "originName": "라울 히메네스",
        "pos": "ST",
        "birth": "1991.05.05",
        "country": "멕시코",
        "team": "풀럼"
    },
    {
        "name": "안드리 퍄토우",
        "originName": "안드리 퍄토우",
        "pos": "GK",
        "birth": "1984.06.28",
        "country": "우크라이나",
        "team": "샤흐타르 도네츠크"
    },
    {
        "name": "가비",
        "originName": "가브리엘 페르난데스 아레나스",
        "pos": "CM",
        "birth": "1983.07.10",
        "country": "스페인",
        "team": "알사드"
    },
    {
        "name": "루카스 빌리아",
        "originName": "루카스 빌리아",
        "pos": "CDM",
        "birth": "1986.01.30",
        "country": "아르헨티나",
        "team": "바샥셰히르"
    },
    {
        "name": "무사 뎀벨레",
        "originName": "무사 뎀벨레",
        "pos": "CM",
        "birth": "1987.07.16",
        "country": "벨기에",
        "team": "광저우 시티"
    },
    {
        "name": "베다드 이비셰비치",
        "originName": "베다드 이비셰비치",
        "pos": "ST",
        "birth": "1984.08.06",
        "country": "보스니아 헤르체고비나",
        "team": "FC 샬케 04"
    },
    {
        "name": "네이마르 Jr.",
        "originName": "네이마르 다 시우바 산투스 Jr.",
        "pos": "LW",
        "birth": "1992.02.05",
        "country": "브라질",
        "team": "알힐랄"
    },
    {
        "name": "레이턴 베인스",
        "originName": "레이턴 베인스",
        "pos": "LB",
        "birth": "1984.12.11",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "필리피 루이스",
        "originName": "필리피 루이스 카스미르스키",
        "pos": "LB",
        "birth": "1985.08.09",
        "country": "브라질",
        "team": "플라멩구"
    },
    {
        "name": "라사나 디아라",
        "originName": "라사나 디아라",
        "pos": "CDM",
        "birth": "1985.03.10",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "Ș. 라두",
        "originName": "슈테판 라두",
        "pos": "CB",
        "birth": "1986.10.22",
        "country": "루마니아",
        "team": "라티움"
    },
    {
        "name": "J. 브와슈치코프스키",
        "originName": "야쿠프 브와슈치코프스키",
        "pos": "RM",
        "birth": "1985.12.14",
        "country": "폴란드",
        "team": "비스와 크라쿠프"
    },
    {
        "name": "자르델",
        "originName": "자르델 니바우두 비에이라",
        "pos": "CB",
        "birth": "1986.03.29",
        "country": "브라질",
        "team": "SL 벤피카"
    },
    {
        "name": "두샨 바스타",
        "originName": "두샨 바스타",
        "pos": "RB",
        "birth": "1984.08.18",
        "country": "세르비아",
        "team": "라티움"
    },
    {
        "name": "에리크 라멜라",
        "originName": "에리크 라멜라",
        "pos": "RM",
        "birth": "1992.03.04",
        "country": "아르헨티나",
        "team": "세비야 FC"
    },
    {
        "name": "대니 로즈",
        "originName": "대니 로즈",
        "pos": "LB",
        "birth": "1990.07.02",
        "country": "잉글랜드",
        "team": "왓퍼드"
    },
    {
        "name": "파비우 코엔트랑",
        "originName": "파비우 알레샨드르 실바 코엔트랑",
        "pos": "LB",
        "birth": "1988.03.11",
        "country": "포르투갈",
        "team": "히우 아브 FC"
    },
    {
        "name": "요나스 뢰슬",
        "originName": "요나스 뢰슬",
        "pos": "GK",
        "birth": "1989.02.01",
        "country": "덴마크",
        "team": "FC 미트윌란"
    },
    {
        "name": "크리스티안 안살디",
        "originName": "크리스티안 안살디",
        "pos": "LB",
        "birth": "1986.09.20",
        "country": "아르헨티나",
        "team": "파르마"
    },
    {
        "name": "마르카노",
        "originName": "이반 마르카노 시에라",
        "pos": "CB",
        "birth": "1987.06.23",
        "country": "스페인",
        "team": "FC 포르투"
    },
    {
        "name": "엑토르 모레노",
        "originName": "엑토르 모레노",
        "pos": "CB",
        "birth": "1988.01.17",
        "country": "멕시코",
        "team": "CF 몬테레이"
    },
    {
        "name": "루카스 레이바",
        "originName": "루카스 페시니 레이바",
        "pos": "CDM",
        "birth": "1987.01.09",
        "country": "브라질",
        "team": "그레미우"
    },
    {
        "name": "D. 치흐린스키",
        "originName": "드미트로 치흐린스키",
        "pos": "CB",
        "birth": "1986.11.07",
        "country": "우크라이나",
        "team": "샤흐타르 도네츠크"
    },
    {
        "name": "모르강 슈네델랑",
        "originName": "모르강 슈네델랑",
        "pos": "CDM",
        "birth": "1989.11.08",
        "country": "프랑스",
        "team": "OGC 니스"
    },
    {
        "name": "메디 베나티아",
        "originName": "메디 베나티아",
        "pos": "CB",
        "birth": "1987.04.17",
        "country": "모로코",
        "team": "파티흐 카라귐뤼크"
    },
    {
        "name": "키코 카시야",
        "originName": "프란시스코 카시야 코르테스",
        "pos": "GK",
        "birth": "1986.10.02",
        "country": "스페인",
        "team": "헤타페 CF"
    },
    {
        "name": "저메인 렌스",
        "originName": "저메인 렌스",
        "pos": "RM",
        "birth": "1987.11.24",
        "country": "네덜란드",
        "team": "베식타슈"
    },
    {
        "name": "페페 레이나",
        "originName": "호세 마누엘 레이나 파에즈",
        "pos": "GK",
        "birth": "1982.08.31",
        "country": "스페인",
        "team": "비야레알 CF"
    },
    {
        "name": "마르코 마린",
        "originName": "마르코 마린",
        "pos": "CAM",
        "birth": "1989.03.13",
        "country": "독일",
        "team": "페렌츠바로시 TC"
    },
    {
        "name": "페데리코 파시오",
        "originName": "페데리코 파시오",
        "pos": "CB",
        "birth": "1987.03.17",
        "country": "아르헨티나",
        "team": "살레르니타나"
    },
    {
        "name": "애덤 랄라나",
        "originName": "애덤 랄라나",
        "pos": "CM",
        "birth": "1988.05.10",
        "country": "잉글랜드",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "알레한드로 고메스",
        "originName": "알레한드로 고메스",
        "pos": "CF",
        "birth": "1988.02.15",
        "country": "아르헨티나",
        "team": "세비야 FC"
    },
    {
        "name": "알빈 에크달",
        "originName": "알빈 에크달",
        "pos": "CM",
        "birth": "1989.07.28",
        "country": "스웨덴",
        "team": "스페치아"
    },
    {
        "name": "야콥 요한손",
        "originName": "야콥 요한손",
        "pos": "CDM",
        "birth": "1990.06.21",
        "country": "스웨덴",
        "team": "IFK 예테보리"
    },
    {
        "name": "페르난도 무슬레라",
        "originName": "페르난도 무슬레라",
        "pos": "GK",
        "birth": "1986.06.16",
        "country": "우루과이",
        "team": "갈라타사라이"
    },
    {
        "name": "노르딘 암라바트",
        "originName": "노르딘 암라바트",
        "pos": "RM",
        "birth": "1987.03.31",
        "country": "모로코",
        "team": "AEK 아테네"
    },
    {
        "name": "아딜 라미",
        "originName": "아딜 라미",
        "pos": "CB",
        "birth": "1985.12.27",
        "country": "프랑스",
        "team": "ESTAC 트루아"
    },
    {
        "name": "마르코 파롤로",
        "originName": "마르코 파롤로",
        "pos": "CM",
        "birth": "1985.01.25",
        "country": "이탈리아",
        "team": "라티움"
    },
    {
        "name": "류보미르 페이사",
        "originName": "류보미르 페이사",
        "pos": "CDM",
        "birth": "1988.08.14",
        "country": "세르비아",
        "team": "파르티잔 베오그라드"
    },
    {
        "name": "상카",
        "originName": "마티아스 예르겐센",
        "pos": "CB",
        "birth": "1990.04.23",
        "country": "덴마크",
        "team": "브렌트퍼드"
    },
    {
        "name": "카스퍼 슈마이켈",
        "originName": "카스퍼 슈마이켈",
        "pos": "GK",
        "birth": "1986.11.05",
        "country": "덴마크",
        "team": "RSC 안데를레흐트"
    },
    {
        "name": "디에고 페로티",
        "originName": "디에고 페로티",
        "pos": "LW",
        "birth": "1988.07.26",
        "country": "아르헨티나",
        "team": "살레르니타나"
    },
    {
        "name": "브루노",
        "originName": "브루노 소리아노 리도",
        "pos": "CM",
        "birth": "1984.06.12",
        "country": "스페인",
        "team": "비야레알 CF"
    },
    {
        "name": "우카시 파비안스키",
        "originName": "우카시 파비안스키",
        "pos": "GK",
        "birth": "1985.04.18",
        "country": "폴란드",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "야신 브라히미",
        "originName": "야신 브라히미",
        "pos": "LM",
        "birth": "1990.02.08",
        "country": "알제리",
        "team": "알가라파 SC"
    },
    {
        "name": "아드리엥 실바",
        "originName": "아드리엥 S. 페후셰트 실바",
        "pos": "CM",
        "birth": "1989.03.15",
        "country": "포르투갈",
        "team": "삼프도리아"
    },
    {
        "name": "호세 카예혼",
        "originName": "호세 마리아 카예혼 부에노",
        "pos": "RW",
        "birth": "1987.02.11",
        "country": "스페인",
        "team": "그라나다 CF"
    },
    {
        "name": "외메르 토프라크",
        "originName": "외메르 토프라크",
        "pos": "CB",
        "birth": "1989.07.21",
        "country": "튀르키예",
        "team": "안탈랴스포르"
    },
    {
        "name": "니콜라 칼리니치",
        "originName": "니콜라 칼리니치",
        "pos": "ST",
        "birth": "1988.01.05",
        "country": "크로아티아",
        "team": "하이두크 스플리트"
    },
    {
        "name": "마테오 무사키오",
        "originName": "마테오 무사키오",
        "pos": "CB",
        "birth": "1990.08.26",
        "country": "아르헨티나",
        "team": "라티움"
    },
    {
        "name": "대니 드링크워터",
        "originName": "대니 드링크워터",
        "pos": "CM",
        "birth": "1990.03.05",
        "country": "잉글랜드",
        "team": "첼시"
    },
    {
        "name": "콰조 아사모아",
        "originName": "콰조 아사모아",
        "pos": "LB",
        "birth": "1988.12.09",
        "country": "가나",
        "team": "칼리아리"
    },
    {
        "name": "스티븐 은존지",
        "originName": "스티븐 은존지",
        "pos": "CDM",
        "birth": "1988.12.15",
        "country": "프랑스",
        "team": "코니아스포르"
    },
    {
        "name": "마를루스",
        "originName": "마를루스 호메루 본핑",
        "pos": "RM",
        "birth": "1988.06.07",
        "country": "우크라이나",
        "team": "아틀레티쿠 파렌세"
    },
    {
        "name": "팔카오",
        "originName": "라다멜 팔카오 가르시아 사라테",
        "pos": "ST",
        "birth": "1986.02.10",
        "country": "콜롬비아",
        "team": "라요 바예카노"
    },
    {
        "name": "파울리뉴",
        "originName": "주제 파울루 베제하 M. 주니오르",
        "pos": "CM",
        "birth": "1988.07.25",
        "country": "브라질",
        "team": "코린치안스"
    },
    {
        "name": "리언 발로군",
        "originName": "리언 발로군",
        "pos": "CB",
        "birth": "1988.06.28",
        "country": "나이지리아",
        "team": "레인저스"
    },
    {
        "name": "마르셀 슈멜처",
        "originName": "마르셀 슈멜처",
        "pos": "LB",
        "birth": "1988.01.22",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "타이손",
        "originName": "타이손 바르셀루스 프레다",
        "pos": "CAM",
        "birth": "1988.01.13",
        "country": "브라질",
        "team": "파오크 FC"
    },
    {
        "name": "미란다",
        "originName": "주앙 미란다 지 소자 필류",
        "pos": "CB",
        "birth": "1984.09.07",
        "country": "브라질",
        "team": "상 파울루"
    },
    {
        "name": "라울 가르시아",
        "originName": "라울 가르시아 에스쿠데로",
        "pos": "CAM",
        "birth": "1986.07.11",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "빅터 완야마",
        "originName": "빅터 완야마",
        "pos": "CDM",
        "birth": "1991.06.25",
        "country": "케냐",
        "team": "CF 몽레알"
    },
    {
        "name": "바스 도스트",
        "originName": "바스 도스트",
        "pos": "ST",
        "birth": "1989.05.31",
        "country": "네덜란드",
        "team": "NEC 네이메헌"
    },
    {
        "name": "자코모 보나벤투라",
        "originName": "자코모 보나벤투라",
        "pos": "CM",
        "birth": "1989.08.22",
        "country": "이탈리아",
        "team": "피오렌티나"
    },
    {
        "name": "지미 두르마즈",
        "originName": "지미 두르마즈",
        "pos": "LM",
        "birth": "1989.03.22",
        "country": "스웨덴",
        "team": "AIK"
    },
    {
        "name": "제바스티안 루디",
        "originName": "제바스티안 루디",
        "pos": "CM",
        "birth": "1990.02.28",
        "country": "독일",
        "team": "TSG 호펜하임"
    },
    {
        "name": "프랑시스 코클랭",
        "originName": "프랑시스 코클랭",
        "pos": "CDM",
        "birth": "1991.05.13",
        "country": "프랑스",
        "team": "비야레알 CF"
    },
    {
        "name": "가가와 신지",
        "originName": "가가와 신지",
        "pos": "CAM",
        "birth": "1989.03.17",
        "country": "일본",
        "team": "세레소 오사카"
    },
    {
        "name": "수사에타",
        "originName": "마르켈 수사에타 라스쿠라인",
        "pos": "RW",
        "birth": "1987.12.14",
        "country": "스페인",
        "team": "매카서 FC"
    },
    {
        "name": "케빈 스트로트만",
        "originName": "케빈 스트로트만",
        "pos": "CM",
        "birth": "1990.02.13",
        "country": "네덜란드",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "카를-요한 욘손",
        "originName": "카를-요한 욘손",
        "pos": "GK",
        "birth": "1990.01.28",
        "country": "스웨덴",
        "team": "지롱댕 보르도"
    },
    {
        "name": "데마르코스",
        "originName": "오스카르 데마르코스 아라나",
        "pos": "RB",
        "birth": "1989.04.14",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "나다니엘 클라인",
        "originName": "나다니엘 클라인",
        "pos": "RB",
        "birth": "1991.04.05",
        "country": "잉글랜드",
        "team": "크리스털 팰리스"
    },
    {
        "name": "아뎀 랴이치",
        "originName": "아뎀 랴이치",
        "pos": "CAM",
        "birth": "1991.09.29",
        "country": "세르비아",
        "team": "FK 노비 파자르"
    },
    {
        "name": "가레스 베일",
        "originName": "가레스 베일",
        "pos": "RW",
        "birth": "1989.07.16",
        "country": "웨일스",
        "team": "LA FC"
    },
    {
        "name": "우카시 피슈체크",
        "originName": "우카시 피슈체크",
        "pos": "RB",
        "birth": "1985.06.03",
        "country": "폴란드",
        "team": "LKS 고칼고프스-즈드로이"
    },
    {
        "name": "드리스 메르턴스",
        "originName": "드리스 메르턴스",
        "pos": "CF",
        "birth": "1987.05.06",
        "country": "벨기에",
        "team": "갈라타사라이"
    },
    {
        "name": "케빈 가메이로",
        "originName": "케빈 가메이로",
        "pos": "ST",
        "birth": "1987.05.09",
        "country": "프랑스",
        "team": "스트라스부르 알자스"
    },
    {
        "name": "에두아르도 살비오",
        "originName": "에두아르도 살비오",
        "pos": "RW",
        "birth": "1990.07.13",
        "country": "아르헨티나",
        "team": "클루브 우니베르시다드 나시오날"
    },
    {
        "name": "J. 그뷔드뮌손",
        "originName": "요한 베르그 그뷔드뮌손",
        "pos": "RM",
        "birth": "1990.10.27",
        "country": "아이슬란드",
        "team": "번리"
    },
    {
        "name": "요시다 마야",
        "originName": "요시다 마야",
        "pos": "CB",
        "birth": "1988.08.24",
        "country": "일본",
        "team": "LA 갤럭시"
    },
    {
        "name": "슈코드란 무스타피",
        "originName": "슈코드란 무스타피",
        "pos": "CB",
        "birth": "1992.04.17",
        "country": "독일",
        "team": "레반테 UD"
    },
    {
        "name": "케빈 포크트",
        "originName": "케빈 포크트",
        "pos": "CB",
        "birth": "1991.09.23",
        "country": "독일",
        "team": "TSG 호펜하임"
    },
    {
        "name": "마리오 가스파르",
        "originName": "마리오 가스파르 페레스 마르티네스",
        "pos": "RB",
        "birth": "1990.11.24",
        "country": "스페인",
        "team": "엘체 CF"
    },
    {
        "name": "치차리토",
        "originName": "하비에르 에르난데스",
        "pos": "ST",
        "birth": "1988.06.01",
        "country": "멕시코",
        "team": "LA 갤럭시"
    },
    {
        "name": "에베르 바네가",
        "originName": "에베르 바네가",
        "pos": "CAM",
        "birth": "1988.06.29",
        "country": "아르헨티나",
        "team": "알샤밥"
    },
    {
        "name": "젠크 토순",
        "originName": "젠크 토순",
        "pos": "ST",
        "birth": "1991.06.07",
        "country": "튀르키예",
        "team": "베식타슈"
    },
    {
        "name": "안드레 쉬얼레",
        "originName": "안드레 쉬얼레",
        "pos": "LM",
        "birth": "1990.11.06",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "J. 라르센",
        "originName": "옌스 스트뤼거 라르센",
        "pos": "CB",
        "birth": "1991.02.21",
        "country": "덴마크",
        "team": "트라브존스포르"
    },
    {
        "name": "라자 나잉골란",
        "originName": "라자 나잉골란",
        "pos": "CM",
        "birth": "1988.05.04",
        "country": "벨기에",
        "team": "스팔"
    },
    {
        "name": "세르히오 아센호",
        "originName": "세르히오 아센호 안드레스",
        "pos": "GK",
        "birth": "1989.06.28",
        "country": "스페인",
        "team": "레알 바야돌리드"
    },
    {
        "name": "M. 브레스웨이트",
        "originName": "마르틴 브레스웨이트",
        "pos": "ST",
        "birth": "1991.06.05",
        "country": "덴마크",
        "team": "RCD 에스파뇰"
    },
    {
        "name": "헤수스 코로나",
        "originName": "헤수스 코로나",
        "pos": "RM",
        "birth": "1993.01.06",
        "country": "멕시코",
        "team": "CF 몬테레이"
    },
    {
        "name": "빅토르 루이스",
        "originName": "빅토르 루이스 토레",
        "pos": "CB",
        "birth": "1989.01.25",
        "country": "스페인",
        "team": "RCD 에스파뇰"
    },
    {
        "name": "디에고 코스타",
        "originName": "디에고 다 실바 코스타",
        "pos": "ST",
        "birth": "1988.10.07",
        "country": "스페인",
        "team": "보타포구"
    },
    {
        "name": "가리 메델",
        "originName": "가리 메델",
        "pos": "CDM",
        "birth": "1987.08.03",
        "country": "칠레",
        "team": "바스쿠 다 가마"
    },
    {
        "name": "유네스 벨한다",
        "originName": "유네스 벨한다",
        "pos": "CAM",
        "birth": "1990.02.25",
        "country": "모로코",
        "team": "아다나 데미르스포르"
    },
    {
        "name": "미랄렘 피아니치",
        "originName": "미랄렘 피아니치",
        "pos": "CM",
        "birth": "1990.04.02",
        "country": "보스니아 헤르체고비나",
        "team": "샤르자 SC"
    },
    {
        "name": "에딘 제코",
        "originName": "에딘 제코",
        "pos": "ST",
        "birth": "1986.03.17",
        "country": "보스니아 헤르체고비나",
        "team": "페네르바흐체"
    },
    {
        "name": "안드레 알메이다",
        "originName": "안드레 고메스 마갈량이스 알메이다",
        "pos": "RB",
        "birth": "1990.09.10",
        "country": "포르투갈",
        "team": "SL 벤피카"
    },
    {
        "name": "안드리 야르몰렌코",
        "originName": "안드리 야르몰렌코",
        "pos": "RM",
        "birth": "1989.10.23",
        "country": "우크라이나",
        "team": "디나모 키이우"
    },
    {
        "name": "오카자키 신지",
        "originName": "오카자키 신지",
        "pos": "CF",
        "birth": "1986.04.16",
        "country": "일본",
        "team": "신트-트라위던"
    },
    {
        "name": "조르지뇨 베이날둠",
        "originName": "조르지뇨 베이날둠",
        "pos": "CM",
        "birth": "1990.11.11",
        "country": "네덜란드",
        "team": "에티파크 FC"
    },
    {
        "name": "알프레드 핀보가손",
        "originName": "알프레드 핀보가손",
        "pos": "ST",
        "birth": "1989.02.01",
        "country": "아이슬란드",
        "team": "KAS 오이펜"
    },
    {
        "name": "오우잔 외지아쿠프",
        "originName": "오우잔 외지아쿠프",
        "pos": "CM",
        "birth": "1992.09.23",
        "country": "튀르키예",
        "team": "포르투나 시타르트"
    },
    {
        "name": "카림 안사리파드",
        "originName": "카림 안사리파드",
        "pos": "ST",
        "birth": "1990.04.03",
        "country": "이란",
        "team": "오모니아 니코시아"
    },
    {
        "name": "스테반 요베티치",
        "originName": "스테반 요베티치",
        "pos": "ST",
        "birth": "1989.11.02",
        "country": "몬테네그로",
        "team": "헤르타 BSC"
    },
    {
        "name": "압둘라예 디알로",
        "originName": "압둘라예 디알로",
        "pos": "GK",
        "birth": "1992.03.30",
        "country": "세네갈",
        "team": "AS 낭시"
    },
    {
        "name": "피지",
        "originName": "루이스 미겔 아폰수 페르난데스",
        "pos": "CM",
        "birth": "1989.10.06",
        "country": "포르투갈",
        "team": "SC 브라가"
    },
    {
        "name": "세르주 오리에",
        "originName": "세르주 오리에",
        "pos": "RB",
        "birth": "1992.12.24",
        "country": "코트디부아르",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "프랑수아 무반제",
        "originName": "프랑수아 무반제",
        "pos": "LB",
        "birth": "1990.06.21",
        "country": "스위스",
        "team": "FC 시옹"
    },
    {
        "name": "마르크 바르트라",
        "originName": "마르크 바르트라 아레갈",
        "pos": "CB",
        "birth": "1991.01.15",
        "country": "스페인",
        "team": "레알 베티스"
    },
    {
        "name": "매튜 라이언",
        "originName": "매튜 라이언",
        "pos": "GK",
        "birth": "1992.04.08",
        "country": "호주",
        "team": "AZ"
    },
    {
        "name": "길피 시구르드손",
        "originName": "길피 시구르드손",
        "pos": "CAM",
        "birth": "1989.09.08",
        "country": "아이슬란드",
        "team": "륑뷔 BK"
    },
    {
        "name": "키어런 트리피어",
        "originName": "키어런 트리피어",
        "pos": "RB",
        "birth": "1990.09.19",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "아론 램지",
        "originName": "아론 램지",
        "pos": "CM",
        "birth": "1990.12.26",
        "country": "웨일스",
        "team": "카디프 시티"
    },
    {
        "name": "뱅상 아부바카르",
        "originName": "뱅상 아부바카르",
        "pos": "ST",
        "birth": "1992.01.22",
        "country": "카메룬",
        "team": "베식타슈"
    },
    {
        "name": "도마고이 비다",
        "originName": "도마고이 비다",
        "pos": "CB",
        "birth": "1989.04.29",
        "country": "크로아티아",
        "team": "AEK 아테네"
    },
    {
        "name": "욘 귀데티",
        "originName": "욘 귀데티",
        "pos": "ST",
        "birth": "1992.04.15",
        "country": "스웨덴",
        "team": "AIK"
    },
    {
        "name": "놀리토",
        "originName": "마누엘 아구도 두란",
        "pos": "LW",
        "birth": "1986.10.15",
        "country": "스페인",
        "team": "UD 이비사"
    },
    {
        "name": "비톨로",
        "originName": "빅토르 마친 페레스",
        "pos": "LM",
        "birth": "1989.11.02",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "B. 베레신스키",
        "originName": "바르토시 베레신스키",
        "pos": "RB",
        "birth": "1992.07.12",
        "country": "폴란드",
        "team": "삼프도리아"
    },
    {
        "name": "로만 뷔어키",
        "originName": "로만 뷔어키",
        "pos": "GK",
        "birth": "1990.11.14",
        "country": "스위스",
        "team": "세인트루이스 시티"
    },
    {
        "name": "무니아인",
        "originName": "이케르 무니아인 고니",
        "pos": "LW",
        "birth": "1992.12.19",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "더글라스 코스타",
        "originName": "더글라스 코스타 지 소자",
        "pos": "RW",
        "birth": "1990.09.14",
        "country": "브라질",
        "team": "LA 갤럭시"
    },
    {
        "name": "카밀 글리크",
        "originName": "카밀 글리크",
        "pos": "CB",
        "birth": "1988.02.03",
        "country": "폴란드",
        "team": "크라코비아"
    },
    {
        "name": "이야라멘디",
        "originName": "아시에르 이야라멘디",
        "pos": "CM",
        "birth": "1990.03.08",
        "country": "스페인",
        "team": "FC 댈러스"
    },
    {
        "name": "알랑",
        "originName": "알랑 마르키스 로레이루",
        "pos": "CM",
        "birth": "1991.01.08",
        "country": "브라질",
        "team": "알와흐다"
    },
    {
        "name": "티모 호른",
        "originName": "티모 호른",
        "pos": "GK",
        "birth": "1993.05.12",
        "country": "독일",
        "team": "1. FC 쾰른"
    },
    {
        "name": "마르크 우트",
        "originName": "마르크 우트",
        "pos": "ST",
        "birth": "1991.08.24",
        "country": "독일",
        "team": "1. FC 쾰른"
    },
    {
        "name": "세드리크",
        "originName": "세드리크 히카르두 알베스 소아르스",
        "pos": "RB",
        "birth": "1991.08.31",
        "country": "포르투갈",
        "team": "아스널"
    },
    {
        "name": "이스마일리",
        "originName": "이스마일리 곤사우베스 두스 산투스",
        "pos": "LB",
        "birth": "1990.01.11",
        "country": "브라질",
        "team": "LOSC 릴"
    },
    {
        "name": "밀란 바델",
        "originName": "밀란 바델",
        "pos": "CDM",
        "birth": "1989.02.25",
        "country": "크로아티아",
        "team": "제노아"
    },
    {
        "name": "이반 스트리니치",
        "originName": "이반 스트리니치",
        "pos": "LB",
        "birth": "1987.07.17",
        "country": "크로아티아",
        "team": "AC 밀란"
    },
    {
        "name": "코스타스 마놀라스",
        "originName": "코스타스 마놀라스",
        "pos": "CB",
        "birth": "1991.06.14",
        "country": "그리스",
        "team": "샤르자 SC"
    },
    {
        "name": "파우지 굴람",
        "originName": "파우지 굴람",
        "pos": "LB",
        "birth": "1991.02.01",
        "country": "알제리",
        "team": "하타이스포르"
    },
    {
        "name": "살리프 사네",
        "originName": "살리프 사네",
        "pos": "CB",
        "birth": "1990.08.25",
        "country": "세네갈",
        "team": "FC 샬케 04"
    },
    {
        "name": "C. 피치니",
        "originName": "크리스티아노 피치니",
        "pos": "RB",
        "birth": "1992.09.26",
        "country": "이탈리아",
        "team": "1. FC 마그데부르크"
    },
    {
        "name": "알프레드 고미스",
        "originName": "알프레드 고미스",
        "pos": "GK",
        "birth": "1993.09.05",
        "country": "세네갈",
        "team": "스타드 렌"
    },
    {
        "name": "알퐁스 아레올라",
        "originName": "알퐁스 아레올라",
        "pos": "GK",
        "birth": "1993.02.27",
        "country": "프랑스",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "R. 로드리게스",
        "originName": "리카르도 로드리게스",
        "pos": "LB",
        "birth": "1992.08.25",
        "country": "스위스",
        "team": "토리노"
    },
    {
        "name": "토마스 딜레이니",
        "originName": "토마스 딜레이니",
        "pos": "CM",
        "birth": "1991.09.03",
        "country": "덴마크",
        "team": "세비야 FC"
    },
    {
        "name": "펠리피 안데르송",
        "originName": "펠리피 안데르송 페레이라 고메스",
        "pos": "RW",
        "birth": "1993.04.15",
        "country": "브라질",
        "team": "라티움"
    },
    {
        "name": "데얀 로브렌",
        "originName": "데얀 로브렌",
        "pos": "CB",
        "birth": "1989.07.05",
        "country": "크로아티아",
        "team": "올랭피크 리옹"
    },
    {
        "name": "케빈 캄플",
        "originName": "케빈 캄플",
        "pos": "CM",
        "birth": "1990.10.09",
        "country": "슬로베니아",
        "team": "RB 라이프치히"
    },
    {
        "name": "수소",
        "originName": "헤수스 호아킨 페르난데스 사에스",
        "pos": "RW",
        "birth": "1993.11.19",
        "country": "스페인",
        "team": "세비야 FC"
    },
    {
        "name": "잭 버틀런드",
        "originName": "잭 버틀런드",
        "pos": "GK",
        "birth": "1993.03.10",
        "country": "잉글랜드",
        "team": "레인저스"
    },
    {
        "name": "야니크 베스터고르",
        "originName": "야니크 베스터고르",
        "pos": "CB",
        "birth": "1992.08.03",
        "country": "덴마크",
        "team": "레스터 시티"
    },
    {
        "name": "발레르 제르망",
        "originName": "발레르 제르망",
        "pos": "ST",
        "birth": "1990.04.17",
        "country": "프랑스",
        "team": "매카서 FC"
    },
    {
        "name": "이스코",
        "originName": "프란시스코 로만 알라르콘 수아레스",
        "pos": "CM",
        "birth": "1992.04.21",
        "country": "스페인",
        "team": "레알 베티스"
    },
    {
        "name": "안드레 카리요",
        "originName": "안드레 카리요",
        "pos": "RM",
        "birth": "1991.06.14",
        "country": "페루",
        "team": "알카디시아"
    },
    {
        "name": "엑토르 베예린",
        "originName": "엑토르 베예린 모루노",
        "pos": "RWB",
        "birth": "1995.03.19",
        "country": "스페인",
        "team": "레알 베티스"
    },
    {
        "name": "닉 포프",
        "originName": "닉 포프",
        "pos": "GK",
        "birth": "1992.04.19",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "에리크 보테긴",
        "originName": "에리크 페르난두 보테긴",
        "pos": "CB",
        "birth": "1987.08.31",
        "country": "브라질",
        "team": "아스콜리"
    },
    {
        "name": "로리스 카리우스",
        "originName": "로리스 카리우스",
        "pos": "GK",
        "birth": "1993.06.22",
        "country": "독일",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "로드리고",
        "originName": "로드리고 모레노 마차도",
        "pos": "ST",
        "birth": "1991.03.06",
        "country": "스페인",
        "team": "알라이얀"
    },
    {
        "name": "K. 포르투니스",
        "originName": "코스타스 포르투니스",
        "pos": "CAM",
        "birth": "1992.10.16",
        "country": "그리스",
        "team": "올림피아코스 CFP"
    },
    {
        "name": "차를레스 아랑기스",
        "originName": "차를레스 아랑기스",
        "pos": "CM",
        "birth": "1989.04.17",
        "country": "칠레",
        "team": "인터나시오날"
    },
    {
        "name": "파이살 파지르",
        "originName": "파이살 파지르",
        "pos": "CM",
        "birth": "1988.08.01",
        "country": "모로코",
        "team": "알웨흐다"
    },
    {
        "name": "이누이 다카시",
        "originName": "이누이 다카시",
        "pos": "LM",
        "birth": "1988.06.04",
        "country": "일본",
        "team": "시미즈 에스펄스"
    },
    {
        "name": "데니스 수아레스",
        "originName": "데니스 수아레스 페르난데스",
        "pos": "CM",
        "birth": "1994.01.06",
        "country": "스페인",
        "team": "비야레알 CF"
    },
    {
        "name": "나임 슬리티",
        "originName": "나임 슬리티",
        "pos": "LM",
        "birth": "1992.07.27",
        "country": "튀니지",
        "team": "알아흘리 SC"
    },
    {
        "name": "루이스 무리엘",
        "originName": "루이스 무리엘",
        "pos": "ST",
        "birth": "1991.04.16",
        "country": "콜롬비아",
        "team": "베르가모 칼초"
    },
    {
        "name": "에딘 비슈차",
        "originName": "에딘 비슈차",
        "pos": "RM",
        "birth": "1990.02.17",
        "country": "보스니아 헤르체고비나",
        "team": "트라브존스포르"
    },
    {
        "name": "벤 데이비스",
        "originName": "벤 데이비스",
        "pos": "LWB",
        "birth": "1993.04.24",
        "country": "웨일스",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "루카 밀리보예비치",
        "originName": "루카 밀리보예비치",
        "pos": "CDM",
        "birth": "1991.04.07",
        "country": "세르비아",
        "team": "크리스털 팰리스"
    },
    {
        "name": "두샨 타디치",
        "originName": "두샨 타디치",
        "pos": "CAM",
        "birth": "1988.11.20",
        "country": "세르비아",
        "team": "페네르바흐체"
    },
    {
        "name": "타라스 스테파넨코",
        "originName": "타라스 스테파넨코",
        "pos": "CDM",
        "birth": "1989.08.08",
        "country": "우크라이나",
        "team": "샤흐타르 도네츠크"
    },
    {
        "name": "프랑코 바스케스",
        "originName": "프랑코 바스케스",
        "pos": "CAM",
        "birth": "1989.02.22",
        "country": "이탈리아",
        "team": "크레모네세"
    },
    {
        "name": "세르히오 리코",
        "originName": "세르히오 리코 곤살레스",
        "pos": "GK",
        "birth": "1993.09.01",
        "country": "스페인",
        "team": "파리 생제르맹"
    },
    {
        "name": "세르지 로베르토",
        "originName": "세르지오 로베르토 카르니세르",
        "pos": "RB",
        "birth": "1992.02.07",
        "country": "스페인",
        "team": "FC 바르셀로나"
    },
    {
        "name": "필리프 헬란데르",
        "originName": "필리프 헬란데르",
        "pos": "CB",
        "birth": "1993.04.22",
        "country": "스웨덴",
        "team": "오덴세 BK"
    },
    {
        "name": "에밀 크라프트",
        "originName": "에밀 크라프트",
        "pos": "RB",
        "birth": "1994.08.02",
        "country": "스웨덴",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "사카이 고토쿠",
        "originName": "사카이 고토쿠",
        "pos": "RB",
        "birth": "1991.03.14",
        "country": "일본",
        "team": "비셀 고베"
    },
    {
        "name": "마테우스",
        "originName": "마테우스 리마 마갈량이스",
        "pos": "GK",
        "birth": "1992.07.19",
        "country": "브라질",
        "team": "SC 브라가"
    },
    {
        "name": "요나스 헥토어",
        "originName": "요나스 헥토어",
        "pos": "LB",
        "birth": "1990.05.27",
        "country": "독일",
        "team": "1. FC 쾰른"
    },
    {
        "name": "올리베르 토레스",
        "originName": "올리베르 토레스 무뇨스",
        "pos": "CM",
        "birth": "1994.11.10",
        "country": "스페인",
        "team": "세비야 FC"
    },
    {
        "name": "야스퍼르 실러선",
        "originName": "야스퍼르 실러선",
        "pos": "GK",
        "birth": "1989.04.22",
        "country": "네덜란드",
        "team": "NEC 네이메헌"
    },
    {
        "name": "야신 부누",
        "originName": "야신 부누",
        "pos": "GK",
        "birth": "1991.04.05",
        "country": "모로코",
        "team": "알힐랄"
    },
    {
        "name": "파코 알카세르",
        "originName": "프란시스코 알카세르 가르시아",
        "pos": "ST",
        "birth": "1993.08.30",
        "country": "스페인",
        "team": "샤르자 SC"
    },
    {
        "name": "루카스 모라",
        "originName": "루카스 호드리게스 M. 시우바",
        "pos": "RW",
        "birth": "1992.08.13",
        "country": "브라질",
        "team": "상 파울루"
    },
    {
        "name": "칼리두 쿨리발리",
        "originName": "칼리두 쿨리발리",
        "pos": "CB",
        "birth": "1991.06.20",
        "country": "세네갈",
        "team": "알힐랄"
    },
    {
        "name": "파비안 셰어",
        "originName": "파비안 셰어",
        "pos": "CB",
        "birth": "1991.12.20",
        "country": "스위스",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "히카르두 페레이라",
        "originName": "히카르두 바르보자 페레이라",
        "pos": "RB",
        "birth": "1993.10.06",
        "country": "포르투갈",
        "team": "레스터 시티"
    },
    {
        "name": "사무 카스티예호",
        "originName": "사무엘 카스티예호 아수아가",
        "pos": "RM",
        "birth": "1995.01.18",
        "country": "스페인",
        "team": "발렌시아 CF"
    },
    {
        "name": "모르간 상송",
        "originName": "모르간 상송",
        "pos": "CM",
        "birth": "1994.08.18",
        "country": "프랑스",
        "team": "애스턴 빌라"
    },
    {
        "name": "블라디미르 다리다",
        "originName": "블라디미르 다리다",
        "pos": "CM",
        "birth": "1990.08.08",
        "country": "체코",
        "team": "아리스 테살로니키"
    },
    {
        "name": "다니엘레 루가니",
        "originName": "다니엘레 루가니",
        "pos": "CB",
        "birth": "1994.07.29",
        "country": "이탈리아",
        "team": "유벤투스"
    },
    {
        "name": "무사 코나테",
        "originName": "무사 코나테",
        "pos": "ST",
        "birth": "1993.04.03",
        "country": "세네갈",
        "team": "디나모 바투미"
    },
    {
        "name": "안드레 고메스",
        "originName": "안드레 필리프 타바레즈 고메스",
        "pos": "CM",
        "birth": "1993.07.30",
        "country": "포르투갈",
        "team": "에버턴"
    },
    {
        "name": "알렉스 텔리스",
        "originName": "알렉스 니콜랑 텔리스",
        "pos": "LB",
        "birth": "1992.12.15",
        "country": "브라질",
        "team": "알나스르"
    },
    {
        "name": "L. 아우구스틴손",
        "originName": "루드비그 아우구스틴손",
        "pos": "LB",
        "birth": "1994.04.21",
        "country": "스웨덴",
        "team": "세비야 FC"
    },
    {
        "name": "오스카르 두아르테",
        "originName": "오스카르 두아르테",
        "pos": "CB",
        "birth": "1989.06.03",
        "country": "코스타리카",
        "team": "알웨흐다"
    },
    {
        "name": "호베르투 피르미누",
        "originName": "호베르투 피르미누 바르보자 지 올리베이라",
        "pos": "ST",
        "birth": "1991.10.02",
        "country": "브라질",
        "team": "알아흘리"
    },
    {
        "name": "카를로스 살세도",
        "originName": "카를로스 살세도",
        "pos": "CB",
        "birth": "1993.09.29",
        "country": "멕시코",
        "team": "토론토 FC"
    },
    {
        "name": "디에고 락살트",
        "originName": "디에고 락살트",
        "pos": "LM",
        "birth": "1993.02.07",
        "country": "우루과이",
        "team": "디나모 모스크바"
    },
    {
        "name": "파쿤도 페레이라",
        "originName": "파쿤도 페레이라",
        "pos": "ST",
        "birth": "1991.03.14",
        "country": "아르헨티나",
        "team": "CA 사르미엔토"
    },
    {
        "name": "율리안 드락슬러",
        "originName": "율리안 드락슬러",
        "pos": "LW",
        "birth": "1993.09.20",
        "country": "독일",
        "team": "알아흘리 SC"
    },
    {
        "name": "제페르손 레르마",
        "originName": "제페르손 레르마",
        "pos": "CDM",
        "birth": "1994.10.25",
        "country": "콜롬비아",
        "team": "크리스털 팰리스"
    },
    {
        "name": "요한 모히카",
        "originName": "요한 모히카",
        "pos": "LWB",
        "birth": "1992.08.21",
        "country": "콜롬비아",
        "team": "비야레알 CF"
    },
    {
        "name": "장 미카엘 세리",
        "originName": "장 미카엘 세리",
        "pos": "CM",
        "birth": "1991.07.19",
        "country": "코트디부아르",
        "team": "헐 시티"
    },
    {
        "name": "시미",
        "originName": "시미언 토추쿠 느왕쿼",
        "pos": "ST",
        "birth": "1992.05.07",
        "country": "나이지리아",
        "team": "살레르니타나"
    },
    {
        "name": "토르간 아자르",
        "originName": "토르간 아자르",
        "pos": "LM",
        "birth": "1993.03.29",
        "country": "벨기에",
        "team": "RSC 안데를레흐트"
    },
    {
        "name": "A. 플로렌치",
        "originName": "알레산드로 플로렌치",
        "pos": "RB",
        "birth": "1991.03.11",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "M. 베시노",
        "originName": "마티아스 베시노",
        "pos": "CDM",
        "birth": "1991.08.24",
        "country": "우루과이",
        "team": "라티움"
    },
    {
        "name": "얀 베드나레크",
        "originName": "얀 베드나레크",
        "pos": "CB",
        "birth": "1996.04.12",
        "country": "폴란드",
        "team": "사우샘프턴"
    },
    {
        "name": "A. 지브코비치",
        "originName": "안드리야 지브코비치",
        "pos": "CAM",
        "birth": "1996.07.11",
        "country": "세르비아",
        "team": "파오크 FC"
    },
    {
        "name": "예리 미나",
        "originName": "예리 미나",
        "pos": "CB",
        "birth": "1994.09.23",
        "country": "콜롬비아",
        "team": "피오렌티나"
    },
    {
        "name": "다빈손 산체스",
        "originName": "다빈손 산체스",
        "pos": "CB",
        "birth": "1996.06.12",
        "country": "콜롬비아",
        "team": "갈라타사라이"
    },
    {
        "name": "미시 바추아이",
        "originName": "미시 바추아이",
        "pos": "ST",
        "birth": "1993.10.02",
        "country": "벨기에",
        "team": "페네르바흐체"
    },
    {
        "name": "다비트 코브나츠키",
        "originName": "다비트 코브나츠키",
        "pos": "ST",
        "birth": "1997.03.14",
        "country": "폴란드",
        "team": "베르더 브레멘"
    },
    {
        "name": "밀로시 벨리코비치",
        "originName": "밀로시 벨리코비치",
        "pos": "CB",
        "birth": "1995.09.26",
        "country": "세르비아",
        "team": "베르더 브레멘"
    },
    {
        "name": "프랑코 세르비",
        "originName": "프랑코 세르비",
        "pos": "LM",
        "birth": "1994.05.26",
        "country": "아르헨티나",
        "team": "셀타 비고"
    },
    {
        "name": "켈레치 이헤나초",
        "originName": "켈레치 이헤나초",
        "pos": "ST",
        "birth": "1996.10.03",
        "country": "나이지리아",
        "team": "레스터 시티"
    },
    {
        "name": "에릭 바이",
        "originName": "에릭 바이",
        "pos": "CB",
        "birth": "1994.04.12",
        "country": "코트디부아르",
        "team": "베식타슈"
    },
    {
        "name": "젤송 마르팅스",
        "originName": "젤송 다니 바탈랴 마르팅스",
        "pos": "RM",
        "birth": "1995.05.11",
        "country": "포르투갈",
        "team": "AS 모나코"
    },
    {
        "name": "제시 린가드",
        "originName": "제시 린가드",
        "pos": "CAM",
        "birth": "1992.12.15",
        "country": "잉글랜드",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "M. 드미트로비치",
        "originName": "마르코 드미트로비치",
        "pos": "GK",
        "birth": "1992.01.24",
        "country": "세르비아",
        "team": "세비야 FC"
    },
    {
        "name": "무사 마레가",
        "originName": "무사 마레가",
        "pos": "ST",
        "birth": "1991.04.14",
        "country": "말리",
        "team": "샤르자 SC"
    },
    {
        "name": "무토 요시노리",
        "originName": "무토 요시노리",
        "pos": "ST",
        "birth": "1992.07.15",
        "country": "일본",
        "team": "비셀 고베"
    },
    {
        "name": "윌리앙 카르발류",
        "originName": "윌리앙 실바 드 카르발류",
        "pos": "CDM",
        "birth": "1992.04.07",
        "country": "포르투갈",
        "team": "레알 베티스"
    },
    {
        "name": "카를로스 바카",
        "originName": "카를로스 바카",
        "pos": "ST",
        "birth": "1986.09.08",
        "country": "콜롬비아",
        "team": "유니오르 FC"
    },
    {
        "name": "마르코 피아차",
        "originName": "마르코 피아차",
        "pos": "LW",
        "birth": "1995.05.06",
        "country": "크로아티아",
        "team": "NK 리예카"
    },
    {
        "name": "펠리피",
        "originName": "펠리피 아우구스투 지 아우메이다 몬테이루",
        "pos": "CB",
        "birth": "1989.05.16",
        "country": "브라질",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "사울",
        "originName": "사울 니게스 에스클라페스",
        "pos": "CM",
        "birth": "1994.11.21",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "사디오 마네",
        "originName": "사디오 마네",
        "pos": "LW",
        "birth": "1992.04.10",
        "country": "세네갈",
        "team": "알나스르"
    },
    {
        "name": "시바사키 가쿠",
        "originName": "시바사키 가쿠",
        "pos": "CDM",
        "birth": "1992.05.28",
        "country": "일본",
        "team": "CD 레가네스"
    },
    {
        "name": "프레드",
        "originName": "프레데리쿠 지파울라 산투스",
        "pos": "CM",
        "birth": "1993.03.05",
        "country": "브라질",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "치도지 아와지엠",
        "originName": "치도지 아와지엠",
        "pos": "CB",
        "birth": "1997.01.01",
        "country": "나이지리아",
        "team": "보아비스타 FC"
    },
    {
        "name": "파비뉴",
        "originName": "파비우 엔히키 타바리스",
        "pos": "CDM",
        "birth": "1993.10.23",
        "country": "브라질",
        "team": "알이티하드"
    },
    {
        "name": "기슬랭 코난",
        "originName": "기슬랭 코난",
        "pos": "LB",
        "birth": "1995.12.27",
        "country": "코트디부아르",
        "team": "알나스르"
    },
    {
        "name": "우사마 하다디",
        "originName": "우사마 하다디",
        "pos": "LB",
        "birth": "1992.01.28",
        "country": "튀니지",
        "team": "SpVgg 그로이터 퓌르트"
    },
    {
        "name": "니콜라 밀렌코비치",
        "originName": "니콜라 밀렌코비치",
        "pos": "CB",
        "birth": "1997.10.12",
        "country": "세르비아",
        "team": "피오렌티나"
    },
    {
        "name": "M. 고메스",
        "originName": "막시밀리아노 고메스",
        "pos": "ST",
        "birth": "1996.08.14",
        "country": "우루과이",
        "team": "트라브존스포르"
    },
    {
        "name": "저메인 데포",
        "originName": "저메인 데포",
        "pos": "ST",
        "birth": "1982.10.07",
        "country": "잉글랜드",
        "team": "선덜랜드"
    },
    {
        "name": "브루누 알베스",
        "originName": "브루누 에두아르두 헤구프 알베스",
        "pos": "CB",
        "birth": "1981.11.27",
        "country": "포르투갈",
        "team": "아뽈론 스미르니스"
    },
    {
        "name": "리산드로 로페스",
        "originName": "리산드로 로페스",
        "pos": "ST",
        "birth": "1983.03.02",
        "country": "아르헨티나",
        "team": "CA 사르미엔토"
    },
    {
        "name": "델리 알리",
        "originName": "델리 알리",
        "pos": "CAM",
        "birth": "1996.04.11",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "앙토니 마시알",
        "originName": "앙토니 마시알",
        "pos": "LM",
        "birth": "1995.12.05",
        "country": "프랑스",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "카를로스 테베스",
        "originName": "카를로스 테베스",
        "pos": "CF",
        "birth": "1984.02.05",
        "country": "아르헨티나",
        "team": "보카 주니어스"
    },
    {
        "name": "마우로 사라테",
        "originName": "마우로 사라테",
        "pos": "ST",
        "birth": "1987.03.18",
        "country": "아르헨티나",
        "team": "다누비오 FC"
    },
    {
        "name": "하비 가르시아",
        "originName": "하비에르 가르시아 페르난데스",
        "pos": "CDM",
        "birth": "1987.02.08",
        "country": "스페인",
        "team": "보아비스타 FC"
    },
    {
        "name": "F. 베르나르데스키",
        "originName": "페데리코 베르나르데스키",
        "pos": "RM",
        "birth": "1994.02.16",
        "country": "이탈리아",
        "team": "토론토 FC"
    },
    {
        "name": "페르난도 가고",
        "originName": "페르난도 가고",
        "pos": "CDM",
        "birth": "1986.04.10",
        "country": "아르헨티나",
        "team": "벨레스 사르스피엘드"
    },
    {
        "name": "나초 몬레알",
        "originName": "이그나시오 몬레알 에라소",
        "pos": "LB",
        "birth": "1986.02.26",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "파피스 뎀바 시세",
        "originName": "파피스 뎀바 시세",
        "pos": "ST",
        "birth": "1985.06.03",
        "country": "세네갈",
        "team": "아미앵 SC"
    },
    {
        "name": "라이언 버트란드",
        "originName": "라이언 버트란드",
        "pos": "LB",
        "birth": "1989.08.05",
        "country": "잉글랜드",
        "team": "레스터 시티"
    },
    {
        "name": "주앙 마리우",
        "originName": "주앙 마리우 N. 코스타 에두아르두",
        "pos": "CAM",
        "birth": "1993.01.19",
        "country": "포르투갈",
        "team": "SL 벤피카"
    },
    {
        "name": "알레샨드리 파투",
        "originName": "알레샨드리 호드리게스 다 시우바",
        "pos": "ST",
        "birth": "1989.09.02",
        "country": "브라질",
        "team": "올랜도 시티 SC"
    },
    {
        "name": "앙토니 모데스테",
        "originName": "앙토니 모데스테",
        "pos": "ST",
        "birth": "1988.04.14",
        "country": "프랑스",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "앤디 캐롤",
        "originName": "앤디 캐롤",
        "pos": "ST",
        "birth": "1989.01.06",
        "country": "잉글랜드",
        "team": "아미앵 SC"
    },
    {
        "name": "마마두 사코",
        "originName": "마마두 사코",
        "pos": "CB",
        "birth": "1990.02.13",
        "country": "프랑스",
        "team": "몽펠리에 HSC"
    },
    {
        "name": "케이타 발데",
        "originName": "케이타 발데",
        "pos": "LW",
        "birth": "1995.03.08",
        "country": "세네갈",
        "team": "스파르타크 모스크바"
    },
    {
        "name": "크리스티앙 벤테케",
        "originName": "크리스티앙 벤테케",
        "pos": "ST",
        "birth": "1990.12.03",
        "country": "벨기에",
        "team": "D.C. 유나이티드"
    },
    {
        "name": "오디온 이갈로",
        "originName": "오디온 이갈로",
        "pos": "ST",
        "birth": "1989.06.16",
        "country": "나이지리아",
        "team": "알웨흐다"
    },
    {
        "name": "얀 음빌라",
        "originName": "얀 음빌라",
        "pos": "CDM",
        "birth": "1990.06.29",
        "country": "프랑스",
        "team": "올림피아코스 CFP"
    },
    {
        "name": "야니크 볼라시",
        "originName": "야니크 볼라시",
        "pos": "LM",
        "birth": "1989.05.24",
        "country": "콩고 민주 공화국",
        "team": "차이쿠르 리제스포르"
    },
    {
        "name": "아란",
        "originName": "아란",
        "pos": "ST",
        "birth": "1989.07.10",
        "country": "브라질",
        "team": "광저우 FC"
    },
    {
        "name": "알렉스 테이세이라",
        "originName": "알렉스 테이셰이라 두스 산투스",
        "pos": "CAM",
        "birth": "1990.01.06",
        "country": "브라질",
        "team": "베식타슈"
    },
    {
        "name": "존조 셸비",
        "originName": "존조 셸비",
        "pos": "CM",
        "birth": "1992.02.27",
        "country": "잉글랜드",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "윌프리드 보니",
        "originName": "윌프리드 보니",
        "pos": "ST",
        "birth": "1988.12.10",
        "country": "코트디부아르",
        "team": "어웨이즈 레디"
    },
    {
        "name": "하파",
        "originName": "하파엘 A. 페헤이라 실바",
        "pos": "RW",
        "birth": "1993.05.17",
        "country": "포르투갈",
        "team": "SL 벤피카"
    },
    {
        "name": "굴라르",
        "originName": "굴라르",
        "pos": "CAM",
        "birth": "1991.06.05",
        "country": "브라질",
        "team": "바이아"
    },
    {
        "name": "아이커썬",
        "originName": "아이커썬",
        "pos": "ST",
        "birth": "1989.07.13",
        "country": "브라질",
        "team": "청두 룽청"
    },
    {
        "name": "안드로스 타운젠드",
        "originName": "안드로스 타운젠드",
        "pos": "RM",
        "birth": "1991.07.16",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "시모네 베르디",
        "originName": "시모네 베르디",
        "pos": "RW",
        "birth": "1992.07.12",
        "country": "이탈리아",
        "team": "코모 1907"
    },
    {
        "name": "마놀로 가비아디니",
        "originName": "마놀로 가비아디니",
        "pos": "ST",
        "birth": "1991.11.26",
        "country": "이탈리아",
        "team": "삼프도리아"
    },
    {
        "name": "엔소 페레스",
        "originName": "엔소 페레스",
        "pos": "CM",
        "birth": "1986.02.22",
        "country": "아르헨티나",
        "team": "리버 플레이트"
    },
    {
        "name": "가브리엘 파울리스타",
        "originName": "가브리엘 아르만두 지 아브레우",
        "pos": "CB",
        "birth": "1990.11.26",
        "country": "브라질",
        "team": "발렌시아 CF"
    },
    {
        "name": "위르겐 로카디아",
        "originName": "위르겐 로카디아",
        "pos": "ST",
        "birth": "1993.11.07",
        "country": "네덜란드",
        "team": "창저우 슝스"
    },
    {
        "name": "안테 레비치",
        "originName": "안테 레비치",
        "pos": "ST",
        "birth": "1993.09.21",
        "country": "크로아티아",
        "team": "베식타슈"
    },
    {
        "name": "브릴 엠볼로",
        "originName": "브릴 엠볼로",
        "pos": "ST",
        "birth": "1997.02.14",
        "country": "스위스",
        "team": "AS 모나코"
    },
    {
        "name": "마이클 킨",
        "originName": "마이클 킨",
        "pos": "CB",
        "birth": "1993.01.11",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "모하메드 엘네니",
        "originName": "모하메드 엘네니",
        "pos": "CM",
        "birth": "1992.07.11",
        "country": "이집트",
        "team": "아스널"
    },
    {
        "name": "에메르손",
        "originName": "에메르손 팔미에리 두스 산투스",
        "pos": "LWB",
        "birth": "1994.08.03",
        "country": "이탈리아",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "다비데 차파코스타",
        "originName": "다비데 차파코스타",
        "pos": "RB",
        "birth": "1992.06.11",
        "country": "이탈리아",
        "team": "베르가모 칼초"
    },
    {
        "name": "루카스 토레이라",
        "originName": "루카스 토레이라",
        "pos": "CM",
        "birth": "1996.02.11",
        "country": "우루과이",
        "team": "갈라타사라이"
    },
    {
        "name": "S. 밀린코비치-사비치",
        "originName": "세르게이 밀린코비치-사비치",
        "pos": "CM",
        "birth": "1995.02.27",
        "country": "세르비아",
        "team": "알힐랄"
    },
    {
        "name": "이슬람 슬리마니",
        "originName": "이슬람 슬리마니",
        "pos": "ST",
        "birth": "1988.06.18",
        "country": "알제리",
        "team": "쿠리치바"
    },
    {
        "name": "에우데르 코스타",
        "originName": "에우데르 완데르 소자 아제베두 코스타",
        "pos": "LM",
        "birth": "1994.01.12",
        "country": "포르투갈",
        "team": "리즈 유나이티드"
    },
    {
        "name": "엘리스 스키리",
        "originName": "엘리스 스키리",
        "pos": "CDM",
        "birth": "1995.05.10",
        "country": "튀니지",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "장청린",
        "originName": "장청린",
        "pos": "RB",
        "birth": "1987.01.20",
        "country": "중국",
        "team": "광저우 FC"
    },
    {
        "name": "자오위하오",
        "originName": "자오위하오",
        "pos": "CDM",
        "birth": "1993.04.07",
        "country": "중국",
        "team": "허난 FC"
    },
    {
        "name": "마우콩",
        "originName": "마우콩 필리피 시우바 지 올리베이라",
        "pos": "RW",
        "birth": "1997.02.26",
        "country": "브라질",
        "team": "알힐랄"
    },
    {
        "name": "이사 디오프",
        "originName": "이사 디오프",
        "pos": "CB",
        "birth": "1997.01.09",
        "country": "프랑스",
        "team": "풀럼"
    },
    {
        "name": "윌프레드 은디디",
        "originName": "윌프레드 은디디",
        "pos": "CDM",
        "birth": "1996.12.16",
        "country": "나이지리아",
        "team": "레스터 시티"
    },
    {
        "name": "오드리오솔라",
        "originName": "알바로 오드리오솔라 아르살루스",
        "pos": "RB",
        "birth": "1995.12.14",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "베베",
        "originName": "티아구 마누엘 디아스 코헤이아",
        "pos": "LM",
        "birth": "1990.07.12",
        "country": "포르투갈",
        "team": "라요 바예카노"
    },
    {
        "name": "넬송 세메두",
        "originName": "넬송 카브랄 세메두",
        "pos": "RB",
        "birth": "1993.11.16",
        "country": "포르투갈",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "헤나투 아우구스투",
        "originName": "헤나투 아우구스투",
        "pos": "CAM",
        "birth": "1988.02.08",
        "country": "브라질",
        "team": "코린치안스"
    },
    {
        "name": "카를로스 벨라",
        "originName": "카를로스 벨라",
        "pos": "RW",
        "birth": "1989.03.01",
        "country": "멕시코",
        "team": "LA FC"
    },
    {
        "name": "마이카 리처즈",
        "originName": "마이카 리처즈",
        "pos": "RB",
        "birth": "1988.06.24",
        "country": "잉글랜드",
        "team": "애스턴 빌라"
    },
    {
        "name": "조바니 도스산토스",
        "originName": "조바니 도스산토스",
        "pos": "ST",
        "birth": "1989.05.11",
        "country": "멕시코",
        "team": "아메리카"
    },
    {
        "name": "디에고 카펠",
        "originName": "디에고 카펠 트리니다드",
        "pos": "LW",
        "birth": "1988.02.16",
        "country": "스페인",
        "team": "엑스트레마두라 UD"
    },
    {
        "name": "마커스 래시포드",
        "originName": "마커스 래시포드",
        "pos": "LW",
        "birth": "1997.10.31",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "안드레 아이유",
        "originName": "안드레 아이유",
        "pos": "LM",
        "birth": "1989.12.17",
        "country": "가나",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "조지 알티도어",
        "originName": "조지 알티도어",
        "pos": "ST",
        "birth": "1989.11.06",
        "country": "미국",
        "team": "뉴잉글랜드 레볼루션"
    },
    {
        "name": "보얀",
        "originName": "보얀 키르키치 페레스",
        "pos": "ST",
        "birth": "1990.08.28",
        "country": "스페인",
        "team": "비셀 고베"
    },
    {
        "name": "스테파노 오카카",
        "originName": "스테파노 오카카",
        "pos": "ST",
        "birth": "1989.08.09",
        "country": "이탈리아",
        "team": "바샥셰히르"
    },
    {
        "name": "이스마일라 사르",
        "originName": "이스마일라 사르",
        "pos": "LM",
        "birth": "1998.02.25",
        "country": "세네갈",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "시드네이",
        "originName": "시드네이 헤셸 다 시우바 주니오르",
        "pos": "CB",
        "birth": "1989.08.23",
        "country": "브라질",
        "team": "세아라"
    },
    {
        "name": "에렌 데르디요크",
        "originName": "에렌 데르디요크",
        "pos": "ST",
        "birth": "1988.06.12",
        "country": "스위스",
        "team": "MKE 앙카라귀쥐"
    },
    {
        "name": "에밀리아노 인수아",
        "originName": "에밀리아노 인수아",
        "pos": "LB",
        "birth": "1989.01.07",
        "country": "아르헨티나",
        "team": "라싱 클루브 아베야네다"
    },
    {
        "name": "안드레아 폴리",
        "originName": "안드레아 폴리",
        "pos": "CM",
        "birth": "1989.09.29",
        "country": "이탈리아",
        "team": "모데나"
    },
    {
        "name": "파블로 피아티",
        "originName": "파블로 피아티",
        "pos": "LM",
        "birth": "1989.03.31",
        "country": "아르헨티나",
        "team": "에스투디안테스 데라플라타"
    },
    {
        "name": "잭 로드웰",
        "originName": "잭 로드웰",
        "pos": "CDM",
        "birth": "1991.03.11",
        "country": "잉글랜드",
        "team": "시드니 FC"
    },
    {
        "name": "대니 웰벡",
        "originName": "대니 웰벡",
        "pos": "ST",
        "birth": "1990.11.26",
        "country": "잉글랜드",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "가엘 카쿠타",
        "originName": "가엘 카쿠타",
        "pos": "LM",
        "birth": "1991.06.21",
        "country": "콩고 민주 공화국",
        "team": "아미앵 SC"
    },
    {
        "name": "파비오 보리니",
        "originName": "파비오 보리니",
        "pos": "LM",
        "birth": "1991.03.23",
        "country": "이탈리아",
        "team": "삼프도리아"
    },
    {
        "name": "프랑코 디산토",
        "originName": "프랑코 디산토",
        "pos": "ST",
        "birth": "1989.04.07",
        "country": "아르헨티나",
        "team": "우니베르시다드 카톨리카"
    },
    {
        "name": "에세키엘 무뇨스",
        "originName": "에세키엘 무뇨스",
        "pos": "CB",
        "birth": "1990.10.08",
        "country": "아르헨티나",
        "team": "에스투디안테스 데라플라타"
    },
    {
        "name": "알란 자고예프",
        "originName": "알란 자고예프",
        "pos": "RM",
        "birth": "1990.06.17",
        "country": "러시아",
        "team": "PFC CSKA 모스크바"
    },
    {
        "name": "알베르토 팔로스키",
        "originName": "알베르토 팔로스키",
        "pos": "ST",
        "birth": "1990.01.04",
        "country": "이탈리아",
        "team": "시에나"
    },
    {
        "name": "클레망 그르니에",
        "originName": "클레망 그르니에",
        "pos": "CAM",
        "birth": "1991.01.07",
        "country": "프랑스",
        "team": "라싱 산탄데르"
    },
    {
        "name": "애슐리 영",
        "originName": "애슐리 영",
        "pos": "LW",
        "birth": "1985.07.09",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "시오 월콧",
        "originName": "시오 월콧",
        "pos": "RM",
        "birth": "1989.03.16",
        "country": "잉글랜드",
        "team": "사우샘프턴"
    },
    {
        "name": "파비오 콸리아렐라",
        "originName": "파비오 콸리아렐라",
        "pos": "ST",
        "birth": "1983.01.31",
        "country": "이탈리아",
        "team": "삼프도리아"
    },
    {
        "name": "넬송 올리베이라",
        "originName": "넬송 미겔 카스트루 올리베이라",
        "pos": "ST",
        "birth": "1991.08.08",
        "country": "포르투갈",
        "team": "코니아스포르"
    },
    {
        "name": "다비데 산톤",
        "originName": "다비데 산톤",
        "pos": "LB",
        "birth": "1991.01.02",
        "country": "이탈리아",
        "team": "로마 FC"
    },
    {
        "name": "잭 윌셔",
        "originName": "잭 윌셔",
        "pos": "CM",
        "birth": "1992.01.01",
        "country": "잉글랜드",
        "team": "오르후스 GF"
    },
    {
        "name": "하파엘",
        "originName": "하파엘 페레이라 다 시우바",
        "pos": "RB",
        "birth": "1990.07.09",
        "country": "브라질",
        "team": "보타포구"
    },
    {
        "name": "바츨라프 카들레츠",
        "originName": "바츨라프 카들레츠",
        "pos": "ST",
        "birth": "1992.05.20",
        "country": "체코",
        "team": "스파르타 프라하"
    },
    {
        "name": "게오르기 셴니코프",
        "originName": "게오르기 셴니코프",
        "pos": "LB",
        "birth": "1991.04.27",
        "country": "러시아",
        "team": "PFC CSKA 모스크바"
    },
    {
        "name": "마티아 데스트로",
        "originName": "마티아 데스트로",
        "pos": "ST",
        "birth": "1991.03.20",
        "country": "이탈리아",
        "team": "엠폴리"
    },
    {
        "name": "디에고 콘텐토",
        "originName": "디에고 콘텐토",
        "pos": "LB",
        "birth": "1990.05.01",
        "country": "독일",
        "team": "SV 잔트하우젠"
    },
    {
        "name": "제프리 브뤼마",
        "originName": "제프리 브뤼마",
        "pos": "CB",
        "birth": "1991.11.13",
        "country": "네덜란드",
        "team": "RKC 발비크"
    },
    {
        "name": "데니스 프라트",
        "originName": "데니스 프라트",
        "pos": "CM",
        "birth": "1994.05.14",
        "country": "벨기에",
        "team": "레스터 시티"
    },
    {
        "name": "B. 마르팅스 인디",
        "originName": "브루누 마르팅스 인디",
        "pos": "CB",
        "birth": "1992.02.08",
        "country": "네덜란드",
        "team": "AZ"
    },
    {
        "name": "룩 카스타뇨스",
        "originName": "룩 카스타뇨스",
        "pos": "ST",
        "birth": "1992.09.27",
        "country": "네덜란드",
        "team": "1. FC 마그데부르크"
    },
    {
        "name": "오리올 로메우",
        "originName": "오리올 로메우 비달",
        "pos": "CDM",
        "birth": "1991.09.24",
        "country": "스페인",
        "team": "FC 바르셀로나"
    },
    {
        "name": "페드로 오비앙",
        "originName": "페드로 음바 오비앙 아보모",
        "pos": "CM",
        "birth": "1992.03.27",
        "country": "스페인",
        "team": "사수올로"
    },
    {
        "name": "가스톤 라미레스",
        "originName": "가스톤 라미레스",
        "pos": "CAM",
        "birth": "1990.12.02",
        "country": "우루과이",
        "team": "산로렌소 데 알마그로"
    },
    {
        "name": "올라 존",
        "originName": "올라 존",
        "pos": "LM",
        "birth": "1992.05.19",
        "country": "네덜란드",
        "team": "알 아라비"
    },
    {
        "name": "엘리아킴 망갈라",
        "originName": "엘리아킴 망갈라",
        "pos": "CB",
        "birth": "1991.02.13",
        "country": "프랑스",
        "team": "이스토릴 프라이아"
    },
    {
        "name": "헤세",
        "originName": "헤세 로드리게스 루이스",
        "pos": "LW",
        "birth": "1993.02.26",
        "country": "스페인",
        "team": "삼프도리아"
    },
    {
        "name": "베른트 레노",
        "originName": "베른트 레노",
        "pos": "GK",
        "birth": "1992.03.04",
        "country": "독일",
        "team": "풀럼"
    },
    {
        "name": "토니 빌레나",
        "originName": "토니 빌레나",
        "pos": "CM",
        "birth": "1995.01.03",
        "country": "네덜란드",
        "team": "파나티나이코스"
    },
    {
        "name": "커트 주마",
        "originName": "커트 주마",
        "pos": "CB",
        "birth": "1994.10.27",
        "country": "프랑스",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "빅토르 피셔",
        "originName": "빅토르 피셔",
        "pos": "LW",
        "birth": "1994.06.09",
        "country": "덴마크",
        "team": "로열 앤트워프"
    },
    {
        "name": "음바예 니앙",
        "originName": "음바예 니앙",
        "pos": "LW",
        "birth": "1994.12.19",
        "country": "세네갈",
        "team": "아다나 데미르스포르"
    },
    {
        "name": "티아구 일로리",
        "originName": "티아구 알메이다 일로리",
        "pos": "CB",
        "birth": "1993.02.26",
        "country": "포르투갈",
        "team": "스포르팅 CP"
    },
    {
        "name": "조던 아이브",
        "originName": "조던 아이브",
        "pos": "RM",
        "birth": "1995.12.08",
        "country": "잉글랜드",
        "team": "더비 카운티"
    },
    {
        "name": "마티야 나스타시치",
        "originName": "마티야 나스타시치",
        "pos": "CB",
        "birth": "1993.03.28",
        "country": "세르비아",
        "team": "RCD 마요르카"
    },
    {
        "name": "크리스천 아추",
        "originName": "크리스천 아추",
        "pos": "LW",
        "birth": "1992.01.10",
        "country": "가나",
        "team": "하타이스포르"
    },
    {
        "name": "칼럼 체임버스",
        "originName": "칼럼 체임버스",
        "pos": "RB",
        "birth": "1995.01.20",
        "country": "잉글랜드",
        "team": "애스턴 빌라"
    },
    {
        "name": "루카스 오캄포스",
        "originName": "루카스 오캄포스",
        "pos": "LM",
        "birth": "1994.07.11",
        "country": "아르헨티나",
        "team": "세비야 FC"
    },
    {
        "name": "로스 바클리",
        "originName": "로스 바클리",
        "pos": "CAM",
        "birth": "1993.12.05",
        "country": "잉글랜드",
        "team": "루턴 타운"
    },
    {
        "name": "윌프리드 자하",
        "originName": "윌프리드 자하",
        "pos": "RW",
        "birth": "1992.11.10",
        "country": "코트디부아르",
        "team": "갈라타사라이"
    },
    {
        "name": "리야드 마레즈",
        "originName": "리야드 마레즈",
        "pos": "RW",
        "birth": "1991.02.21",
        "country": "알제리",
        "team": "알아흘리"
    },
    {
        "name": "제트로 빌럼스",
        "originName": "제트로 빌럼스",
        "pos": "LB",
        "birth": "1994.03.30",
        "country": "네덜란드",
        "team": "헤라클레스 알멜로"
    },
    {
        "name": "S. 크리우초우",
        "originName": "세르히 크리우초우",
        "pos": "CB",
        "birth": "1991.03.15",
        "country": "우크라이나",
        "team": "인터 마이애미"
    },
    {
        "name": "케네스 오메루오",
        "originName": "케네스 오메루오",
        "pos": "CB",
        "birth": "1993.10.17",
        "country": "나이지리아",
        "team": "카슴파샤 SK"
    },
    {
        "name": "자카리아 바칼리",
        "originName": "자카리아 바칼리",
        "pos": "RW",
        "birth": "1996.01.26",
        "country": "벨기에",
        "team": "RKC 발비크"
    },
    {
        "name": "리카르도 키슈나",
        "originName": "리카르도 키슈나",
        "pos": "LW",
        "birth": "1995.01.04",
        "country": "네덜란드",
        "team": "ADO 덴하흐"
    },
    {
        "name": "조던 픽포드",
        "originName": "조던 픽포드",
        "pos": "GK",
        "birth": "1994.03.07",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "알레시오 로마뇰리",
        "originName": "알레시오 로마뇰리",
        "pos": "CB",
        "birth": "1995.01.12",
        "country": "이탈리아",
        "team": "라티움"
    },
    {
        "name": "요시프 라도셰비치",
        "originName": "요시프 라도셰비치",
        "pos": "CDM",
        "birth": "1994.04.03",
        "country": "크로아티아",
        "team": "브뢴뷔 IF"
    },
    {
        "name": "라자르 마르코비치",
        "originName": "라자르 마르코비치",
        "pos": "RM",
        "birth": "1994.03.02",
        "country": "세르비아",
        "team": "가지안테프 FK"
    },
    {
        "name": "막스 마이어",
        "originName": "막스 마이어",
        "pos": "CAM",
        "birth": "1995.09.18",
        "country": "독일",
        "team": "FC 루체른"
    },
    {
        "name": "리헤들리 바주르",
        "originName": "리헤들리 바주르",
        "pos": "CM",
        "birth": "1996.10.12",
        "country": "네덜란드",
        "team": "AZ"
    },
    {
        "name": "앨릭스 이워비",
        "originName": "앨릭스 이워비",
        "pos": "LM",
        "birth": "1996.05.03",
        "country": "나이지리아",
        "team": "풀럼"
    },
    {
        "name": "아다마 트라오레",
        "originName": "아다마 트라오레 디아라",
        "pos": "RW",
        "birth": "1996.01.25",
        "country": "스페인",
        "team": "풀럼"
    },
    {
        "name": "유리 틸레만스",
        "originName": "유리 틸레만스",
        "pos": "CM",
        "birth": "1997.05.07",
        "country": "벨기에",
        "team": "애스턴 빌라"
    },
    {
        "name": "A. 미트로비치",
        "originName": "알렉산다르 미트로비치",
        "pos": "ST",
        "birth": "1994.09.16",
        "country": "세르비아",
        "team": "알힐랄"
    },
    {
        "name": "알렌 할릴로비치",
        "originName": "알렌 할릴로비치",
        "pos": "CAM",
        "birth": "1996.06.18",
        "country": "크로아티아",
        "team": "포르투나 시타르트"
    },
    {
        "name": "곤살루 게드스",
        "originName": "곤살루 마누엘 간시뉴 게드스",
        "pos": "RM",
        "birth": "1996.11.29",
        "country": "포르투갈",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "안바르 엘가지",
        "originName": "안바르 엘가지",
        "pos": "RW",
        "birth": "1995.05.03",
        "country": "네덜란드",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "모지스 사이먼",
        "originName": "모지스 사이먼",
        "pos": "CF",
        "birth": "1995.07.12",
        "country": "나이지리아",
        "team": "FC 낭트"
    },
    {
        "name": "마흐무드 다후드",
        "originName": "마흐무드 다후드",
        "pos": "CM",
        "birth": "1996.01.01",
        "country": "독일",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "산드로",
        "originName": "산드로 라미레스 카스티요",
        "pos": "ST",
        "birth": "1995.07.09",
        "country": "스페인",
        "team": "UD 라스팔마스"
    },
    {
        "name": "무니르",
        "originName": "무니르 엘하다디",
        "pos": "ST",
        "birth": "1995.09.01",
        "country": "스페인",
        "team": "UD 라스팔마스"
    },
    {
        "name": "제이슨 데나이어",
        "originName": "제이슨 데나이어",
        "pos": "CB",
        "birth": "1995.06.28",
        "country": "벨기에",
        "team": "알파테"
    },
    {
        "name": "데마라이 그레이",
        "originName": "데마라이 그레이",
        "pos": "LM",
        "birth": "1996.06.28",
        "country": "잉글랜드",
        "team": "에티파크 FC"
    },
    {
        "name": "카를로스 페르난데스",
        "originName": "카를로스 페르난데스 루나",
        "pos": "ST",
        "birth": "1996.05.22",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "자이로 리데발트",
        "originName": "자이로 리데발트",
        "pos": "CB",
        "birth": "1996.09.09",
        "country": "네덜란드",
        "team": "크리스털 팰리스"
    },
    {
        "name": "에세키엘 폰세",
        "originName": "에세키엘 폰세",
        "pos": "ST",
        "birth": "1997.03.29",
        "country": "아르헨티나",
        "team": "AEK 아테네"
    },
    {
        "name": "파블로 마페오",
        "originName": "파블로 마페오 베세라",
        "pos": "RWB",
        "birth": "1997.07.12",
        "country": "스페인",
        "team": "RCD 마요르카"
    },
    {
        "name": "호르헤 메레",
        "originName": "호르헤 메레 페레스",
        "pos": "CB",
        "birth": "1997.04.17",
        "country": "스페인",
        "team": "아메리카"
    },
    {
        "name": "에네스 위날",
        "originName": "에네스 위날",
        "pos": "ST",
        "birth": "1997.05.10",
        "country": "튀르키예",
        "team": "헤타페 CF"
    },
    {
        "name": "토신 아다라바요",
        "originName": "토신 아다라바요",
        "pos": "CB",
        "birth": "1997.09.24",
        "country": "잉글랜드",
        "team": "풀럼"
    },
    {
        "name": "마누 가르시아",
        "originName": "마누엘 가르시아 알론소",
        "pos": "CAM",
        "birth": "1998.01.02",
        "country": "스페인",
        "team": "아리스 테살로니키"
    },
    {
        "name": "막심 로페즈",
        "originName": "막심 로페즈",
        "pos": "CM",
        "birth": "1997.12.04",
        "country": "프랑스",
        "team": "사수올로"
    },
    {
        "name": "아드리안 마린",
        "originName": "아드리안 마린 고메스",
        "pos": "LB",
        "birth": "1997.01.09",
        "country": "스페인",
        "team": "SC 브라가"
    },
    {
        "name": "장-케빈 오귀스탕",
        "originName": "장-케빈 오귀스탕",
        "pos": "ST",
        "birth": "1997.06.16",
        "country": "프랑스",
        "team": "FC 바젤 1893"
    },
    {
        "name": "도미닉 솔랑키",
        "originName": "도미닉 솔랑키",
        "pos": "ST",
        "birth": "1997.09.14",
        "country": "잉글랜드",
        "team": "AFC 본머스"
    },
    {
        "name": "알마미 투레",
        "originName": "알마미 투레",
        "pos": "RB",
        "birth": "1996.04.28",
        "country": "말리",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "C. 카터-비커스",
        "originName": "캐머런 카터-비커스",
        "pos": "CB",
        "birth": "1997.12.31",
        "country": "미국",
        "team": "셀틱"
    },
    {
        "name": "펠릭스 파슬라크",
        "originName": "펠릭스 파슬라크",
        "pos": "RB",
        "birth": "1998.05.29",
        "country": "독일",
        "team": "VfL 보훔 1848"
    },
    {
        "name": "산데르 베르게",
        "originName": "산데르 베르게",
        "pos": "CDM",
        "birth": "1998.02.18",
        "country": "노르웨이",
        "team": "번리"
    },
    {
        "name": "베냐민 헨릭스",
        "originName": "베냐민 헨릭스",
        "pos": "RB",
        "birth": "1997.02.23",
        "country": "독일",
        "team": "RB 라이프치히"
    },
    {
        "name": "카스퍼 돌베르",
        "originName": "카스퍼 돌베르",
        "pos": "ST",
        "birth": "1997.10.06",
        "country": "덴마크",
        "team": "RSC 안데를레흐트"
    },
    {
        "name": "가스톤 페레이로",
        "originName": "가스톤 페레이로",
        "pos": "CAM",
        "birth": "1995.06.11",
        "country": "우루과이",
        "team": "칼리아리"
    },
    {
        "name": "빅토르 코발렌코",
        "originName": "빅토르 코발렌코",
        "pos": "CAM",
        "birth": "1996.02.14",
        "country": "우크라이나",
        "team": "베르가모 칼초"
    },
    {
        "name": "크리스티안 리베라",
        "originName": "크리스티안 리베라 에르난데스",
        "pos": "CDM",
        "birth": "1997.07.09",
        "country": "스페인",
        "team": "스포르팅 히혼"
    },
    {
        "name": "제르송",
        "originName": "제르송 산투스 다 시우바",
        "pos": "CM",
        "birth": "1997.05.20",
        "country": "브라질",
        "team": "플라멩구"
    },
    {
        "name": "톰 데이비스",
        "originName": "톰 데이비스",
        "pos": "CM",
        "birth": "1998.06.30",
        "country": "잉글랜드",
        "team": "셰필드 유나이티드"
    },
    {
        "name": "아마두 디아와라",
        "originName": "아마두 디아와라",
        "pos": "CDM",
        "birth": "1997.07.17",
        "country": "기니",
        "team": "RSC 안데를레흐트"
    },
    {
        "name": "밀레 스빌라르",
        "originName": "밀레 스빌라르",
        "pos": "GK",
        "birth": "1999.08.27",
        "country": "벨기에",
        "team": "로마 FC"
    },
    {
        "name": "뤼크 더용",
        "originName": "뤼크 더용",
        "pos": "ST",
        "birth": "1990.08.27",
        "country": "네덜란드",
        "team": "PSV"
    },
    {
        "name": "카날레스",
        "originName": "세르히오 카날레스 마드라소",
        "pos": "CAM",
        "birth": "1991.02.16",
        "country": "스페인",
        "team": "CF 몬테레이"
    },
    {
        "name": "뤼카 디뉴",
        "originName": "뤼카 디뉴",
        "pos": "LB",
        "birth": "1993.07.20",
        "country": "프랑스",
        "team": "애스턴 빌라"
    },
    {
        "name": "마우로 이카르디",
        "originName": "마우로 이카르디",
        "pos": "ST",
        "birth": "1993.02.19",
        "country": "아르헨티나",
        "team": "파리 생제르맹"
    },
    {
        "name": "야니크 카라스코",
        "originName": "야니크 카라스코",
        "pos": "LM",
        "birth": "1993.09.04",
        "country": "벨기에",
        "team": "알샤밥"
    },
    {
        "name": "후벵 네베스",
        "originName": "후벵 디오구 다 실바 네베스",
        "pos": "CM",
        "birth": "1997.03.13",
        "country": "포르투갈",
        "team": "알힐랄"
    },
    {
        "name": "레온 바일리",
        "originName": "레온 바일리",
        "pos": "LM",
        "birth": "1997.08.09",
        "country": "자메이카",
        "team": "애스턴 빌라"
    },
    {
        "name": "오야르사발",
        "originName": "미켈 오야르사발 우가르테",
        "pos": "LW",
        "birth": "1997.04.21",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "켈빈 아미안",
        "originName": "켈빈 아미안",
        "pos": "RB",
        "birth": "1998.02.08",
        "country": "프랑스",
        "team": "스페치아"
    },
    {
        "name": "엠레 모르",
        "originName": "엠레 모르",
        "pos": "LW",
        "birth": "1997.07.24",
        "country": "튀르키예",
        "team": "페네르바흐체"
    },
    {
        "name": "조너선 레코",
        "originName": "조너선 레코",
        "pos": "RW",
        "birth": "1999.04.24",
        "country": "잉글랜드",
        "team": "밀턴킨즈 던스"
    },
    {
        "name": "R. 피에르-가브리엘",
        "originName": "로나엘 피에르-가브리엘",
        "pos": "RB",
        "birth": "1998.06.13",
        "country": "프랑스",
        "team": "FC 낭트"
    },
    {
        "name": "압뒬카디르 외뮈르",
        "originName": "압뒬카디르 외뮈르",
        "pos": "RM",
        "birth": "1999.06.25",
        "country": "튀르키예",
        "team": "트라브존스포르"
    },
    {
        "name": "얀 카라모",
        "originName": "얀 카라모",
        "pos": "RW",
        "birth": "1998.07.08",
        "country": "프랑스",
        "team": "토리노"
    },
    {
        "name": "팔렌티노 뮐러",
        "originName": "팔렌티노 뮐러",
        "pos": "CDM",
        "birth": "1999.01.19",
        "country": "오스트리아",
        "team": "WSG 티롤"
    },
    {
        "name": "마르코 그루이치",
        "originName": "마르코 그루이치",
        "pos": "CM",
        "birth": "1996.04.13",
        "country": "세르비아",
        "team": "FC 포르투"
    },
    {
        "name": "저스틴 바일로",
        "originName": "저스틴 바일로",
        "pos": "GK",
        "birth": "1998.01.22",
        "country": "네덜란드",
        "team": "페예노르트"
    },
    {
        "name": "알레냐",
        "originName": "카를레스 알레냐 카스티요",
        "pos": "CM",
        "birth": "1998.01.05",
        "country": "스페인",
        "team": "헤타페 CF"
    },
    {
        "name": "도안 리쓰",
        "originName": "도안 리쓰",
        "pos": "CAM",
        "birth": "1998.06.16",
        "country": "일본",
        "team": "SC 프라이부르크"
    },
    {
        "name": "알반 라퐁",
        "originName": "알반 라퐁",
        "pos": "GK",
        "birth": "1999.01.23",
        "country": "프랑스",
        "team": "FC 낭트"
    },
    {
        "name": "알렉산데르 이사크",
        "originName": "알렉산데르 이사크",
        "pos": "ST",
        "birth": "1999.09.21",
        "country": "스웨덴",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "제드송 페르난데스",
        "originName": "제드송 카르발류 페르난데스",
        "pos": "CM",
        "birth": "1999.01.09",
        "country": "포르투갈",
        "team": "베식타슈"
    },
    {
        "name": "요시프 브레칼로",
        "originName": "요시프 브레칼로",
        "pos": "LM",
        "birth": "1998.06.23",
        "country": "크로아티아",
        "team": "피오렌티나"
    },
    {
        "name": "후벵 비나그르",
        "originName": "후벵 나시멘투 비나그르",
        "pos": "LWB",
        "birth": "1999.04.09",
        "country": "포르투갈",
        "team": "스포르팅 CP"
    },
    {
        "name": "티모시 포수-멘사",
        "originName": "티모시 포수-멘사",
        "pos": "RB",
        "birth": "1998.01.02",
        "country": "네덜란드",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "샘 슈레크",
        "originName": "샘 슈레크",
        "pos": "CAM",
        "birth": "1999.01.29",
        "country": "독일",
        "team": "아르미니아 빌레펠트"
    },
    {
        "name": "말랑 사르",
        "originName": "말랑 사르",
        "pos": "CB",
        "birth": "1999.01.23",
        "country": "프랑스",
        "team": "첼시"
    },
    {
        "name": "요엘 아소로",
        "originName": "요엘 아소로",
        "pos": "ST",
        "birth": "1999.04.27",
        "country": "스웨덴",
        "team": "FC 메스"
    },
    {
        "name": "폴 리롤라",
        "originName": "폴 미켈 리롤라 코소크",
        "pos": "RB",
        "birth": "1997.08.13",
        "country": "스페인",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "벤 우드번",
        "originName": "벤 우드번",
        "pos": "LW",
        "birth": "1999.10.15",
        "country": "웨일스",
        "team": "프레스턴 노스 엔드"
    },
    {
        "name": "아론",
        "originName": "아론 마르틴 카리콜",
        "pos": "LB",
        "birth": "1997.04.22",
        "country": "스페인",
        "team": "제노아"
    },
    {
        "name": "모이스 킨",
        "originName": "모이스 킨",
        "pos": "ST",
        "birth": "2000.02.28",
        "country": "이탈리아",
        "team": "유벤투스"
    },
    {
        "name": "아이멘 바르코크",
        "originName": "아이멘 바르코크",
        "pos": "RM",
        "birth": "1998.05.21",
        "country": "독일",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "부바카르 카마라",
        "originName": "부바카르 카마라",
        "pos": "CB",
        "birth": "1999.11.23",
        "country": "프랑스",
        "team": "애스턴 빌라"
    },
    {
        "name": "J. 클라위베르트",
        "originName": "저스틴 클라위베르트",
        "pos": "LW",
        "birth": "1999.05.05",
        "country": "네덜란드",
        "team": "AFC 본머스"
    },
    {
        "name": "라자로스 람프루",
        "originName": "라자로스 람프루",
        "pos": "RW",
        "birth": "1997.12.19",
        "country": "그리스",
        "team": "엑셀시오르"
    },
    {
        "name": "무사 와구에",
        "originName": "무사 와구에",
        "pos": "RB",
        "birth": "1998.10.04",
        "country": "세네갈",
        "team": "HNK 고리차"
    },
    {
        "name": "아르네 마이어",
        "originName": "아르네 마이어",
        "pos": "CM",
        "birth": "1999.01.08",
        "country": "독일",
        "team": "FC 아우크스부르크"
    },
    {
        "name": "파트리크 쿠트로네",
        "originName": "파트리크 쿠트로네",
        "pos": "ST",
        "birth": "1998.01.03",
        "country": "이탈리아",
        "team": "코모 1907"
    },
    {
        "name": "피에트로 펠레그리",
        "originName": "피에트로 펠레그리",
        "pos": "ST",
        "birth": "2001.03.17",
        "country": "이탈리아",
        "team": "토리노"
    },
    {
        "name": "미하일 리소프",
        "originName": "미하일 리소프",
        "pos": "LB",
        "birth": "1998.01.29",
        "country": "러시아",
        "team": "로코모티브 모스크바"
    },
    {
        "name": "레오 자바",
        "originName": "레오나르두 호드리기스 리마",
        "pos": "ST",
        "birth": "1998.08.02",
        "country": "브라질",
        "team": "상 베르나르두 FC"
    },
    {
        "name": "루카 지단",
        "originName": "루카 지단",
        "pos": "GK",
        "birth": "1998.05.13",
        "country": "프랑스",
        "team": "SD 에이바르"
    },
    {
        "name": "퇸 코프메이너르스",
        "originName": "퇸 코프메이너르스",
        "pos": "CM",
        "birth": "1998.02.28",
        "country": "네덜란드",
        "team": "베르가모 칼초"
    },
    {
        "name": "마르셀로 사라키",
        "originName": "마르셀로 사라키",
        "pos": "LB",
        "birth": "1998.04.23",
        "country": "우루과이",
        "team": "보카 주니어스"
    },
    {
        "name": "티머시 웨아",
        "originName": "티머시 웨아",
        "pos": "ST",
        "birth": "2000.02.22",
        "country": "미국",
        "team": "유벤투스"
    },
    {
        "name": "토니 모야",
        "originName": "안토니오 모야 베가",
        "pos": "CM",
        "birth": "1998.03.20",
        "country": "스페인",
        "team": "레알 사라고사"
    },
    {
        "name": "마우루 주니오르",
        "originName": "마우루 자케송 J. 페헤이라 산투스",
        "pos": "CAM",
        "birth": "1999.05.06",
        "country": "브라질",
        "team": "PSV"
    },
    {
        "name": "무사 바로",
        "originName": "무사 바로",
        "pos": "ST",
        "birth": "1998.11.14",
        "country": "감비아",
        "team": "알타원"
    },
    {
        "name": "조바느 카브랄",
        "originName": "조바느 에두아르두 보르지스 카브랄",
        "pos": "RM",
        "birth": "1998.06.14",
        "country": "케이프베르디 제도",
        "team": "스포르팅 CP"
    },
    {
        "name": "폴 디코프",
        "originName": "폴 디코프",
        "pos": "ST",
        "birth": "1972.11.01",
        "country": "스코틀랜드",
        "team": "올덤 애슬레틱"
    },
    {
        "name": "졸리언 레스콧",
        "originName": "졸리언 레스콧",
        "pos": "CB",
        "birth": "1982.08.16",
        "country": "잉글랜드",
        "team": "선덜랜드"
    },
    {
        "name": "마이크 도일",
        "originName": "마이크 도일",
        "pos": "CDM",
        "birth": "1946.11.25",
        "country": "잉글랜드",
        "team": "로치데일"
    },
    {
        "name": "에릭 브룩",
        "originName": "에릭 브룩",
        "pos": "LW",
        "birth": "1907.11.27",
        "country": "잉글랜드",
        "team": "맨체스터 시티"
    },
    {
        "name": "닐 영",
        "originName": "닐 영",
        "pos": "LW",
        "birth": "1944.02.17",
        "country": "잉글랜드",
        "team": "로치데일"
    },
    {
        "name": "마이크 서머비",
        "originName": "마이크 서머비",
        "pos": "RW",
        "birth": "1942.12.15",
        "country": "잉글랜드",
        "team": "모즐리"
    },
    {
        "name": "베르트 트라우트만",
        "originName": "베르트 트라우트만",
        "pos": "GK",
        "birth": "1923.10.22",
        "country": "독일",
        "team": "텔퍼드 유나이티드"
    },
    {
        "name": "클라우디오 피사로",
        "originName": "클라우디오 피사로",
        "pos": "ST",
        "birth": "1978.10.03",
        "country": "페루",
        "team": "베르더 브레멘"
    },
    {
        "name": "존 오셰이",
        "originName": "존 오셰이",
        "pos": "CB",
        "birth": "1981.04.30",
        "country": "아일랜드",
        "team": "레딩"
    },
    {
        "name": "무사 디아비",
        "originName": "무사 디아비",
        "pos": "RW",
        "birth": "1999.07.07",
        "country": "프랑스",
        "team": "애스턴 빌라"
    },
    {
        "name": "E. 아데바요르",
        "originName": "에마뉘엘 아데바요르",
        "pos": "ST",
        "birth": "1984.02.26",
        "country": "토고",
        "team": "올림피아 아순시온"
    },
    {
        "name": "고란 판데프",
        "originName": "고란 판데프",
        "pos": "CF",
        "birth": "1983.07.27",
        "country": "북마케도니아",
        "team": "파르마"
    },
    {
        "name": "대런 플레처",
        "originName": "대런 플레처",
        "pos": "CM",
        "birth": "1984.02.01",
        "country": "스코틀랜드",
        "team": "스토크 시티"
    },
    {
        "name": "라그나르 클라반",
        "originName": "라그나르 클라반",
        "pos": "CB",
        "birth": "1985.10.30",
        "country": "에스토니아",
        "team": "빠에드 리나미스꼰드"
    },
    {
        "name": "호세 소사",
        "originName": "호세 소사",
        "pos": "RM",
        "birth": "1985.06.19",
        "country": "아르헨티나",
        "team": "에스투디안테스 데라플라타"
    },
    {
        "name": "아르다 투란",
        "originName": "아르다 투란",
        "pos": "LM",
        "birth": "1987.01.30",
        "country": "튀르키예",
        "team": "갈라타사라이"
    },
    {
        "name": "디에고 로페스",
        "originName": "디에고 로페스 로드리게스",
        "pos": "GK",
        "birth": "1981.11.03",
        "country": "스페인",
        "team": "라요 바예카노"
    },
    {
        "name": "조 하트",
        "originName": "조 하트",
        "pos": "GK",
        "birth": "1987.04.19",
        "country": "잉글랜드",
        "team": "셀틱"
    },
    {
        "name": "라이언 바벨",
        "originName": "라이언 바벨",
        "pos": "LW",
        "birth": "1986.12.19",
        "country": "네덜란드",
        "team": "갈라타사라이"
    },
    {
        "name": "아드리아누",
        "originName": "아드리아누 코헤이아 클라루",
        "pos": "LM",
        "birth": "1984.10.26",
        "country": "브라질",
        "team": "KAS 오이펜"
    },
    {
        "name": "조니 에번스",
        "originName": "조니 에번스",
        "pos": "CB",
        "birth": "1988.01.03",
        "country": "북아일랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "누리 샤힌",
        "originName": "누리 샤힌",
        "pos": "CM",
        "birth": "1988.09.05",
        "country": "튀르키예",
        "team": "안탈랴스포르"
    },
    {
        "name": "헤수스 나바스",
        "originName": "헤수스 나바스 곤살레스",
        "pos": "RM",
        "birth": "1985.11.21",
        "country": "스페인",
        "team": "세비야 FC"
    },
    {
        "name": "마리오 수아레스",
        "originName": "마리오 수아레스 마타",
        "pos": "CM",
        "birth": "1987.02.24",
        "country": "스페인",
        "team": "라요 바예카노"
    },
    {
        "name": "뎀바 바",
        "originName": "뎀바 바",
        "pos": "ST",
        "birth": "1985.05.25",
        "country": "세네갈",
        "team": "FC 루가노"
    },
    {
        "name": "스벤 벤더",
        "originName": "스벤 벤더",
        "pos": "CDM",
        "birth": "1989.04.27",
        "country": "독일",
        "team": "TSV 브라넨버그"
    },
    {
        "name": "요렌테",
        "originName": "페르난도 하비에르 요렌테 토레스",
        "pos": "ST",
        "birth": "1985.02.26",
        "country": "스페인",
        "team": "SD 에이바르"
    },
    {
        "name": "나빌 디라르",
        "originName": "나빌 디라르",
        "pos": "RM",
        "birth": "1986.02.25",
        "country": "모로코",
        "team": "카슴파샤 SK"
    },
    {
        "name": "아드리안 로페스",
        "originName": "아드리안 로페스 알바레스",
        "pos": "ST",
        "birth": "1988.01.08",
        "country": "스페인",
        "team": "말라가 CF"
    },
    {
        "name": "바카리 사냐",
        "originName": "바카리 사냐",
        "pos": "RB",
        "birth": "1983.02.14",
        "country": "프랑스",
        "team": "CF 몽레알"
    },
    {
        "name": "파비우",
        "originName": "파비우 페레이라 다 시우바",
        "pos": "LB",
        "birth": "1990.07.09",
        "country": "브라질",
        "team": "그레미우"
    },
    {
        "name": "키어런 깁스",
        "originName": "키어런 깁스",
        "pos": "LWB",
        "birth": "1989.09.26",
        "country": "잉글랜드",
        "team": "인터 마이애미"
    },
    {
        "name": "토마스 링콘",
        "originName": "토마스 링콘",
        "pos": "CM",
        "birth": "1988.01.13",
        "country": "베네수엘라",
        "team": "산토스"
    },
    {
        "name": "에스쿠데로",
        "originName": "세르히오 에스쿠데로 팔로모",
        "pos": "LB",
        "birth": "1989.09.02",
        "country": "스페인",
        "team": "레알 바야돌리드"
    },
    {
        "name": "막심 고날롱",
        "originName": "막심 고날롱",
        "pos": "CM",
        "birth": "1989.03.10",
        "country": "프랑스",
        "team": "클레르몽 푸트"
    },
    {
        "name": "대니 잉스",
        "originName": "대니 잉스",
        "pos": "ST",
        "birth": "1992.07.23",
        "country": "잉글랜드",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "크리스티안 테요",
        "originName": "크리스티안 테요 에레라",
        "pos": "LW",
        "birth": "1991.08.19",
        "country": "스페인",
        "team": "알파테"
    },
    {
        "name": "주앙 제주스",
        "originName": "주앙 길레르미 누니스 제주스",
        "pos": "CB",
        "birth": "1991.06.10",
        "country": "브라질",
        "team": "나폴리 FC"
    },
    {
        "name": "스테파노 스투라로",
        "originName": "스테파노 스투라로",
        "pos": "CM",
        "birth": "1993.03.09",
        "country": "이탈리아",
        "team": "파티흐 카라귐뤼크"
    },
    {
        "name": "지브릴 시디베",
        "originName": "지브릴 시디베",
        "pos": "RB",
        "birth": "1992.07.29",
        "country": "프랑스",
        "team": "AEK 아테네"
    },
    {
        "name": "페르난두",
        "originName": "페르난두 헤지스 모타",
        "pos": "CDM",
        "birth": "1987.07.25",
        "country": "브라질",
        "team": "세비야 FC"
    },
    {
        "name": "로베르토 페레이라",
        "originName": "로베르토 페레이라",
        "pos": "CAM",
        "birth": "1991.01.07",
        "country": "아르헨티나",
        "team": "우디네세"
    },
    {
        "name": "마리오 르미나",
        "originName": "마리오 르미나",
        "pos": "CM",
        "birth": "1993.09.01",
        "country": "가봉",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "제메르송",
        "originName": "제메르송 지 제주스 나시멘투",
        "pos": "CB",
        "birth": "1992.08.24",
        "country": "브라질",
        "team": "FC 메스"
    },
    {
        "name": "젠기즈 윈데르",
        "originName": "젠기즈 윈데르",
        "pos": "RW",
        "birth": "1997.07.14",
        "country": "튀르키예",
        "team": "페네르바흐체"
    },
    {
        "name": "부라크 일마즈",
        "originName": "부라크 일마즈",
        "pos": "ST",
        "birth": "1985.07.15",
        "country": "튀르키예",
        "team": "포르투나 시타르트"
    },
    {
        "name": "후안 베르나트",
        "originName": "후안 베르나트 벨라스코",
        "pos": "LB",
        "birth": "1993.03.01",
        "country": "스페인",
        "team": "파리 생제르맹"
    },
    {
        "name": "막스 크루제",
        "originName": "막스 크루제",
        "pos": "CF",
        "birth": "1988.03.19",
        "country": "독일",
        "team": "SC 파더보른 07"
    },
    {
        "name": "토머스 파티",
        "originName": "토머스 파티",
        "pos": "CDM",
        "birth": "1993.06.13",
        "country": "가나",
        "team": "아스널"
    },
    {
        "name": "주니오",
        "originName": "주니오르 네그랑",
        "pos": "ST",
        "birth": "1986.12.30",
        "country": "브라질",
        "team": "장춘 야타이"
    },
    {
        "name": "라르스 운네스탈",
        "originName": "라르스 운네스탈",
        "pos": "GK",
        "birth": "1990.07.20",
        "country": "독일",
        "team": "FC 트벤터"
    },
    {
        "name": "아담 마헤르",
        "originName": "아담 마헤르",
        "pos": "CM",
        "birth": "1993.07.20",
        "country": "네덜란드",
        "team": "다마크 FC"
    },
    {
        "name": "엑토르 에레라",
        "originName": "엑토르 에레라",
        "pos": "CM",
        "birth": "1990.04.19",
        "country": "멕시코",
        "team": "휴스턴 다이너모"
    },
    {
        "name": "주제 폰테",
        "originName": "주제 미겔 다 호샤 폰테",
        "pos": "CB",
        "birth": "1983.12.22",
        "country": "포르투갈",
        "team": "SC 브라가"
    },
    {
        "name": "맷 도허티",
        "originName": "맷 도허티",
        "pos": "RWB",
        "birth": "1992.01.16",
        "country": "아일랜드",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "대니 다코스타",
        "originName": "대니 다코스타",
        "pos": "RWB",
        "birth": "1993.07.13",
        "country": "독일",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "케빈 음바부",
        "originName": "케빈 음바부",
        "pos": "RB",
        "birth": "1995.04.19",
        "country": "스위스",
        "team": "풀럼"
    },
    {
        "name": "케렘 데미르바이",
        "originName": "케렘 데미르바이",
        "pos": "CM",
        "birth": "1993.07.03",
        "country": "독일",
        "team": "갈라타사라이"
    },
    {
        "name": "왈테르 베니테스",
        "originName": "왈테르 베니테스",
        "pos": "GK",
        "birth": "1993.01.19",
        "country": "아르헨티나",
        "team": "PSV"
    },
    {
        "name": "다코남 제네",
        "originName": "다코남 제네",
        "pos": "CB",
        "birth": "1991.12.31",
        "country": "토고",
        "team": "헤타페 CF"
    },
    {
        "name": "도니 반더베이크",
        "originName": "도니 반더베이크",
        "pos": "CAM",
        "birth": "1997.04.18",
        "country": "네덜란드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "M. 할슈텐베르크",
        "originName": "마르셀 할슈텐베르크",
        "pos": "LB",
        "birth": "1991.09.27",
        "country": "독일",
        "team": "RB 라이프치히"
    },
    {
        "name": "가야",
        "originName": "호세 루이스 가야 페냐",
        "pos": "LB",
        "birth": "1995.05.25",
        "country": "스페인",
        "team": "발렌시아 CF"
    },
    {
        "name": "우레이",
        "originName": "우레이",
        "pos": "ST",
        "birth": "1991.11.19",
        "country": "중국",
        "team": "상하이 하이강"
    },
    {
        "name": "K. 피옹테크",
        "originName": "크시슈토프 피옹테크",
        "pos": "ST",
        "birth": "1995.07.01",
        "country": "폴란드",
        "team": "바샥셰히르"
    },
    {
        "name": "M. 에게슈타인",
        "originName": "막시밀리안 에게슈타인",
        "pos": "CM",
        "birth": "1996.12.08",
        "country": "독일",
        "team": "SC 프라이부르크"
    },
    {
        "name": "니콜라 페페",
        "originName": "니콜라 페페",
        "pos": "RM",
        "birth": "1995.05.29",
        "country": "코트디부아르",
        "team": "트라브존스포르"
    },
    {
        "name": "앙헬리뇨",
        "originName": "호세 앙헬 에스모리스 타센데",
        "pos": "LB",
        "birth": "1997.01.04",
        "country": "스페인",
        "team": "RB 라이프치히"
    },
    {
        "name": "예르디 스하우턴",
        "originName": "예르디 스하우턴",
        "pos": "CM",
        "birth": "1997.01.12",
        "country": "네덜란드",
        "team": "PSV"
    },
    {
        "name": "니콜로 차니올로",
        "originName": "니콜로 차니올로",
        "pos": "CAM",
        "birth": "1999.07.02",
        "country": "이탈리아",
        "team": "갈라타사라이"
    },
    {
        "name": "시키뉴",
        "originName": "프란시스쿠 L. 리마 실바 마샤두",
        "pos": "CAM",
        "birth": "1995.07.19",
        "country": "포르투갈",
        "team": "SL 벤피카"
    },
    {
        "name": "미하엘 렌징",
        "originName": "미하엘 렌징",
        "pos": "GK",
        "birth": "1984.05.14",
        "country": "독일",
        "team": "포르투나 뒤셀도르프"
    },
    {
        "name": "스테번 베르흐바인",
        "originName": "스테번 베르흐바인",
        "pos": "LW",
        "birth": "1997.10.08",
        "country": "네덜란드",
        "team": "아약스"
    },
    {
        "name": "웨스 모건",
        "originName": "웨스 모건",
        "pos": "CB",
        "birth": "1984.01.21",
        "country": "자메이카",
        "team": "레스터 시티"
    },
    {
        "name": "F. 마냐넬리",
        "originName": "프란체스코 마냐넬리",
        "pos": "CDM",
        "birth": "1984.11.12",
        "country": "이탈리아",
        "team": "사수올로"
    },
    {
        "name": "É. 바레토",
        "originName": "에드가르 바레토",
        "pos": "CM",
        "birth": "1984.07.15",
        "country": "파라과이",
        "team": "NEC 네이메헌"
    },
    {
        "name": "이우통",
        "originName": "비토리누 이우통 다 시우바",
        "pos": "CB",
        "birth": "1977.09.13",
        "country": "브라질",
        "team": "몽펠리에 HSC"
    },
    {
        "name": "로이크 페랑",
        "originName": "로이크 페랑",
        "pos": "CB",
        "birth": "1985.08.07",
        "country": "프랑스",
        "team": "AS 생테티엔"
    },
    {
        "name": "알렉시 로마오",
        "originName": "알렉시 로마오",
        "pos": "CDM",
        "birth": "1984.01.18",
        "country": "토고",
        "team": "로니꼬스 FC"
    },
    {
        "name": "벤 포스터",
        "originName": "벤 포스터",
        "pos": "GK",
        "birth": "1983.04.03",
        "country": "잉글랜드",
        "team": "렉섬 AFC"
    },
    {
        "name": "올리버 핑크",
        "originName": "올리버 핑크",
        "pos": "CM",
        "birth": "1982.06.06",
        "country": "독일",
        "team": "포르투나 뒤셀도르프"
    },
    {
        "name": "안드레아 마시엘로",
        "originName": "안드레아 마시엘로",
        "pos": "CB",
        "birth": "1986.02.05",
        "country": "이탈리아",
        "team": "수드티롤"
    },
    {
        "name": "제르비뉴",
        "originName": "제르베 야오 쿠아시",
        "pos": "LW",
        "birth": "1987.05.27",
        "country": "코트디부아르",
        "team": "아리스 테살로니키"
    },
    {
        "name": "웨인 헤네시",
        "originName": "웨인 헤네시",
        "pos": "GK",
        "birth": "1987.01.24",
        "country": "웨일스",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "에세키엘 가라이",
        "originName": "에세키엘 가라이",
        "pos": "CB",
        "birth": "1986.10.10",
        "country": "아르헨티나",
        "team": "발렌시아 CF"
    },
    {
        "name": "나우두",
        "originName": "호나우두 아파레시두 호드리기스",
        "pos": "CB",
        "birth": "1982.09.10",
        "country": "브라질",
        "team": "AS 모나코"
    },
    {
        "name": "글렌 머리",
        "originName": "글렌 머리",
        "pos": "ST",
        "birth": "1983.09.25",
        "country": "잉글랜드",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "A. 마리아파",
        "originName": "에이드리언 마리아파",
        "pos": "CB",
        "birth": "1986.10.03",
        "country": "자메이카",
        "team": "솔퍼드 시티"
    },
    {
        "name": "제바스티안 프뢰들",
        "originName": "제바스티안 프뢰들",
        "pos": "CB",
        "birth": "1987.06.21",
        "country": "오스트리아",
        "team": "우디네세"
    },
    {
        "name": "라우번 헤닝스",
        "originName": "라우번 헤닝스",
        "pos": "ST",
        "birth": "1987.08.28",
        "country": "독일",
        "team": "SV 잔트하우젠"
    },
    {
        "name": "크레이그 캐스카트",
        "originName": "크레이그 캐스카트",
        "pos": "CB",
        "birth": "1989.02.06",
        "country": "북아일랜드",
        "team": "KV 코르트레이크"
    },
    {
        "name": "트로이 디니",
        "originName": "트로이 디니",
        "pos": "ST",
        "birth": "1988.06.29",
        "country": "잉글랜드",
        "team": "포리스트 그린 로버스"
    },
    {
        "name": "마푸 양가-음비와",
        "originName": "마푸 양가-음비와",
        "pos": "CB",
        "birth": "1989.05.15",
        "country": "프랑스",
        "team": "올랭피크 리옹"
    },
    {
        "name": "마티외 드뷔시",
        "originName": "마티외 드뷔시",
        "pos": "RB",
        "birth": "1985.07.28",
        "country": "프랑스",
        "team": "발랑시엔 FC"
    },
    {
        "name": "조엘 워드",
        "originName": "조엘 워드",
        "pos": "RB",
        "birth": "1989.10.29",
        "country": "잉글랜드",
        "team": "크리스털 팰리스"
    },
    {
        "name": "맷 리치",
        "originName": "맷 리치",
        "pos": "RM",
        "birth": "1989.09.10",
        "country": "스코틀랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "마르코 사우",
        "originName": "마르코 사우",
        "pos": "ST",
        "birth": "1987.11.03",
        "country": "이탈리아",
        "team": "페랄피살로"
    },
    {
        "name": "빅토르 산체스",
        "originName": "빅토르 산체스 마타",
        "pos": "CDM",
        "birth": "1987.09.08",
        "country": "스페인",
        "team": "지로나 FC"
    },
    {
        "name": "과이타",
        "originName": "비센테 과이타 파나데로",
        "pos": "GK",
        "birth": "1987.01.10",
        "country": "스페인",
        "team": "셀타 비고"
    },
    {
        "name": "유라이 쿠츠카",
        "originName": "유라이 쿠츠카",
        "pos": "CM",
        "birth": "1987.02.26",
        "country": "슬로바키아",
        "team": "슬로반 브라티슬라바"
    },
    {
        "name": "로맹 아무마",
        "originName": "로맹 아무마",
        "pos": "RW",
        "birth": "1987.03.29",
        "country": "프랑스",
        "team": "AC 아작시오"
    },
    {
        "name": "데이비 프뢰퍼르",
        "originName": "데이비 프뢰퍼르",
        "pos": "CM",
        "birth": "1991.09.02",
        "country": "네덜란드",
        "team": "비테서"
    },
    {
        "name": "라과르디아",
        "originName": "빅토르 라과르디아 시스네로스",
        "pos": "CB",
        "birth": "1989.11.05",
        "country": "스페인",
        "team": "데포르티보 알라베스"
    },
    {
        "name": "하비 로페스",
        "originName": "하비에르 로페스 로드리게스",
        "pos": "RB",
        "birth": "1986.01.21",
        "country": "스페인",
        "team": "애들레이드 유나이티드"
    },
    {
        "name": "조나스 마르탕",
        "originName": "조나스 마르탕",
        "pos": "CM",
        "birth": "1990.04.09",
        "country": "프랑스",
        "team": "스타드 브레스트 29"
    },
    {
        "name": "이바이 고메스",
        "originName": "이바이 고메스 페레스",
        "pos": "RM",
        "birth": "1989.11.11",
        "country": "스페인",
        "team": "RC 데포르티보"
    },
    {
        "name": "로이크 랑드르",
        "originName": "로이크 랑드르",
        "pos": "CB",
        "birth": "1992.05.05",
        "country": "프랑스",
        "team": "알샤말"
    },
    {
        "name": "마르코 반힝켈",
        "originName": "마르코 반힝켈",
        "pos": "CM",
        "birth": "1992.12.01",
        "country": "네덜란드",
        "team": "비테서"
    },
    {
        "name": "코너 코디",
        "originName": "코너 코디",
        "pos": "CB",
        "birth": "1993.02.25",
        "country": "잉글랜드",
        "team": "레스터 시티"
    },
    {
        "name": "셰이머스 콜먼",
        "originName": "셰이머스 콜먼",
        "pos": "RB",
        "birth": "1988.10.11",
        "country": "아일랜드",
        "team": "에버턴"
    },
    {
        "name": "디에고 데메",
        "originName": "디에고 데메",
        "pos": "CDM",
        "birth": "1991.11.21",
        "country": "독일",
        "team": "나폴리 FC"
    },
    {
        "name": "시모네 차차",
        "originName": "시모네 차차",
        "pos": "ST",
        "birth": "1991.06.25",
        "country": "이탈리아",
        "team": "토리노"
    },
    {
        "name": "자말 러셀스",
        "originName": "자말 러셀스",
        "pos": "CB",
        "birth": "1993.11.11",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "칸 아이한",
        "originName": "칸 아이한",
        "pos": "CB",
        "birth": "1994.11.10",
        "country": "튀르키예",
        "team": "갈라타사라이"
    },
    {
        "name": "유니스 압델하미드",
        "originName": "유니스 압델하미드",
        "pos": "CB",
        "birth": "1987.09.28",
        "country": "모로코",
        "team": "스타드 랭스"
    },
    {
        "name": "압둘라예 두쿠레",
        "originName": "압둘라예 두쿠레",
        "pos": "CDM",
        "birth": "1993.01.01",
        "country": "프랑스",
        "team": "에버턴"
    },
    {
        "name": "파체코",
        "originName": "페르난도 파체코 플로레스",
        "pos": "GK",
        "birth": "1992.05.18",
        "country": "스페인",
        "team": "RCD 에스파뇰"
    },
    {
        "name": "아요세 페레스",
        "originName": "아요세 페레스 구티에레스",
        "pos": "CAM",
        "birth": "1993.07.29",
        "country": "스페인",
        "team": "레스터 시티"
    },
    {
        "name": "뤼도비크 아조르크",
        "originName": "뤼도비크 아조르크",
        "pos": "ST",
        "birth": "1994.02.25",
        "country": "프랑스",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "앙토니 브리앙송",
        "originName": "앙토니 브리앙송",
        "pos": "CB",
        "birth": "1994.11.29",
        "country": "프랑스",
        "team": "AS 생테티엔"
    },
    {
        "name": "레미 우당",
        "originName": "레미 우당",
        "pos": "RM",
        "birth": "1996.11.18",
        "country": "프랑스",
        "team": "지롱댕 보르도"
    },
    {
        "name": "바우트 베고르스트",
        "originName": "바우트 베고르스트",
        "pos": "ST",
        "birth": "1992.08.07",
        "country": "네덜란드",
        "team": "번리"
    },
    {
        "name": "디미트리 리에나르",
        "originName": "디미트리 리에나르",
        "pos": "CM",
        "birth": "1988.02.13",
        "country": "프랑스",
        "team": "SC 바스티아"
    },
    {
        "name": "마이클 브래들리",
        "originName": "마이클 브래들리",
        "pos": "CDM",
        "birth": "1987.07.31",
        "country": "미국",
        "team": "토론토 FC"
    },
    {
        "name": "제페르손 파르판",
        "originName": "제페르손 파르판",
        "pos": "CAM",
        "birth": "1984.10.26",
        "country": "페루",
        "team": "알리안사 리마"
    },
    {
        "name": "톰 히턴",
        "originName": "톰 히턴",
        "pos": "GK",
        "birth": "1986.04.15",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "장 보세주르",
        "originName": "장 보세주르",
        "pos": "LB",
        "birth": "1984.06.01",
        "country": "칠레",
        "team": "코킴보 우니도"
    },
    {
        "name": "조나탄 오로스코",
        "originName": "조나탄 오로스코",
        "pos": "GK",
        "birth": "1986.05.12",
        "country": "멕시코",
        "team": "클럽 티후아나"
    },
    {
        "name": "존 오비 미켈",
        "originName": "존 오비 미켈",
        "pos": "CAM",
        "birth": "1987.04.22",
        "country": "나이지리아",
        "team": "스토크 시티"
    },
    {
        "name": "케너트 베르메이르",
        "originName": "케너트 베르메이르",
        "pos": "GK",
        "birth": "1986.01.10",
        "country": "네덜란드",
        "team": "PEC 즈볼러"
    },
    {
        "name": "조나탄 도스산토스",
        "originName": "조나탄 도스산토스",
        "pos": "CM",
        "birth": "1990.04.26",
        "country": "멕시코",
        "team": "아메리카"
    },
    {
        "name": "알렉상드르 우키자",
        "originName": "알렉상드르 우키자",
        "pos": "GK",
        "birth": "1988.07.19",
        "country": "프랑스",
        "team": "FC 메스"
    },
    {
        "name": "앙리 세베",
        "originName": "앙리 세베",
        "pos": "CM",
        "birth": "1990.10.26",
        "country": "세네갈",
        "team": "포 FC"
    },
    {
        "name": "페이비언 델프",
        "originName": "페이비언 델프",
        "pos": "CM",
        "birth": "1989.11.21",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "미하엘 랑",
        "originName": "미하엘 랑",
        "pos": "RB",
        "birth": "1991.02.08",
        "country": "스위스",
        "team": "FC 바젤 1893"
    },
    {
        "name": "유수프 포울센",
        "originName": "유수프 포울센",
        "pos": "ST",
        "birth": "1994.06.15",
        "country": "덴마크",
        "team": "RB 라이프치히"
    },
    {
        "name": "안드레아 벨로티",
        "originName": "안드레아 벨로티",
        "pos": "ST",
        "birth": "1993.12.20",
        "country": "이탈리아",
        "team": "로마 FC"
    },
    {
        "name": "제이미 바디",
        "originName": "제이미 바디",
        "pos": "ST",
        "birth": "1987.01.11",
        "country": "잉글랜드",
        "team": "레스터 시티"
    },
    {
        "name": "루이스 몬테스",
        "originName": "루이스 몬테스",
        "pos": "CM",
        "birth": "1986.05.15",
        "country": "멕시코",
        "team": "에베르톤 데 비냐델마르"
    },
    {
        "name": "소피안 페굴리",
        "originName": "소피안 페굴리",
        "pos": "CM",
        "birth": "1989.12.26",
        "country": "알제리",
        "team": "파티흐 카라귐뤼크"
    },
    {
        "name": "패트릭 반안홀트",
        "originName": "패트릭 반안홀트",
        "pos": "LB",
        "birth": "1990.08.29",
        "country": "네덜란드",
        "team": "갈라타사라이"
    },
    {
        "name": "셰후 쿠야테",
        "originName": "셰후 쿠야테",
        "pos": "CB",
        "birth": "1989.12.21",
        "country": "세네갈",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "라피크 할리시",
        "originName": "라피크 할리시",
        "pos": "CB",
        "birth": "1986.09.02",
        "country": "알제리",
        "team": "모레이렌스"
    },
    {
        "name": "에두아르 멘디",
        "originName": "에두아르 멘디",
        "pos": "GK",
        "birth": "1992.03.01",
        "country": "프랑스",
        "team": "알아흘리"
    },
    {
        "name": "우고 곤살레스",
        "originName": "우고 곤살레스",
        "pos": "GK",
        "birth": "1990.08.01",
        "country": "멕시코",
        "team": "CF 몬테레이"
    },
    {
        "name": "카를로스 삼브라노",
        "originName": "카를로스 삼브라노",
        "pos": "CB",
        "birth": "1989.07.10",
        "country": "페루",
        "team": "알리안사 리마"
    },
    {
        "name": "마우리시오 이슬라",
        "originName": "마우리시오 이슬라",
        "pos": "RB",
        "birth": "1988.06.12",
        "country": "칠레",
        "team": "CA 인데펜디엔테"
    },
    {
        "name": "마티아스 수아레스",
        "originName": "마티아스 수아레스",
        "pos": "ST",
        "birth": "1988.05.09",
        "country": "아르헨티나",
        "team": "리버 플레이트"
    },
    {
        "name": "메흐디 아베이드",
        "originName": "메흐디 아베이드",
        "pos": "CDM",
        "birth": "1992.08.06",
        "country": "알제리",
        "team": "바샥셰히르"
    },
    {
        "name": "알프레드 은디아예",
        "originName": "알프레드 은디아예",
        "pos": "CDM",
        "birth": "1990.03.06",
        "country": "세네갈",
        "team": "말라가 CF"
    },
    {
        "name": "라민 가사마",
        "originName": "라민 가사마",
        "pos": "RB",
        "birth": "1989.10.20",
        "country": "세네갈",
        "team": "FC 스타드-러자느-우쉬"
    },
    {
        "name": "스티븐 추버",
        "originName": "스티븐 추버",
        "pos": "LM",
        "birth": "1991.08.17",
        "country": "스위스",
        "team": "AEK 아테네"
    },
    {
        "name": "에르베 바질",
        "originName": "에르베 바질",
        "pos": "CAM",
        "birth": "1990.03.18",
        "country": "프랑스",
        "team": "르아브르 AC"
    },
    {
        "name": "오마 곤잘레스",
        "originName": "오마 곤잘레스",
        "pos": "CB",
        "birth": "1988.10.11",
        "country": "미국",
        "team": "뉴잉글랜드 레볼루션"
    },
    {
        "name": "숀 존슨",
        "originName": "숀 존슨",
        "pos": "GK",
        "birth": "1989.05.31",
        "country": "미국",
        "team": "토론토 FC"
    },
    {
        "name": "디에고 레예스",
        "originName": "디에고 레예스",
        "pos": "CB",
        "birth": "1992.09.19",
        "country": "멕시코",
        "team": "티그레스 데라 UANL"
    },
    {
        "name": "루이스 로드리게스",
        "originName": "루이스 로드리게스",
        "pos": "RB",
        "birth": "1991.01.21",
        "country": "멕시코",
        "team": "티그레스 데라 UANL"
    },
    {
        "name": "네스토르 아라우호",
        "originName": "네스토르 아라우호",
        "pos": "CB",
        "birth": "1991.08.29",
        "country": "멕시코",
        "team": "아메리카"
    },
    {
        "name": "로리스 베니토",
        "originName": "로리스 베니토",
        "pos": "LB",
        "birth": "1992.01.07",
        "country": "스위스",
        "team": "BSC 영보이스"
    },
    {
        "name": "헤르만 페셀라",
        "originName": "헤르만 페셀라",
        "pos": "CB",
        "birth": "1991.06.27",
        "country": "아르헨티나",
        "team": "레알 베티스"
    },
    {
        "name": "곤살로 하라",
        "originName": "곤살로 하라",
        "pos": "CB",
        "birth": "1985.08.29",
        "country": "칠레",
        "team": "코킴보 우니도"
    },
    {
        "name": "J. 푸엔살리다",
        "originName": "호세 페드로 푸엔살리다",
        "pos": "RW",
        "birth": "1985.02.22",
        "country": "칠레",
        "team": "우니베르시다드 카톨리카"
    },
    {
        "name": "호세프미르 바욘",
        "originName": "호세프미르 바욘",
        "pos": "CM",
        "birth": "1988.03.21",
        "country": "페루",
        "team": "알리안사 리마"
    },
    {
        "name": "알도 코르소",
        "originName": "알도 코르소",
        "pos": "RB",
        "birth": "1989.05.20",
        "country": "페루",
        "team": "우니베르시타리오 데 데포르테스 리마"
    },
    {
        "name": "칼럼 윌슨",
        "originName": "칼럼 윌슨",
        "pos": "ST",
        "birth": "1992.02.27",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "팀 림",
        "originName": "팀 림",
        "pos": "LB",
        "birth": "1987.10.05",
        "country": "미국",
        "team": "풀럼"
    },
    {
        "name": "R. 푸네스 모리",
        "originName": "라미로 푸네스 모리",
        "pos": "CB",
        "birth": "1991.03.05",
        "country": "아르헨티나",
        "team": "리버 플레이트"
    },
    {
        "name": "살리우 시스",
        "originName": "살리우 시스",
        "pos": "LB",
        "birth": "1989.06.15",
        "country": "세네갈",
        "team": "AS 낭시"
    },
    {
        "name": "파블로 에르난데스",
        "originName": "파블로 에르난데스",
        "pos": "CM",
        "birth": "1986.10.24",
        "country": "칠레",
        "team": "CD 오'히긴스"
    },
    {
        "name": "라이스 음볼리",
        "originName": "라이스 음볼리",
        "pos": "GK",
        "birth": "1986.04.25",
        "country": "알제리",
        "team": "에티파크 FC"
    },
    {
        "name": "D. 에티엔 주니어",
        "originName": "데리크 에티엔 주니어",
        "pos": "LM",
        "birth": "1996.11.25",
        "country": "아이티",
        "team": "애틀란타 유나이티드"
    },
    {
        "name": "마르코 비조트",
        "originName": "마르코 비조트",
        "pos": "GK",
        "birth": "1991.03.10",
        "country": "네덜란드",
        "team": "스타드 브레스트 29"
    },
    {
        "name": "마이클 헥터",
        "originName": "마이클 헥터",
        "pos": "CDM",
        "birth": "1992.07.19",
        "country": "자메이카",
        "team": "찰턴 애슬레틱"
    },
    {
        "name": "아이사 만디",
        "originName": "아이사 만디",
        "pos": "CB",
        "birth": "1991.10.22",
        "country": "알제리",
        "team": "비야레알 CF"
    },
    {
        "name": "아메드 무사",
        "originName": "아메드 무사",
        "pos": "LM",
        "birth": "1992.10.14",
        "country": "나이지리아",
        "team": "시바스스포르"
    },
    {
        "name": "라울 루이디아스",
        "originName": "라울 루이디아스",
        "pos": "ST",
        "birth": "1990.07.25",
        "country": "페루",
        "team": "시애틀 사운더스"
    },
    {
        "name": "요시마르 요툰",
        "originName": "요시마르 요툰",
        "pos": "CM",
        "birth": "1990.04.07",
        "country": "페루",
        "team": "스포르팅 크리스탈"
    },
    {
        "name": "이봉 음보고",
        "originName": "이봉 음보고",
        "pos": "GK",
        "birth": "1994.06.06",
        "country": "스위스",
        "team": "FC 로리앙"
    },
    {
        "name": "E. 바르가스",
        "originName": "에두아르도 바르가스",
        "pos": "ST",
        "birth": "1989.11.20",
        "country": "칠레",
        "team": "아틀레티쿠 미네이루"
    },
    {
        "name": "기도 피사로",
        "originName": "기도 피사로",
        "pos": "CDM",
        "birth": "1990.02.26",
        "country": "아르헨티나",
        "team": "티그레스 데라 UANL"
    },
    {
        "name": "퀸시 프로머스",
        "originName": "퀸시 프로머스",
        "pos": "ST",
        "birth": "1992.01.04",
        "country": "네덜란드",
        "team": "스파르타크 모스크바"
    },
    {
        "name": "레나토 슈테펜",
        "originName": "레나토 슈테펜",
        "pos": "LM",
        "birth": "1991.11.03",
        "country": "스위스",
        "team": "FC 루가노"
    },
    {
        "name": "로돌포 피사로",
        "originName": "로돌포 피사로",
        "pos": "LW",
        "birth": "1994.02.15",
        "country": "멕시코",
        "team": "AEK 아테네"
    },
    {
        "name": "에디손 플로레스",
        "originName": "에디손 플로레스",
        "pos": "LM",
        "birth": "1994.05.14",
        "country": "페루",
        "team": "아틀라스"
    },
    {
        "name": "알렉산데르 카옌스",
        "originName": "알렉산데르 카옌스",
        "pos": "CB",
        "birth": "1992.05.04",
        "country": "페루",
        "team": "지로나 FC"
    },
    {
        "name": "타일러 보이드",
        "originName": "타일러 보이드",
        "pos": "RM",
        "birth": "1994.12.30",
        "country": "뉴질랜드",
        "team": "LA 갤럭시"
    },
    {
        "name": "P. 오누아추",
        "originName": "폴 에베레 오누아추",
        "pos": "ST",
        "birth": "1994.05.28",
        "country": "나이지리아",
        "team": "사우샘프턴"
    },
    {
        "name": "윌 트랍",
        "originName": "윌 트랍",
        "pos": "CDM",
        "birth": "1993.01.15",
        "country": "미국",
        "team": "미네소타 유나이티드 FC"
    },
    {
        "name": "주제 사",
        "originName": "주제 페드루 말례이루 드 사",
        "pos": "GK",
        "birth": "1993.01.17",
        "country": "포르투갈",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "루이스 아드빙쿨라",
        "originName": "루이스 아드빙쿨라",
        "pos": "RB",
        "birth": "1990.03.02",
        "country": "페루",
        "team": "보카 주니어스"
    },
    {
        "name": "자시 자데스",
        "originName": "자시 자데스",
        "pos": "ST",
        "birth": "1991.09.02",
        "country": "미국",
        "team": "오스틴 FC"
    },
    {
        "name": "워커 지머만",
        "originName": "워커 지머만",
        "pos": "CB",
        "birth": "1993.05.19",
        "country": "미국",
        "team": "내슈빌 SC"
    },
    {
        "name": "디에고 발데스",
        "originName": "디에고 발데스",
        "pos": "CAM",
        "birth": "1994.01.30",
        "country": "칠레",
        "team": "아메리카"
    },
    {
        "name": "W. 트로스트-에콩",
        "originName": "윌리엄 트로스트-에콩",
        "pos": "CB",
        "birth": "1993.09.01",
        "country": "나이지리아",
        "team": "파오크 FC"
    },
    {
        "name": "에릭 풀가르",
        "originName": "에릭 풀가르",
        "pos": "CDM",
        "birth": "1994.01.15",
        "country": "칠레",
        "team": "플라멩구"
    },
    {
        "name": "에스테반 파베스",
        "originName": "에스테반 파베스",
        "pos": "CM",
        "birth": "1990.05.01",
        "country": "칠레",
        "team": "CD 비냐수르"
    },
    {
        "name": "파울로 디아스",
        "originName": "파울로 디아스",
        "pos": "RB",
        "birth": "1994.08.25",
        "country": "칠레",
        "team": "리버 플레이트"
    },
    {
        "name": "프랑코 아르마니",
        "originName": "프랑코 아르마니",
        "pos": "GK",
        "birth": "1986.10.16",
        "country": "아르헨티나",
        "team": "리버 플레이트"
    },
    {
        "name": "앙헬로 사갈",
        "originName": "앙헬로 사갈",
        "pos": "RW",
        "birth": "1993.04.18",
        "country": "칠레",
        "team": "아폴론 리마솔"
    },
    {
        "name": "밀톤 카스코",
        "originName": "밀톤 카스코",
        "pos": "RB",
        "birth": "1988.04.11",
        "country": "아르헨티나",
        "team": "리버 플레이트"
    },
    {
        "name": "오스카르 오파소",
        "originName": "오스카르 오파소",
        "pos": "RM",
        "birth": "1990.10.18",
        "country": "칠레",
        "team": "CD 비냐수르"
    },
    {
        "name": "후안 무소",
        "originName": "후안 무소",
        "pos": "GK",
        "birth": "1994.05.06",
        "country": "아르헨티나",
        "team": "베르가모 칼초"
    },
    {
        "name": "브라이언 코르테스",
        "originName": "브라이언 코르테스",
        "pos": "GK",
        "birth": "1995.05.29",
        "country": "칠레",
        "team": "CD 비냐수르"
    },
    {
        "name": "E. 페르난데스",
        "originName": "에디밀손 페르난데스",
        "pos": "CAM",
        "birth": "1996.04.15",
        "country": "스위스",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "렌소 사라비아",
        "originName": "렌소 사라비아",
        "pos": "RB",
        "birth": "1993.06.16",
        "country": "아르헨티나",
        "team": "보타포구"
    },
    {
        "name": "맷 미아즈가",
        "originName": "맷 미아즈가",
        "pos": "CB",
        "birth": "1995.07.19",
        "country": "미국",
        "team": "FC 신시내티"
    },
    {
        "name": "유수프 사발리",
        "originName": "유수프 사발리",
        "pos": "LB",
        "birth": "1993.03.05",
        "country": "프랑스",
        "team": "레알 베티스"
    },
    {
        "name": "레안드로 파레데스",
        "originName": "레안드로 파레데스",
        "pos": "CM",
        "birth": "1994.06.29",
        "country": "아르헨티나",
        "team": "로마 FC"
    },
    {
        "name": "안드레 블레이크",
        "originName": "안드레 블레이크",
        "pos": "GK",
        "birth": "1990.11.21",
        "country": "자메이카",
        "team": "필라델피아 유니언"
    },
    {
        "name": "마르턴 더론",
        "originName": "마르턴 더론",
        "pos": "CM",
        "birth": "1991.03.29",
        "country": "네덜란드",
        "team": "베르가모 칼초"
    },
    {
        "name": "아제딘 두카",
        "originName": "아제딘 두카",
        "pos": "GK",
        "birth": "1986.08.05",
        "country": "알제리",
        "team": "CR 벨루이즈다드"
    },
    {
        "name": "폴 아리올라",
        "originName": "폴 아리올라",
        "pos": "LM",
        "birth": "1995.02.05",
        "country": "미국",
        "team": "FC 댈러스"
    },
    {
        "name": "기예르모 마리판",
        "originName": "기예르모 마리판",
        "pos": "CB",
        "birth": "1994.05.06",
        "country": "칠레",
        "team": "AS 모나코"
    },
    {
        "name": "파루크 벤무스타파",
        "originName": "파루크 벤무스타파",
        "pos": "GK",
        "birth": "1989.07.01",
        "country": "튀니지",
        "team": "에스페랑스 튀니스"
    },
    {
        "name": "음바예 디아뉴",
        "originName": "음바예 디아뉴",
        "pos": "ST",
        "birth": "1991.10.28",
        "country": "세네갈",
        "team": "알카디시아"
    },
    {
        "name": "케마르 로런스",
        "originName": "케마르 로런스",
        "pos": "LB",
        "birth": "1992.09.17",
        "country": "자메이카",
        "team": "미네소타 유나이티드 FC"
    },
    {
        "name": "레나토 타피아",
        "originName": "레나토 타피아",
        "pos": "CDM",
        "birth": "1995.07.28",
        "country": "페루",
        "team": "셀타 비고"
    },
    {
        "name": "에릭 구티에레스",
        "originName": "에릭 구티에레스",
        "pos": "CM",
        "birth": "1995.06.15",
        "country": "멕시코",
        "team": "클루브 데포르티보 과달라하라"
    },
    {
        "name": "대니얼 로비츠",
        "originName": "대니얼 로비츠",
        "pos": "LB",
        "birth": "1991.08.27",
        "country": "미국",
        "team": "내슈빌 SC"
    },
    {
        "name": "가브리엘 아리아스",
        "originName": "가브리엘 아리아스",
        "pos": "GK",
        "birth": "1987.09.13",
        "country": "아르헨티나",
        "team": "라싱 클루브 아베야네다"
    },
    {
        "name": "에런 롱",
        "originName": "에런 롱",
        "pos": "CB",
        "birth": "1992.10.12",
        "country": "미국",
        "team": "LA FC"
    },
    {
        "name": "요나스 오믈린",
        "originName": "요나스 오믈린",
        "pos": "GK",
        "birth": "1994.01.10",
        "country": "스위스",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "안디 폴로",
        "originName": "안디 폴로",
        "pos": "RM",
        "birth": "1994.09.29",
        "country": "페루",
        "team": "우니베르시타리오 데 데포르테스 리마"
    },
    {
        "name": "디에구 소자",
        "originName": "디에구 윌베르송 페헤이라 소자",
        "pos": "ST",
        "birth": "1989.09.14",
        "country": "브라질",
        "team": "AD 알코르콘"
    },
    {
        "name": "오르벨린 피네다",
        "originName": "오르벨린 피네다",
        "pos": "CM",
        "birth": "1996.03.24",
        "country": "멕시코",
        "team": "AEK 아테네"
    },
    {
        "name": "페드로 가예세",
        "originName": "페드로 가예세",
        "pos": "GK",
        "birth": "1990.02.23",
        "country": "페루",
        "team": "올랜도 시티 SC"
    },
    {
        "name": "올라 에이나",
        "originName": "올라 에이나",
        "pos": "LB",
        "birth": "1996.10.08",
        "country": "나이지리아",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "미겔 아라우호",
        "originName": "미겔 아라우호",
        "pos": "CB",
        "birth": "1994.10.24",
        "country": "페루",
        "team": "포틀랜드 팀버스"
    },
    {
        "name": "조던 모리스",
        "originName": "조던 모리스",
        "pos": "RM",
        "birth": "1994.10.26",
        "country": "미국",
        "team": "시애틀 사운더스"
    },
    {
        "name": "헤수스 가야르도",
        "originName": "헤수스 가야르도",
        "pos": "LB",
        "birth": "1994.08.15",
        "country": "멕시코",
        "team": "CF 몬테레이"
    },
    {
        "name": "모하메드 파레스",
        "originName": "모하메드 파레스",
        "pos": "LB",
        "birth": "1996.02.15",
        "country": "프랑스",
        "team": "라티움"
    },
    {
        "name": "크리스천 롤던",
        "originName": "크리스천 롤던",
        "pos": "CM",
        "birth": "1995.06.03",
        "country": "미국",
        "team": "시애틀 사운더스"
    },
    {
        "name": "사다 티우브",
        "originName": "사다 티우브",
        "pos": "RW",
        "birth": "1995.06.01",
        "country": "프랑스",
        "team": "앙제 SCO"
    },
    {
        "name": "C. 곤살레스",
        "originName": "크리스토페르 곤살레스",
        "pos": "CM",
        "birth": "1992.10.12",
        "country": "페루",
        "team": "알아달라 클럽"
    },
    {
        "name": "자카리 헤리보",
        "originName": "자카리 헤리보",
        "pos": "CM",
        "birth": "1996.02.01",
        "country": "아이티",
        "team": "샌안토니오 FC"
    },
    {
        "name": "파페 아부 시세",
        "originName": "파페 아부 시세",
        "pos": "CB",
        "birth": "1995.09.14",
        "country": "세네갈",
        "team": "아다나 데미르스포르"
    },
    {
        "name": "C. 아르쿠스",
        "originName": "카를렌스 아르쿠스",
        "pos": "RB",
        "birth": "1996.06.28",
        "country": "아이티",
        "team": "비테서"
    },
    {
        "name": "조너선 루이스",
        "originName": "조너선 루이스",
        "pos": "LM",
        "birth": "1997.06.04",
        "country": "미국",
        "team": "콜로라도 래피즈"
    },
    {
        "name": "세사르 몬테스",
        "originName": "세사르 몬테스",
        "pos": "CB",
        "birth": "1997.02.24",
        "country": "멕시코",
        "team": "UD 알메리아"
    },
    {
        "name": "아담 우나스",
        "originName": "아담 우나스",
        "pos": "RW",
        "birth": "1996.11.11",
        "country": "알제리",
        "team": "LOSC 릴"
    },
    {
        "name": "예르코 우라",
        "originName": "예르코 우라",
        "pos": "GK",
        "birth": "1996.07.09",
        "country": "칠레",
        "team": "우아치파토 FC"
    },
    {
        "name": "타일러 밀러",
        "originName": "타일러 밀러",
        "pos": "GK",
        "birth": "1993.03.12",
        "country": "미국",
        "team": "D.C. 유나이티드"
    },
    {
        "name": "알렉시스 베가",
        "originName": "알렉시스 베가",
        "pos": "ST",
        "birth": "1997.11.25",
        "country": "멕시코",
        "team": "클루브 데포르티보 과달라하라"
    },
    {
        "name": "헨리 오니에쿠루",
        "originName": "헨리 오니에쿠루",
        "pos": "RM",
        "birth": "1997.06.05",
        "country": "나이지리아",
        "team": "알파이하"
    },
    {
        "name": "카를로스 카세다",
        "originName": "카를로스 카세다",
        "pos": "GK",
        "birth": "1991.09.27",
        "country": "페루",
        "team": "멜가르 FBC"
    },
    {
        "name": "루이스 아브람",
        "originName": "루이스 아브람",
        "pos": "CB",
        "birth": "1996.02.27",
        "country": "페루",
        "team": "애틀란타 유나이티드"
    },
    {
        "name": "오게네카로 에테보",
        "originName": "오게네카로 에테보",
        "pos": "CM",
        "birth": "1995.11.09",
        "country": "나이지리아",
        "team": "스토크 시티"
    },
    {
        "name": "잭 스테픈",
        "originName": "잭 스테픈",
        "pos": "GK",
        "birth": "1995.04.02",
        "country": "미국",
        "team": "맨체스터 시티"
    },
    {
        "name": "딜란 브론",
        "originName": "딜란 브론",
        "pos": "CB",
        "birth": "1995.06.19",
        "country": "튀니지",
        "team": "살레르니타나"
    },
    {
        "name": "C. 로드리게스",
        "originName": "카를로스 로드리게스",
        "pos": "RM",
        "birth": "1997.01.30",
        "country": "멕시코",
        "team": "크루스 아술"
    },
    {
        "name": "다비드 네리스",
        "originName": "다비드 네리스 캄푸스",
        "pos": "LM",
        "birth": "1997.03.03",
        "country": "브라질",
        "team": "SL 벤피카"
    },
    {
        "name": "닉 리마",
        "originName": "닉 리마",
        "pos": "RB",
        "birth": "1994.11.17",
        "country": "미국",
        "team": "오스틴 FC"
    },
    {
        "name": "로베르토 알바라도",
        "originName": "로베르토 알바라도",
        "pos": "LW",
        "birth": "1998.09.07",
        "country": "멕시코",
        "team": "클루브 데포르티보 과달라하라"
    },
    {
        "name": "레지 캐넌",
        "originName": "레지 캐넌",
        "pos": "RB",
        "birth": "1998.06.11",
        "country": "미국",
        "team": "퀸스파크 레인저스"
    },
    {
        "name": "조바니 로셀소",
        "originName": "조바니 로셀소",
        "pos": "LM",
        "birth": "1996.04.09",
        "country": "아르헨티나",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "데버 오어길",
        "originName": "데버 오어길",
        "pos": "RM",
        "birth": "1990.03.08",
        "country": "자메이카",
        "team": "마니사스포르"
    },
    {
        "name": "새뮤얼 칼루",
        "originName": "새뮤얼 칼루",
        "pos": "RM",
        "birth": "1997.08.26",
        "country": "나이지리아",
        "team": "왓퍼드"
    },
    {
        "name": "바셈 스라르피",
        "originName": "바셈 스라르피",
        "pos": "RW",
        "birth": "1997.06.25",
        "country": "튀니지",
        "team": "SV 쥘터 바레험"
    },
    {
        "name": "우리엘 안투나",
        "originName": "우리엘 안투나",
        "pos": "RM",
        "birth": "1997.08.21",
        "country": "멕시코",
        "team": "크루스 아술"
    },
    {
        "name": "크레팡 디아타",
        "originName": "크레팡 디아타",
        "pos": "RW",
        "birth": "1999.02.25",
        "country": "세네갈",
        "team": "AS 모나코"
    },
    {
        "name": "야신 메리아",
        "originName": "야신 메리아",
        "pos": "CB",
        "birth": "1993.07.02",
        "country": "튀니지",
        "team": "에스페랑스 튀니스"
    },
    {
        "name": "자밀루 콜린스",
        "originName": "자밀루 콜린스",
        "pos": "LB",
        "birth": "1994.08.05",
        "country": "나이지리아",
        "team": "카디프 시티"
    },
    {
        "name": "대니얼 악페이",
        "originName": "대니얼 악페이",
        "pos": "GK",
        "birth": "1986.08.03",
        "country": "나이지리아",
        "team": "카이저 치프스"
    },
    {
        "name": "프란츠디 피에로",
        "originName": "프란츠디 피에로",
        "pos": "ST",
        "birth": "1995.03.29",
        "country": "아이티",
        "team": "마카비 하이파"
    },
    {
        "name": "피터-리 바셀",
        "originName": "피터-리 바셀",
        "pos": "CAM",
        "birth": "1999.03.15",
        "country": "자메이카",
        "team": "LA FC"
    },
    {
        "name": "새뮤얼 추쿠에제",
        "originName": "새뮤얼 추쿠에제",
        "pos": "RM",
        "birth": "1999.05.22",
        "country": "나이지리아",
        "team": "AC 밀란"
    },
    {
        "name": "랄프 페어만",
        "originName": "랄프 페어만",
        "pos": "GK",
        "birth": "1988.09.27",
        "country": "독일",
        "team": "FC 샬케 04"
    },
    {
        "name": "살로몬 론돈",
        "originName": "살로몬 론돈",
        "pos": "ST",
        "birth": "1989.09.16",
        "country": "베네수엘라",
        "team": "리버 플레이트"
    },
    {
        "name": "레오나르두",
        "originName": "레오나르두 호드리기스 페레이라",
        "pos": "LM",
        "birth": "1986.09.22",
        "country": "브라질",
        "team": "산둥 타이산"
    },
    {
        "name": "김승규",
        "originName": "김승규",
        "pos": "GK",
        "birth": "1990.09.30",
        "country": "대한민국",
        "team": "알샤밥"
    },
    {
        "name": "테리 안토니스",
        "originName": "테리 안토니스",
        "pos": "CM",
        "birth": "1993.11.26",
        "country": "호주",
        "team": "멜버른 시티"
    },
    {
        "name": "김호남",
        "originName": "김호남",
        "pos": "RM",
        "birth": "1989.06.14",
        "country": "대한민국",
        "team": "부천 FC 1995"
    },
    {
        "name": "제 루이스",
        "originName": "주제 루이스 멘데스 안드라드",
        "pos": "ST",
        "birth": "1991.01.24",
        "country": "케이프베르디 제도",
        "team": "SC 파렌스"
    },
    {
        "name": "우로시 제리치",
        "originName": "우로시 제리치",
        "pos": "ST",
        "birth": "1992.05.28",
        "country": "세르비아",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "포르투",
        "originName": "크리스티안 포르투게스 만사네라",
        "pos": "CF",
        "birth": "1992.05.21",
        "country": "스페인",
        "team": "지로나 FC"
    },
    {
        "name": "레안드로 트로사르",
        "originName": "레안드로 트로사르",
        "pos": "LW",
        "birth": "1994.12.04",
        "country": "벨기에",
        "team": "아스널"
    },
    {
        "name": "페이난둬",
        "originName": "페이난둬",
        "pos": "CAM",
        "birth": "1993.03.16",
        "country": "브라질",
        "team": "산둥 타이산"
    },
    {
        "name": "루벤 페냐",
        "originName": "루벤 페냐 히메네스",
        "pos": "RB",
        "birth": "1991.07.18",
        "country": "스페인",
        "team": "오사수나"
    },
    {
        "name": "루카스 파케타",
        "originName": "루카스 톨렌치누 코엘류 지 리마",
        "pos": "CAM",
        "birth": "1997.08.27",
        "country": "브라질",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "다리오 베네데토",
        "originName": "다리오 베네데토",
        "pos": "ST",
        "birth": "1990.05.17",
        "country": "아르헨티나",
        "team": "보카 주니어스"
    },
    {
        "name": "김도혁",
        "originName": "김도혁",
        "pos": "CM",
        "birth": "1992.02.08",
        "country": "대한민국",
        "team": "인천 유나이티드"
    },
    {
        "name": "다니 세바요스",
        "originName": "다니엘 세바요스 페르난데스",
        "pos": "CM",
        "birth": "1996.08.07",
        "country": "스페인",
        "team": "레알 마드리드"
    },
    {
        "name": "조엘린통",
        "originName": "조엘린통 아폴리나리우 지 리라",
        "pos": "CM",
        "birth": "1996.08.14",
        "country": "브라질",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "요아힘 아네르센",
        "originName": "요아힘 아네르센",
        "pos": "CB",
        "birth": "1996.05.31",
        "country": "덴마크",
        "team": "크리스털 팰리스"
    },
    {
        "name": "파블로 포르날스",
        "originName": "파블로 포르날스 마야",
        "pos": "CAM",
        "birth": "1996.02.22",
        "country": "스페인",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "마티아스 바르가스",
        "originName": "마티아스 바르가스",
        "pos": "LW",
        "birth": "1997.05.08",
        "country": "아르헨티나",
        "team": "상하이 하이강"
    },
    {
        "name": "유수프 야즈즈",
        "originName": "유수프 야즈즈",
        "pos": "CAM",
        "birth": "1997.01.29",
        "country": "튀르키예",
        "team": "LOSC 릴"
    },
    {
        "name": "데이비드 브룩스",
        "originName": "데이비드 브룩스",
        "pos": "RM",
        "birth": "1997.07.08",
        "country": "웨일스",
        "team": "AFC 본머스"
    },
    {
        "name": "야바이로 딜로순",
        "originName": "야바이로 딜로순",
        "pos": "LM",
        "birth": "1998.06.22",
        "country": "네덜란드",
        "team": "페예노르트"
    },
    {
        "name": "롤란도 만드라고라",
        "originName": "롤란도 만드라고라",
        "pos": "CM",
        "birth": "1997.06.29",
        "country": "이탈리아",
        "team": "피오렌티나"
    },
    {
        "name": "알랭 생막시맹",
        "originName": "알랭 생막시맹",
        "pos": "RW",
        "birth": "1997.03.12",
        "country": "프랑스",
        "team": "알아흘리"
    },
    {
        "name": "키어런 티어니",
        "originName": "키어런 티어니",
        "pos": "LB",
        "birth": "1997.06.05",
        "country": "스코틀랜드",
        "team": "아스널"
    },
    {
        "name": "에밀 아우데로",
        "originName": "에밀 아우데로",
        "pos": "GK",
        "birth": "1997.01.18",
        "country": "이탈리아",
        "team": "삼프도리아"
    },
    {
        "name": "아데몰라 루크먼",
        "originName": "아데몰라 루크먼",
        "pos": "RM",
        "birth": "1997.10.20",
        "country": "잉글랜드",
        "team": "베르가모 칼초"
    },
    {
        "name": "리스 넬슨",
        "originName": "리스 넬슨",
        "pos": "RW",
        "birth": "1999.12.10",
        "country": "잉글랜드",
        "team": "아스널"
    },
    {
        "name": "악셀 투안제베",
        "originName": "악셀 투안제베",
        "pos": "CB",
        "birth": "1997.11.14",
        "country": "잉글랜드",
        "team": "입스위치 타운"
    },
    {
        "name": "도미야스 다케히로",
        "originName": "도미야스 다케히로",
        "pos": "CB",
        "birth": "1998.11.05",
        "country": "일본",
        "team": "아스널"
    },
    {
        "name": "타일러 애덤스",
        "originName": "타일러 애덤스",
        "pos": "CDM",
        "birth": "1999.02.14",
        "country": "미국",
        "team": "AFC 본머스"
    },
    {
        "name": "R. 오르솔리니",
        "originName": "리카르도 오르솔리니",
        "pos": "CAM",
        "birth": "1997.01.24",
        "country": "이탈리아",
        "team": "볼로냐"
    },
    {
        "name": "곤살로 마로니",
        "originName": "곤살로 마로니",
        "pos": "CAM",
        "birth": "1999.03.18",
        "country": "아르헨티나",
        "team": "보카 주니어스"
    },
    {
        "name": "하비 반스",
        "originName": "하비 반스",
        "pos": "LW",
        "birth": "1997.12.09",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "파나요티스 레초스",
        "originName": "파나요티스 레초스",
        "pos": "CB",
        "birth": "1998.08.09",
        "country": "그리스",
        "team": "올림피아코스 CFP"
    },
    {
        "name": "크리스티앙 쿠아메",
        "originName": "크리스티앙 쿠아메",
        "pos": "ST",
        "birth": "1997.12.06",
        "country": "코트디부아르",
        "team": "피오렌티나"
    },
    {
        "name": "브라이스 멘데스",
        "originName": "브라이스 멘데스 포르텔라",
        "pos": "RM",
        "birth": "1997.01.07",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "이브라힘 상가레",
        "originName": "이브라힘 상가레",
        "pos": "CDM",
        "birth": "1997.12.02",
        "country": "코트디부아르",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "루이스 펠리피",
        "originName": "루이스 펠리피 하무스 마르시",
        "pos": "CB",
        "birth": "1997.03.22",
        "country": "브라질",
        "team": "알이티하드"
    },
    {
        "name": "캘빈 스텡스",
        "originName": "캘빈 스텡스",
        "pos": "RW",
        "birth": "1998.12.18",
        "country": "네덜란드",
        "team": "페예노르트"
    },
    {
        "name": "A. 클로드-모리스",
        "originName": "알렉시 클로드-모리스",
        "pos": "LM",
        "birth": "1998.06.06",
        "country": "프랑스",
        "team": "OGC 니스"
    },
    {
        "name": "하네스 볼프",
        "originName": "하네스 볼프",
        "pos": "CAM",
        "birth": "1999.04.16",
        "country": "오스트리아",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "디에고 라이네스",
        "originName": "디에고 라이네스",
        "pos": "RM",
        "birth": "2000.06.09",
        "country": "멕시코",
        "team": "티그레스 데라 UANL"
    },
    {
        "name": "정우영",
        "originName": "정우영",
        "pos": "RM",
        "birth": "1999.09.20",
        "country": "대한민국",
        "team": "VfB 슈투트가르트"
    },
    {
        "name": "부바카리 수마레",
        "originName": "부바카리 수마레",
        "pos": "CM",
        "birth": "1999.02.27",
        "country": "프랑스",
        "team": "레스터 시티"
    },
    {
        "name": "오잔 카바크",
        "originName": "오잔 카바크",
        "pos": "CB",
        "birth": "2000.03.25",
        "country": "튀르키예",
        "team": "TSG 호펜하임"
    },
    {
        "name": "맥스 에런스",
        "originName": "맥스 에런스",
        "pos": "RB",
        "birth": "2000.01.04",
        "country": "잉글랜드",
        "team": "AFC 본머스"
    },
    {
        "name": "탕기 은돔벨레",
        "originName": "탕기 은돔벨레",
        "pos": "CM",
        "birth": "1996.12.28",
        "country": "프랑스",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "마테우스 쿠냐",
        "originName": "마테우스 산투스 카르네이루 다 쿠냐",
        "pos": "ST",
        "birth": "1999.05.27",
        "country": "브라질",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "황희찬",
        "originName": "황희찬",
        "pos": "ST",
        "birth": "1996.01.26",
        "country": "대한민국",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "페후",
        "originName": "프란시스쿠 헤이스 페헤이라",
        "pos": "CB",
        "birth": "1997.03.26",
        "country": "포르투갈",
        "team": "하이두크 스플리트"
    },
    {
        "name": "윌리암 살리바",
        "originName": "윌리암 살리바",
        "pos": "CB",
        "birth": "2001.03.24",
        "country": "프랑스",
        "team": "아스널"
    },
    {
        "name": "리키 푸치",
        "originName": "리카르드 푸치 마르티",
        "pos": "CM",
        "birth": "1999.08.13",
        "country": "스페인",
        "team": "LA 갤럭시"
    },
    {
        "name": "필리프 벤코비치",
        "originName": "필리프 벤코비치",
        "pos": "CB",
        "birth": "1997.07.13",
        "country": "크로아티아",
        "team": "우디네세"
    },
    {
        "name": "장-클레르 토디보",
        "originName": "장-클레르 토디보",
        "pos": "CB",
        "birth": "1999.12.30",
        "country": "프랑스",
        "team": "OGC 니스"
    },
    {
        "name": "레길론",
        "originName": "세르히오 레길론 로드리게스",
        "pos": "LB",
        "birth": "1996.12.16",
        "country": "스페인",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "야리 베르스하런",
        "originName": "야리 베르스하런",
        "pos": "CAM",
        "birth": "2001.07.12",
        "country": "벨기에",
        "team": "RSC 안데를레흐트"
    },
    {
        "name": "테테",
        "originName": "마테우스 테테",
        "pos": "LM",
        "birth": "2000.02.15",
        "country": "브라질",
        "team": "갈라타사라이"
    },
    {
        "name": "앤드류 로너건",
        "originName": "앤드류 로너건",
        "pos": "GK",
        "birth": "1983.10.19",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "스콧 카슨",
        "originName": "스콧 카슨",
        "pos": "GK",
        "birth": "1985.09.03",
        "country": "잉글랜드",
        "team": "맨체스터 시티"
    },
    {
        "name": "다니엘 바스",
        "originName": "다니엘 바스",
        "pos": "RB",
        "birth": "1989.05.31",
        "country": "덴마크",
        "team": "브뢴뷔 IF"
    },
    {
        "name": "O. 카르네지스",
        "originName": "오레스티스 카르네지스",
        "pos": "GK",
        "birth": "1985.07.11",
        "country": "그리스",
        "team": "LOSC 릴"
    },
    {
        "name": "아단",
        "originName": "안토니오 아단 가리도",
        "pos": "GK",
        "birth": "1987.05.13",
        "country": "스페인",
        "team": "스포르팅 CP"
    },
    {
        "name": "하파엘 톨로이",
        "originName": "하파엘 톨로이",
        "pos": "CB",
        "birth": "1990.10.10",
        "country": "브라질",
        "team": "베르가모 칼초"
    },
    {
        "name": "마르빈 히츠",
        "originName": "마르빈 히츠",
        "pos": "GK",
        "birth": "1987.09.18",
        "country": "스위스",
        "team": "FC 바젤 1893"
    },
    {
        "name": "카를로 핀솔리오",
        "originName": "카를로 핀솔리오",
        "pos": "GK",
        "birth": "1990.03.16",
        "country": "이탈리아",
        "team": "유벤투스"
    },
    {
        "name": "자우메 코스타",
        "originName": "자우메 빈센트 코스타 조르다",
        "pos": "LB",
        "birth": "1988.03.18",
        "country": "스페인",
        "team": "RCD 마요르카"
    },
    {
        "name": "F. 로시",
        "originName": "프란체스코 로시",
        "pos": "GK",
        "birth": "1991.04.27",
        "country": "이탈리아",
        "team": "베르가모 칼초"
    },
    {
        "name": "네투",
        "originName": "노르베르투 무라라 네투",
        "pos": "GK",
        "birth": "1989.07.19",
        "country": "브라질",
        "team": "AFC 본머스"
    },
    {
        "name": "아드리안",
        "originName": "아드리안 산 미겔 카스티요",
        "pos": "GK",
        "birth": "1987.01.03",
        "country": "스페인",
        "team": "리버풀"
    },
    {
        "name": "케빈 말키",
        "originName": "케빈 말키",
        "pos": "RB",
        "birth": "1991.07.31",
        "country": "프랑스",
        "team": "MKE 앙카라귀쥐"
    },
    {
        "name": "C. 터터루샤누",
        "originName": "치프리안 터터루샤누",
        "pos": "GK",
        "birth": "1986.02.09",
        "country": "루마니아",
        "team": "아브하 클럽"
    },
    {
        "name": "산티아고 아리아스",
        "originName": "산티아고 아리아스",
        "pos": "RB",
        "birth": "1992.01.13",
        "country": "콜롬비아",
        "team": "FC 신시내티"
    },
    {
        "name": "파울로 가사니가",
        "originName": "파울로 가사니가",
        "pos": "GK",
        "birth": "1992.01.02",
        "country": "아르헨티나",
        "team": "지로나 FC"
    },
    {
        "name": "아민 유네스",
        "originName": "아민 유네스",
        "pos": "LM",
        "birth": "1993.08.06",
        "country": "독일",
        "team": "에티파크 FC"
    },
    {
        "name": "이강인",
        "originName": "이강인",
        "pos": "CAM",
        "birth": "2001.02.19",
        "country": "대한민국",
        "team": "파리 생제르맹"
    },
    {
        "name": "데니스 체리셰프",
        "originName": "데니스 체리셰프",
        "pos": "LM",
        "birth": "1990.12.26",
        "country": "러시아",
        "team": "베네치아"
    },
    {
        "name": "루벤 소브리노",
        "originName": "루벤 소브리노 포수엘로",
        "pos": "ST",
        "birth": "1992.06.01",
        "country": "스페인",
        "team": "카디스 CF"
    },
    {
        "name": "베르트랑 트라오레",
        "originName": "베르트랑 트라오레",
        "pos": "RW",
        "birth": "1995.09.06",
        "country": "부르키나파소",
        "team": "애스턴 빌라"
    },
    {
        "name": "마르살",
        "originName": "페르난두 마르살 지 올리베이라",
        "pos": "LB",
        "birth": "1989.02.19",
        "country": "브라질",
        "team": "보타포구"
    },
    {
        "name": "엘세이드 휘사이",
        "originName": "엘세이드 휘사이",
        "pos": "RB",
        "birth": "1994.02.02",
        "country": "알바니아",
        "team": "라티움"
    },
    {
        "name": "아드리앵 타메제",
        "originName": "아드리앵 타메제",
        "pos": "CM",
        "birth": "1994.02.04",
        "country": "프랑스",
        "team": "토리노"
    },
    {
        "name": "P. 골리니",
        "originName": "피에르루이지 골리니",
        "pos": "GK",
        "birth": "1995.03.18",
        "country": "이탈리아",
        "team": "베르가모 칼초"
    },
    {
        "name": "니콜라 막시모비치",
        "originName": "니콜라 막시모비치",
        "pos": "CB",
        "birth": "1991.11.25",
        "country": "세르비아",
        "team": "하타이스포르"
    },
    {
        "name": "막스웰 코르네",
        "originName": "막스웰 코르네",
        "pos": "RW",
        "birth": "1996.09.27",
        "country": "코트디부아르",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "M. 스포르티엘로",
        "originName": "마르코 스포르티엘로",
        "pos": "GK",
        "birth": "1992.05.10",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "케니 테테",
        "originName": "케니 테테",
        "pos": "RB",
        "birth": "1995.10.09",
        "country": "네덜란드",
        "team": "풀럼"
    },
    {
        "name": "다비드 오스피나",
        "originName": "다비드 오스피나",
        "pos": "GK",
        "birth": "1988.08.31",
        "country": "콜롬비아",
        "team": "알나스르"
    },
    {
        "name": "레오 뒤부아",
        "originName": "레오 뒤부아",
        "pos": "RB",
        "birth": "1994.09.14",
        "country": "프랑스",
        "team": "갈라타사라이"
    },
    {
        "name": "J. 팔로미노",
        "originName": "호세 루이스 팔로미노",
        "pos": "CB",
        "birth": "1990.01.05",
        "country": "아르헨티나",
        "team": "베르가모 칼초"
    },
    {
        "name": "S. 루페르토",
        "originName": "세바스티아노 루페르토",
        "pos": "CB",
        "birth": "1996.09.06",
        "country": "이탈리아",
        "team": "엠폴리"
    },
    {
        "name": "자우메",
        "originName": "자우메 도메네크 산체스",
        "pos": "GK",
        "birth": "1990.11.05",
        "country": "스페인",
        "team": "발렌시아 CF"
    },
    {
        "name": "티모시 카스타뉴",
        "originName": "티모시 카스타뉴",
        "pos": "LM",
        "birth": "1995.12.05",
        "country": "벨기에",
        "team": "풀럼"
    },
    {
        "name": "유수프 코네",
        "originName": "유수프 코네",
        "pos": "LB",
        "birth": "1995.07.05",
        "country": "말리",
        "team": "RWD 몰렌베이크"
    },
    {
        "name": "마리아노",
        "originName": "마리아노 디아스 메히아",
        "pos": "ST",
        "birth": "1993.08.01",
        "country": "도미니카 공화국",
        "team": "세비야 FC"
    },
    {
        "name": "해리 윙크스",
        "originName": "해리 윙크스",
        "pos": "CM",
        "birth": "1996.02.02",
        "country": "잉글랜드",
        "team": "레스터 시티"
    },
    {
        "name": "K. 토코 에캄비",
        "originName": "카를 토코 에캄비",
        "pos": "ST",
        "birth": "1992.09.14",
        "country": "카메룬",
        "team": "아브하 클럽"
    },
    {
        "name": "뤼카 투사르",
        "originName": "뤼카 투사르",
        "pos": "CDM",
        "birth": "1997.04.29",
        "country": "프랑스",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "무크타르 디아카비",
        "originName": "무크타르 디아카비",
        "pos": "CB",
        "birth": "1996.12.19",
        "country": "프랑스",
        "team": "발렌시아 CF"
    },
    {
        "name": "J. 렌-아델라이드",
        "originName": "제프 렌-아델라이드",
        "pos": "CM",
        "birth": "1998.01.17",
        "country": "프랑스",
        "team": "RWD 몰렌베이크"
    },
    {
        "name": "에릭 욀슈레겔",
        "originName": "에릭 욀슈레겔",
        "pos": "GK",
        "birth": "1995.09.20",
        "country": "독일",
        "team": "FC 에먼"
    },
    {
        "name": "이반 샤포니치",
        "originName": "이반 샤포니치",
        "pos": "ST",
        "birth": "1997.08.02",
        "country": "세르비아",
        "team": "슬로반 브라티슬라바"
    },
    {
        "name": "앨피 화이트먼",
        "originName": "앨피 화이트먼",
        "pos": "GK",
        "birth": "1998.10.02",
        "country": "잉글랜드",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "이선 암파두",
        "originName": "이선 암파두",
        "pos": "CB",
        "birth": "2000.09.14",
        "country": "웨일스",
        "team": "리즈 유나이티드"
    },
    {
        "name": "제이미 커밍",
        "originName": "제이미 커밍",
        "pos": "GK",
        "birth": "1999.09.04",
        "country": "잉글랜드",
        "team": "첼시"
    },
    {
        "name": "메리 데미랄",
        "originName": "메리 데미랄",
        "pos": "CB",
        "birth": "1998.03.05",
        "country": "튀르키예",
        "team": "알아흘리"
    },
    {
        "name": "단악셀 자가두",
        "originName": "단악셀 자가두",
        "pos": "CB",
        "birth": "1999.06.03",
        "country": "프랑스",
        "team": "VfB 슈투트가르트"
    },
    {
        "name": "미카엘 퀴상스",
        "originName": "미카엘 퀴상스",
        "pos": "CM",
        "birth": "1999.08.16",
        "country": "프랑스",
        "team": "베네치아"
    },
    {
        "name": "얀-피테 아르프",
        "originName": "얀-피테 아르프",
        "pos": "ST",
        "birth": "2000.01.06",
        "country": "독일",
        "team": "홀슈타인 킬"
    },
    {
        "name": "올리버 스킵",
        "originName": "올리버 스킵",
        "pos": "CDM",
        "birth": "2000.09.16",
        "country": "잉글랜드",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "크리스티안 리베로",
        "originName": "크리스티안 리베로 사바테르",
        "pos": "GK",
        "birth": "1998.03.21",
        "country": "스페인",
        "team": "발렌시아 CF"
    },
    {
        "name": "주니어 피르포",
        "originName": "엑토르 주니어 피르포 아다메스",
        "pos": "LB",
        "birth": "1996.08.22",
        "country": "스페인",
        "team": "리즈 유나이티드"
    },
    {
        "name": "콜랑 다그바",
        "originName": "콜랑 다그바",
        "pos": "RB",
        "birth": "1998.09.09",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "마누 바예호",
        "originName": "마누엘 바예호 갈반",
        "pos": "ST",
        "birth": "1997.02.14",
        "country": "스페인",
        "team": "지로나 FC"
    },
    {
        "name": "R. 호프만",
        "originName": "론-토르벤 호프만",
        "pos": "GK",
        "birth": "1999.04.04",
        "country": "독일",
        "team": "아인트라흐트 브라운슈바이크"
    },
    {
        "name": "우마르 솔레",
        "originName": "우마르 솔레",
        "pos": "CB",
        "birth": "2000.02.07",
        "country": "프랑스",
        "team": "레드불 잘츠부르크"
    },
    {
        "name": "S. 반덴베르흐",
        "originName": "세프 반덴베르흐",
        "pos": "CB",
        "birth": "2001.12.20",
        "country": "네덜란드",
        "team": "리버풀"
    },
    {
        "name": "알렉스 콜랴도",
        "originName": "알렉스 콜랴도 구티에레스",
        "pos": "CM",
        "birth": "1999.04.22",
        "country": "스페인",
        "team": "레알 베티스"
    },
    {
        "name": "L. 발레르디",
        "originName": "레오나르도 발레르디",
        "pos": "CB",
        "birth": "1999.01.26",
        "country": "아르헨티나",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "안토니 라초피",
        "originName": "안토니 라초피",
        "pos": "GK",
        "birth": "1998.12.31",
        "country": "스위스",
        "team": "BSC 영보이스"
    },
    {
        "name": "파스쿠",
        "originName": "호세 파스콸 알바 세바",
        "pos": "CM",
        "birth": "2000.04.02",
        "country": "스페인",
        "team": "알메러 시티 FC"
    },
    {
        "name": "기욤 오아로",
        "originName": "기욤 오아로",
        "pos": "ST",
        "birth": "1984.03.05",
        "country": "프랑스",
        "team": "FC 시옹"
    },
    {
        "name": "F. 벨루치",
        "originName": "페르난도 벨루치",
        "pos": "CM",
        "birth": "1983.09.10",
        "country": "아르헨티나",
        "team": "에스투디안테스 데 리오 꾸아르또"
    },
    {
        "name": "D. 츠비타니치",
        "originName": "다리오 츠비타니치",
        "pos": "ST",
        "birth": "1984.05.16",
        "country": "아르헨티나",
        "team": "CA 반피엘드"
    },
    {
        "name": "R. 린드그렌",
        "originName": "라스무스 린드그렌",
        "pos": "CDM",
        "birth": "1984.11.29",
        "country": "스웨덴",
        "team": "BK 헤켄"
    },
    {
        "name": "폰투스 베른블롬",
        "originName": "폰투스 베른블롬",
        "pos": "CDM",
        "birth": "1986.06.25",
        "country": "스웨덴",
        "team": "IFK 예테보리"
    },
    {
        "name": "브래드 존스",
        "originName": "브래드 존스",
        "pos": "GK",
        "birth": "1982.03.19",
        "country": "호주",
        "team": "퍼스 글로리"
    },
    {
        "name": "엘리에로 엘리아",
        "originName": "엘리에로 엘리아",
        "pos": "LW",
        "birth": "1987.02.13",
        "country": "네덜란드",
        "team": "FC 위트레흐트"
    },
    {
        "name": "비에이리냐",
        "originName": "아델리누 안드레 비에이라 드 프레이타스",
        "pos": "LB",
        "birth": "1986.01.24",
        "country": "포르투갈",
        "team": "파오크 FC"
    },
    {
        "name": "L. 바리오스",
        "originName": "루카스 바리오스",
        "pos": "ST",
        "birth": "1984.11.13",
        "country": "파라과이",
        "team": "파트로나토"
    },
    {
        "name": "미랄렘 술레이마니",
        "originName": "미랄렘 술레이마니",
        "pos": "RW",
        "birth": "1988.12.05",
        "country": "세르비아",
        "team": "BSC 영보이스"
    },
    {
        "name": "P. 오스발도",
        "originName": "파블로 다니엘 오스발도",
        "pos": "ST",
        "birth": "1986.01.12",
        "country": "이탈리아",
        "team": "CA 반피엘드"
    },
    {
        "name": "M. 카르셀라-곤살레스",
        "originName": "메흐디 카르셀라-곤살레스",
        "pos": "LW",
        "birth": "1989.07.01",
        "country": "모로코",
        "team": "스탕다르 리에주"
    },
    {
        "name": "심 더용",
        "originName": "심 더용",
        "pos": "ST",
        "birth": "1989.01.28",
        "country": "네덜란드",
        "team": "더 흐라프스합"
    },
    {
        "name": "알랑 카르데크",
        "originName": "알랑 카르데크 지 소자 페레이라 Jr",
        "pos": "ST",
        "birth": "1989.01.12",
        "country": "브라질",
        "team": "선전 FC"
    },
    {
        "name": "버나드 파커",
        "originName": "버나드 파커",
        "pos": "CF",
        "birth": "1986.03.16",
        "country": "남아프리카공화국",
        "team": "TS 갤럭시 FC"
    },
    {
        "name": "대니 회센",
        "originName": "대니 회센",
        "pos": "ST",
        "birth": "1991.01.15",
        "country": "네덜란드",
        "team": "FC 에먼"
    },
    {
        "name": "니콜라이 예르겐센",
        "originName": "니콜라이 예르겐센",
        "pos": "ST",
        "birth": "1991.01.15",
        "country": "덴마크",
        "team": "FC 코펜하겐"
    },
    {
        "name": "마이콩",
        "originName": "마이콩 페레이라 호케",
        "pos": "CB",
        "birth": "1988.09.14",
        "country": "브라질",
        "team": "알나스르"
    },
    {
        "name": "잭슨 마르티네스",
        "originName": "잭슨 마르티네스",
        "pos": "ST",
        "birth": "1986.10.03",
        "country": "콜롬비아",
        "team": "포르티모넨스 SC"
    },
    {
        "name": "세르지우 올리베이라",
        "originName": "세르지우 미겔 헬바스 드 올리베이라",
        "pos": "CM",
        "birth": "1992.06.02",
        "country": "포르투갈",
        "team": "갈라타사라이"
    },
    {
        "name": "N. 보일레센",
        "originName": "니콜라이 보일레센",
        "pos": "LB",
        "birth": "1992.02.16",
        "country": "덴마크",
        "team": "FC 코펜하겐"
    },
    {
        "name": "A. 사마리스",
        "originName": "안드레아스 사마리스",
        "pos": "CDM",
        "birth": "1989.06.13",
        "country": "그리스",
        "team": "쿠리치바"
    },
    {
        "name": "S. 덴스빌",
        "originName": "스테파노 덴스빌",
        "pos": "CB",
        "birth": "1993.05.07",
        "country": "네덜란드",
        "team": "트라브존스포르"
    },
    {
        "name": "에르나니",
        "originName": "에르나니 조르즈 산투스 포르트스",
        "pos": "RW",
        "birth": "1991.08.20",
        "country": "포르투갈",
        "team": "히우 아브 FC"
    },
    {
        "name": "L. 로페스",
        "originName": "리산드로 로페스",
        "pos": "CB",
        "birth": "1989.09.01",
        "country": "아르헨티나",
        "team": "알 칼리즈"
    },
    {
        "name": "안데르송 탈리스카",
        "originName": "안데르송 소자 콘세이상",
        "pos": "CF",
        "birth": "1994.02.01",
        "country": "브라질",
        "team": "알나스르"
    },
    {
        "name": "마테우스 우리베",
        "originName": "마테우스 우리베",
        "pos": "CDM",
        "birth": "1991.03.21",
        "country": "콜롬비아",
        "team": "알사드"
    },
    {
        "name": "E. 팔라시오스",
        "originName": "엑세키엘 팔라시오스",
        "pos": "CM",
        "birth": "1998.10.05",
        "country": "아르헨티나",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "곤살루 파시엔시아",
        "originName": "곤살루 멘드스 파시엔시아",
        "pos": "ST",
        "birth": "1994.08.01",
        "country": "포르투갈",
        "team": "셀타 비고"
    },
    {
        "name": "A. 메이틀랜드-나일스",
        "originName": "에인슬리 메이틀랜드-나일스",
        "pos": "RWB",
        "birth": "1997.08.29",
        "country": "잉글랜드",
        "team": "올랭피크 리옹"
    },
    {
        "name": "대니얼 제임스",
        "originName": "대니얼 제임스",
        "pos": "RM",
        "birth": "1997.11.10",
        "country": "웨일스",
        "team": "리즈 유나이티드"
    },
    {
        "name": "마테오 겐두지",
        "originName": "마테오 겐두지",
        "pos": "CDM",
        "birth": "1999.04.14",
        "country": "프랑스",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "M. 에드워즈",
        "originName": "마커스 에드워즈",
        "pos": "RM",
        "birth": "1998.12.03",
        "country": "잉글랜드",
        "team": "스포르팅 CP"
    },
    {
        "name": "페드루 네투",
        "originName": "페드루 롬바 네투",
        "pos": "LW",
        "birth": "2000.03.09",
        "country": "포르투갈",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "웬델",
        "originName": "마르쿠스 웬델 발리 다 시우바",
        "pos": "CM",
        "birth": "1997.08.28",
        "country": "브라질",
        "team": "제니트"
    },
    {
        "name": "제이펏 탕강가",
        "originName": "제이펏 탕강가",
        "pos": "CB",
        "birth": "1999.03.31",
        "country": "잉글랜드",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "P. 에스투피냔",
        "originName": "페르비스 에스투피냔",
        "pos": "LB",
        "birth": "1998.01.21",
        "country": "에콰도르",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "E. 살세도",
        "originName": "에디 살세도",
        "pos": "CF",
        "birth": "2001.10.01",
        "country": "이탈리아",
        "team": "인테르"
    },
    {
        "name": "H. 트라오레",
        "originName": "하메드 트라오레",
        "pos": "CAM",
        "birth": "2000.02.16",
        "country": "코트디부아르",
        "team": "AFC 본머스"
    },
    {
        "name": "R. 아이트-누리",
        "originName": "라얀 아이트-누리",
        "pos": "LB",
        "birth": "2001.06.06",
        "country": "프랑스",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "M. 반데보르트",
        "originName": "마르턴 반데보르트",
        "pos": "GK",
        "birth": "2002.02.26",
        "country": "벨기에",
        "team": "KRC 겡크"
    },
    {
        "name": "알렉스 센테예스",
        "originName": "알레한드로 센테예스 플라사",
        "pos": "LB",
        "birth": "1999.08.30",
        "country": "스페인",
        "team": "UD 알메리아"
    },
    {
        "name": "B. 음뵈모",
        "originName": "브라이언 음뵈모",
        "pos": "RW",
        "birth": "1999.08.07",
        "country": "프랑스",
        "team": "브렌트퍼드"
    },
    {
        "name": "드와이트 맥닐",
        "originName": "드와이트 맥닐",
        "pos": "LM",
        "birth": "1999.11.22",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "오르쿤 쾨크취",
        "originName": "오르쿤 쾨크취",
        "pos": "CAM",
        "birth": "2000.12.29",
        "country": "튀르키예",
        "team": "SL 벤피카"
    },
    {
        "name": "루카 펠레그리니",
        "originName": "루카 펠레그리니",
        "pos": "LB",
        "birth": "1999.03.07",
        "country": "이탈리아",
        "team": "유벤투스"
    },
    {
        "name": "네코 윌리엄스",
        "originName": "네코 윌리엄스",
        "pos": "RB",
        "birth": "2001.04.13",
        "country": "웨일스",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "브랜던 윌리엄스",
        "originName": "브랜던 윌리엄스",
        "pos": "LB",
        "birth": "2000.09.03",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "루이스 막시미아누",
        "originName": "루이스 마누엘 아란테스 막시미아누",
        "pos": "GK",
        "birth": "1999.01.05",
        "country": "포르투갈",
        "team": "라티움"
    },
    {
        "name": "네우엔 페레스",
        "originName": "네우엔 페레스",
        "pos": "CB",
        "birth": "2000.06.24",
        "country": "아르헨티나",
        "team": "우디네세"
    },
    {
        "name": "마라시 쿰불라",
        "originName": "마라시 쿰불라",
        "pos": "CB",
        "birth": "2000.02.08",
        "country": "알바니아",
        "team": "로마 FC"
    },
    {
        "name": "G. 치타이슈빌리",
        "originName": "기오르기 치타이슈빌리",
        "pos": "RM",
        "birth": "2000.11.18",
        "country": "우크라이나",
        "team": "디나모 키이우"
    },
    {
        "name": "M. 쿠두스",
        "originName": "모하메드 쿠두스",
        "pos": "CM",
        "birth": "2000.08.02",
        "country": "가나",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "메이슨 그린우드",
        "originName": "메이슨 그린우드",
        "pos": "ST",
        "birth": "2001.10.01",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "티아고 알마다",
        "originName": "티아고 알마다",
        "pos": "RW",
        "birth": "2001.04.26",
        "country": "아르헨티나",
        "team": "애틀란타 유나이티드"
    },
    {
        "name": "제레미 도쿠",
        "originName": "제레미 도쿠",
        "pos": "RW",
        "birth": "2002.05.27",
        "country": "벨기에",
        "team": "맨체스터 시티"
    },
    {
        "name": "아담 흘로제크",
        "originName": "아담 흘로제크",
        "pos": "RM",
        "birth": "2002.07.25",
        "country": "체코",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "A. 우르시",
        "originName": "아구스틴 우르시",
        "pos": "LM",
        "birth": "2000.05.04",
        "country": "아르헨티나",
        "team": "풋볼 클루브 후아레스"
    },
    {
        "name": "G. 가에타노",
        "originName": "잔루카 가에타노",
        "pos": "CAM",
        "birth": "2000.05.05",
        "country": "이탈리아",
        "team": "나폴리 FC"
    },
    {
        "name": "라울 벨라노바",
        "originName": "라울 벨라노바",
        "pos": "RB",
        "birth": "2000.05.17",
        "country": "이탈리아",
        "team": "토리노"
    },
    {
        "name": "S. 에스포지토",
        "originName": "세바스티아노 에스포지토",
        "pos": "ST",
        "birth": "2002.07.02",
        "country": "이탈리아",
        "team": "인테르"
    },
    {
        "name": "N. 아르미니",
        "originName": "니콜로 아르미니",
        "pos": "CB",
        "birth": "2001.03.07",
        "country": "이탈리아",
        "team": "라티움"
    },
    {
        "name": "가브리엘 마르티넬리",
        "originName": "가브리엘 테오도루 마르티넬리 시우바",
        "pos": "LW",
        "birth": "2001.06.18",
        "country": "브라질",
        "team": "아스널"
    },
    {
        "name": "서지뇨 데스트",
        "originName": "서지뇨 데스트",
        "pos": "RB",
        "birth": "2000.11.03",
        "country": "미국",
        "team": "FC 바르셀로나"
    },
    {
        "name": "D. 브라다리치",
        "originName": "도마고이 브라다리치",
        "pos": "LB",
        "birth": "1999.12.10",
        "country": "크로아티아",
        "team": "살레르니타나"
    },
    {
        "name": "A. 브랑크스",
        "originName": "아스터르 브랑크스",
        "pos": "CM",
        "birth": "2002.10.04",
        "country": "벨기에",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "헤이니에르",
        "originName": "헤이니에르 제주스 카르발류",
        "pos": "CF",
        "birth": "2002.01.19",
        "country": "브라질",
        "team": "레알 마드리드"
    },
    {
        "name": "바로우",
        "originName": "모도우 바로우",
        "pos": "LW",
        "birth": "1992.10.13",
        "country": "감비아",
        "team": "알아흘리"
    },
    {
        "name": "보슈코 슈탈로",
        "originName": "보슈코 슈탈로",
        "pos": "CB",
        "birth": "2000.01.01",
        "country": "크로아티아",
        "team": "디나모 자그레브"
    },
    {
        "name": "호셀루",
        "originName": "호세 루이스 마토 산마르틴",
        "pos": "ST",
        "birth": "1990.03.27",
        "country": "스페인",
        "team": "레알 마드리드(임대)"
    },
    {
        "name": "조규성",
        "originName": "조규성",
        "pos": "ST",
        "birth": "1998.01.25",
        "country": "대한민국",
        "team": "FC 미트윌란"
    },
    {
        "name": "원두재",
        "originName": "원두재",
        "pos": "CDM",
        "birth": "1997.11.18",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "프란체스코 카푸토",
        "originName": "프란체스코 카푸토",
        "pos": "ST",
        "birth": "1987.08.06",
        "country": "이탈리아",
        "team": "엠폴리"
    },
    {
        "name": "조르당 아마비",
        "originName": "조르당 아마비",
        "pos": "LB",
        "birth": "1994.03.09",
        "country": "프랑스",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "오스카르 벤트",
        "originName": "오스카르 벤트",
        "pos": "LB",
        "birth": "1985.10.24",
        "country": "스웨덴",
        "team": "IFK 예테보리"
    },
    {
        "name": "토비아스 지펠",
        "originName": "토비아스 지펠",
        "pos": "GK",
        "birth": "1988.03.22",
        "country": "독일",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "I. 트라오레",
        "originName": "이브라히마 트라오레",
        "pos": "RM",
        "birth": "1988.04.21",
        "country": "기니",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "필리프 차우너",
        "originName": "필리프 차우너",
        "pos": "GK",
        "birth": "1985.11.03",
        "country": "독일",
        "team": "RB 라이프치히"
    },
    {
        "name": "토니 얀치케",
        "originName": "토니 얀치케",
        "pos": "CB",
        "birth": "1990.04.07",
        "country": "독일",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "파트리크 헤어만",
        "originName": "파트리크 헤어만",
        "pos": "RM",
        "birth": "1991.02.12",
        "country": "독일",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "막스 그륀",
        "originName": "막스 그륀",
        "pos": "GK",
        "birth": "1987.04.05",
        "country": "독일",
        "team": "빅토리아 아셰픈부르크"
    },
    {
        "name": "클라우디우 하무스",
        "originName": "클라우디우 피레스 지 모라이스 하무스",
        "pos": "GK",
        "birth": "1991.11.16",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "네마냐 구델",
        "originName": "네마냐 구델",
        "pos": "CDM",
        "birth": "1991.11.16",
        "country": "세르비아",
        "team": "세비야 FC"
    },
    {
        "name": "A. 르텔리에",
        "originName": "알렉상드르 르텔리에",
        "pos": "GK",
        "birth": "1990.12.11",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "세르지 고메스",
        "originName": "세르지 고메스 솔라",
        "pos": "CB",
        "birth": "1992.03.28",
        "country": "스페인",
        "team": "RCD 에스파뇰"
    },
    {
        "name": "알레시 비달",
        "originName": "알레시 비달 파레우",
        "pos": "RM",
        "birth": "1989.08.21",
        "country": "스페인",
        "team": "RCD 에스파뇰"
    },
    {
        "name": "부나 사르",
        "originName": "부나 사르",
        "pos": "RB",
        "birth": "1992.01.31",
        "country": "프랑스",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "토마시 바츨리크",
        "originName": "토마시 바츨리크",
        "pos": "GK",
        "birth": "1989.03.29",
        "country": "체코",
        "team": "뉴잉글랜드 레볼루션"
    },
    {
        "name": "카림 레킥",
        "originName": "카림 레킥",
        "pos": "CB",
        "birth": "1994.12.02",
        "country": "네덜란드",
        "team": "알자지라"
    },
    {
        "name": "J. 아크파 아크프로",
        "originName": "장-다니엘 아크파 아크프로",
        "pos": "CM",
        "birth": "1992.10.11",
        "country": "코트디부아르",
        "team": "라티움"
    },
    {
        "name": "파트리크",
        "originName": "파트리시오 가바론 힐",
        "pos": "CB",
        "birth": "1993.04.17",
        "country": "스페인",
        "team": "라티움"
    },
    {
        "name": "안드레아스 페레이라",
        "originName": "안드레아스 우구 오엘게바움 페레이라",
        "pos": "CAM",
        "birth": "1996.01.01",
        "country": "브라질",
        "team": "풀럼"
    },
    {
        "name": "자판 안데르손",
        "originName": "자판 안데르손",
        "pos": "RM",
        "birth": "1995.04.21",
        "country": "네덜란드",
        "team": "옥스퍼드 유나이티드"
    },
    {
        "name": "다닐로 카탈디",
        "originName": "다닐로 카탈디",
        "pos": "CM",
        "birth": "1994.08.06",
        "country": "이탈리아",
        "team": "라티움"
    },
    {
        "name": "라르스 슈틴들",
        "originName": "라르스 슈틴들",
        "pos": "CAM",
        "birth": "1988.08.26",
        "country": "독일",
        "team": "카를스루어 SC"
    },
    {
        "name": "발렌티노 라자로",
        "originName": "발렌티노 라자로",
        "pos": "RM",
        "birth": "1996.03.24",
        "country": "오스트리아",
        "team": "인테르"
    },
    {
        "name": "토마스 스트라코샤",
        "originName": "토마스 스트라코샤",
        "pos": "GK",
        "birth": "1995.03.19",
        "country": "알바니아",
        "team": "브렌트퍼드"
    },
    {
        "name": "알렉세이 미란추크",
        "originName": "알렉세이 미란추크",
        "pos": "CAM",
        "birth": "1995.10.17",
        "country": "러시아",
        "team": "베르가모 칼초"
    },
    {
        "name": "A. 쇨로트",
        "originName": "알렉산데르 쇨로트",
        "pos": "ST",
        "birth": "1995.12.05",
        "country": "노르웨이",
        "team": "비야레알 CF"
    },
    {
        "name": "베슬리 후트",
        "originName": "베슬리 후트",
        "pos": "CB",
        "birth": "1994.03.06",
        "country": "네덜란드",
        "team": "왓퍼드"
    },
    {
        "name": "곤살로 에스칼란테",
        "originName": "곤살로 에스칼란테",
        "pos": "CDM",
        "birth": "1993.03.27",
        "country": "아르헨티나",
        "team": "카디스 CF"
    },
    {
        "name": "카라사",
        "originName": "후이 필리프 카에타누 모라",
        "pos": "RB",
        "birth": "1993.03.01",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "마티아 칼다라",
        "originName": "마티아 칼다라",
        "pos": "CB",
        "birth": "1994.05.05",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "베다트 무리치",
        "originName": "베다트 무리치",
        "pos": "ST",
        "birth": "1994.04.24",
        "country": "코소보",
        "team": "RCD 마요르카"
    },
    {
        "name": "슈테판 라이너",
        "originName": "슈테판 라이너",
        "pos": "RB",
        "birth": "1992.08.27",
        "country": "오스트리아",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "아담 마루시치",
        "originName": "아담 마루시치",
        "pos": "RM",
        "birth": "1992.10.17",
        "country": "몬테네그로",
        "team": "라티움"
    },
    {
        "name": "주안 조르단",
        "originName": "주안 조르단 모레노",
        "pos": "CM",
        "birth": "1994.07.06",
        "country": "스페인",
        "team": "세비야 FC"
    },
    {
        "name": "마마두 두쿠레",
        "originName": "마마두 두쿠레",
        "pos": "CB",
        "birth": "1998.05.21",
        "country": "프랑스",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "알렉산더 뉘벨",
        "originName": "알렉산더 뉘벨",
        "pos": "GK",
        "birth": "1996.09.30",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "토니 마르티네스",
        "originName": "안토니오 마르티네스 로페스",
        "pos": "ST",
        "birth": "1997.06.30",
        "country": "스페인",
        "team": "FC 포르투"
    },
    {
        "name": "요아킴 멜레",
        "originName": "요아킴 멜레",
        "pos": "RB",
        "birth": "1997.05.20",
        "country": "덴마크",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "마르크 로카",
        "originName": "마르크 로카 훈케",
        "pos": "CDM",
        "birth": "1996.11.26",
        "country": "스페인",
        "team": "리즈 유나이티드"
    },
    {
        "name": "샘 라메르스",
        "originName": "샘 라메르스",
        "pos": "ST",
        "birth": "1997.04.30",
        "country": "네덜란드",
        "team": "레인저스"
    },
    {
        "name": "마테우스 페르난지스",
        "originName": "마테우스 페르난지스 시케이라",
        "pos": "CM",
        "birth": "1998.06.30",
        "country": "브라질",
        "team": "파우메이라스"
    },
    {
        "name": "하비 디아스",
        "originName": "하비에르 디아스 산체스",
        "pos": "GK",
        "birth": "1997.05.15",
        "country": "스페인",
        "team": "CD 테네리페"
    },
    {
        "name": "슈테펜 티게스",
        "originName": "슈테펜 티게스",
        "pos": "ST",
        "birth": "1998.07.31",
        "country": "독일",
        "team": "1. FC 쾰른"
    },
    {
        "name": "윌송 마나파",
        "originName": "윌송 미게이스 마나파 장코",
        "pos": "RB",
        "birth": "1994.07.23",
        "country": "포르투갈",
        "team": "그라나다 CF"
    },
    {
        "name": "미첼 바커르",
        "originName": "미첼 바커르",
        "pos": "LB",
        "birth": "2000.06.20",
        "country": "네덜란드",
        "team": "베르가모 칼초"
    },
    {
        "name": "오스카르",
        "originName": "오스카르 로드리게스 아르나이스",
        "pos": "CAM",
        "birth": "1998.06.28",
        "country": "스페인",
        "team": "세비야 FC"
    },
    {
        "name": "훌리오 비얄바",
        "originName": "훌리오 비얄바",
        "pos": "ST",
        "birth": "1998.09.11",
        "country": "파라과이",
        "team": "스포르티보 루께뇨"
    },
    {
        "name": "케빈 켈레허",
        "originName": "케빈 켈레허",
        "pos": "GK",
        "birth": "1998.11.23",
        "country": "아일랜드",
        "team": "리버풀"
    },
    {
        "name": "마테오 페시나",
        "originName": "마테오 페시나",
        "pos": "CM",
        "birth": "1997.04.21",
        "country": "이탈리아",
        "team": "AC 몬차"
    },
    {
        "name": "나누",
        "originName": "에울라니우 안젤루 시펠라 고메스",
        "pos": "RB",
        "birth": "1994.05.17",
        "country": "기니비사우",
        "team": "삼순스포르"
    },
    {
        "name": "N. 필립스",
        "originName": "나다니엘 필립스",
        "pos": "CB",
        "birth": "1997.03.21",
        "country": "잉글랜드",
        "team": "리버풀"
    },
    {
        "name": "산 로만",
        "originName": "미겔 산 로만 페란디스",
        "pos": "GK",
        "birth": "1997.07.14",
        "country": "스페인",
        "team": "엘체 CF"
    },
    {
        "name": "주제프 마르티네스",
        "originName": "주제프 마르티네스 리에라",
        "pos": "GK",
        "birth": "1998.05.27",
        "country": "스페인",
        "team": "제노아"
    },
    {
        "name": "알바로 가르시아",
        "originName": "알바로 가르시아 세고비아",
        "pos": "CB",
        "birth": "2000.06.01",
        "country": "스페인",
        "team": "RCD 에스파뇰"
    },
    {
        "name": "우고 두로",
        "originName": "우고 두로 페랄레스",
        "pos": "ST",
        "birth": "1999.11.10",
        "country": "스페인",
        "team": "발렌시아 CF"
    },
    {
        "name": "펠릭스 은메차",
        "originName": "펠릭스 은메차",
        "pos": "CAM",
        "birth": "2000.10.10",
        "country": "잉글랜드",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "마마두 룸",
        "originName": "마마두 룸",
        "pos": "CDM",
        "birth": "1996.12.30",
        "country": "세네갈",
        "team": "FC 포르투"
    },
    {
        "name": "세르히오 카메요",
        "originName": "세르히오 카메요 페레스",
        "pos": "ST",
        "birth": "2001.02.10",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "자이두 사누시",
        "originName": "자이두 사누시",
        "pos": "LB",
        "birth": "1997.06.13",
        "country": "나이지리아",
        "team": "FC 포르투"
    },
    {
        "name": "리스 윌리엄스",
        "originName": "리스 윌리엄스",
        "pos": "CB",
        "birth": "2001.02.03",
        "country": "잉글랜드",
        "team": "리버풀"
    },
    {
        "name": "호마리우 바로",
        "originName": "호마리우 마누엘 실바 바로",
        "pos": "RM",
        "birth": "2000.01.25",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "이스마엘",
        "originName": "이스마엘 구티에레스 몬티야",
        "pos": "CM",
        "birth": "2000.08.07",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "M. 음바예",
        "originName": "무하메드 음바예",
        "pos": "GK",
        "birth": "1997.10.13",
        "country": "세네갈",
        "team": "아카데미쿠 비제우"
    },
    {
        "name": "T. 도일",
        "originName": "토미 도일",
        "pos": "CM",
        "birth": "2001.10.17",
        "country": "잉글랜드",
        "team": "맨체스터 시티"
    },
    {
        "name": "B. 쿠메티오",
        "originName": "빌리 쿠메티오",
        "pos": "CB",
        "birth": "2002.11.14",
        "country": "프랑스",
        "team": "리버풀"
    },
    {
        "name": "파비우 비에이라",
        "originName": "파비우 다니엘 페헤이라 비에이라",
        "pos": "CAM",
        "birth": "2000.05.30",
        "country": "포르투갈",
        "team": "아스널"
    },
    {
        "name": "L. 사마르지치",
        "originName": "라자르 사마르지치",
        "pos": "CAM",
        "birth": "2002.02.24",
        "country": "독일",
        "team": "우디네세"
    },
    {
        "name": "에바니우송",
        "originName": "F. 에바니우송 지 리마 바르보자",
        "pos": "ST",
        "birth": "1999.10.06",
        "country": "브라질",
        "team": "FC 포르투"
    },
    {
        "name": "K. 데라푸엔테",
        "originName": "콘라드 데라푸엔테",
        "pos": "LW",
        "birth": "2001.07.16",
        "country": "미국",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "C. 파머",
        "originName": "콜 파머",
        "pos": "CAM",
        "birth": "2002.05.06",
        "country": "잉글랜드",
        "team": "첼시"
    },
    {
        "name": "G. 프라보타",
        "originName": "잔루카 프라보타",
        "pos": "LB",
        "birth": "1999.06.24",
        "country": "이탈리아",
        "team": "유벤투스"
    },
    {
        "name": "S. 드를랴차",
        "originName": "슈테판 드를랴차",
        "pos": "GK",
        "birth": "1999.04.20",
        "country": "독일",
        "team": "디나모 드레스덴"
    },
    {
        "name": "C. 서푸나루",
        "originName": "크리스티안 서푸나루",
        "pos": "RB",
        "birth": "1984.04.05",
        "country": "루마니아",
        "team": "라피드 부카레슈티"
    },
    {
        "name": "S. 치시",
        "originName": "시몬 치시",
        "pos": "CAM",
        "birth": "2001.07.08",
        "country": "폴란드",
        "team": "라쿠프 쳉스토호바"
    },
    {
        "name": "로이크 레미",
        "originName": "로이크 레미",
        "pos": "ST",
        "birth": "1987.01.02",
        "country": "프랑스",
        "team": "스타드 브레스트 29"
    },
    {
        "name": "K. 엘아흐마디",
        "originName": "카림 엘아흐마디",
        "pos": "CM",
        "birth": "1985.01.27",
        "country": "모로코",
        "team": "알이티하드"
    },
    {
        "name": "홀란두",
        "originName": "홀란두 조르즈 피르스 다 폰세카",
        "pos": "CB",
        "birth": "1985.08.31",
        "country": "포르투갈",
        "team": "SC 브라가"
    },
    {
        "name": "바우트 브라마",
        "originName": "바우트 브라마",
        "pos": "CDM",
        "birth": "1986.08.21",
        "country": "네덜란드",
        "team": "FC 트벤터"
    },
    {
        "name": "안젤로 오그본나",
        "originName": "안젤로 오그본나",
        "pos": "CB",
        "birth": "1988.05.23",
        "country": "이탈리아",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "K. 시그소르손",
        "originName": "콜베이든 시그소르손",
        "pos": "ST",
        "birth": "1990.03.14",
        "country": "아이슬란드",
        "team": "IFK 예테보리"
    },
    {
        "name": "버논 아니타",
        "originName": "버논 아니타",
        "pos": "LB",
        "birth": "1989.04.04",
        "country": "네덜란드",
        "team": "알 오루바"
    },
    {
        "name": "세바스티안 조빈코",
        "originName": "세바스티안 조빈코",
        "pos": "ST",
        "birth": "1987.01.26",
        "country": "이탈리아",
        "team": "삼프도리아"
    },
    {
        "name": "후벵 미카엘",
        "originName": "후벵 미카엘 F. 다 헤수레이캉",
        "pos": "CAM",
        "birth": "1986.08.19",
        "country": "포르투갈",
        "team": "CD 나시오날"
    },
    {
        "name": "J. 반데르헤이던",
        "originName": "얀-아리 반데르헤이던",
        "pos": "CB",
        "birth": "1988.03.03",
        "country": "네덜란드",
        "team": "빌렘 II"
    },
    {
        "name": "예룬 주트",
        "originName": "예룬 주트",
        "pos": "GK",
        "birth": "1991.01.06",
        "country": "네덜란드",
        "team": "스페치아"
    },
    {
        "name": "더글라스",
        "originName": "더글라스 프랑코 테이세이라",
        "pos": "CB",
        "birth": "1988.01.12",
        "country": "네덜란드",
        "team": "뷔르츠부르거 키커스"
    },
    {
        "name": "N. 이시마트-미랑",
        "originName": "니콜라 이시마트-미랑",
        "pos": "CB",
        "birth": "1991.11.15",
        "country": "프랑스",
        "team": "비테서"
    },
    {
        "name": "L. 나르싱",
        "originName": "루시아노 나르싱",
        "pos": "RW",
        "birth": "1990.09.13",
        "country": "네덜란드",
        "team": "네아 살라미스 FC"
    },
    {
        "name": "J. 토른스트라",
        "originName": "옌스 토른스트라",
        "pos": "CAM",
        "birth": "1989.04.04",
        "country": "네덜란드",
        "team": "FC 위트레흐트"
    },
    {
        "name": "미켈 넬롬",
        "originName": "미켈 넬롬",
        "pos": "LB",
        "birth": "1990.09.22",
        "country": "수리남",
        "team": "빌렘 II"
    },
    {
        "name": "B. 바샤츠콜루",
        "originName": "빌랄 바샤츠콜루",
        "pos": "RW",
        "birth": "1995.03.26",
        "country": "튀르키예",
        "team": "헤라클레스 알멜로"
    },
    {
        "name": "요릿 헨드릭스",
        "originName": "요릿 헨드릭스",
        "pos": "CDM",
        "birth": "1995.02.06",
        "country": "네덜란드",
        "team": "웨스턴 시드니 원더러스"
    },
    {
        "name": "R. 반레인",
        "originName": "리카르도 반레인",
        "pos": "RB",
        "birth": "1991.06.13",
        "country": "네덜란드",
        "team": "카를스루어 SC"
    },
    {
        "name": "테렌서 콩골로",
        "originName": "테렌서 콩골로",
        "pos": "LB",
        "birth": "1994.02.14",
        "country": "네덜란드",
        "team": "풀럼"
    },
    {
        "name": "조슈아 브레넛",
        "originName": "조슈아 브레넛",
        "pos": "LB",
        "birth": "1994.03.20",
        "country": "네덜란드",
        "team": "FC 트벤터"
    },
    {
        "name": "R. 카르스도르프",
        "originName": "릭 카르스도르프",
        "pos": "RB",
        "birth": "1995.02.11",
        "country": "네덜란드",
        "team": "로마 FC"
    },
    {
        "name": "B. 람셀라르",
        "originName": "바르트 람셀라르",
        "pos": "CAM",
        "birth": "1996.06.29",
        "country": "네덜란드",
        "team": "FC 위트레흐트"
    },
    {
        "name": "정성룡",
        "originName": "정성룡",
        "pos": "GK",
        "birth": "1985.01.04",
        "country": "대한민국",
        "team": "가와사키 프론탈레"
    },
    {
        "name": "이범영",
        "originName": "이범영",
        "pos": "GK",
        "birth": "1989.04.02",
        "country": "대한민국",
        "team": "수원 FC"
    },
    {
        "name": "남태희",
        "originName": "남태희",
        "pos": "RM",
        "birth": "1991.07.03",
        "country": "대한민국",
        "team": "알두하일"
    },
    {
        "name": "오재석",
        "originName": "오재석",
        "pos": "RB",
        "birth": "1990.01.04",
        "country": "대한민국",
        "team": "대전 하나 시티즌"
    },
    {
        "name": "황석호",
        "originName": "황석호",
        "pos": "CB",
        "birth": "1989.06.27",
        "country": "대한민국",
        "team": "사간 도스"
    },
    {
        "name": "렘코 파스베어",
        "originName": "렘코 파스베어",
        "pos": "GK",
        "birth": "1983.11.08",
        "country": "네덜란드",
        "team": "아약스"
    },
    {
        "name": "주하이르 페달",
        "originName": "주하이르 페달",
        "pos": "CB",
        "birth": "1989.12.23",
        "country": "모로코",
        "team": "알라니아스포르"
    },
    {
        "name": "라이언 골드",
        "originName": "라이언 골드",
        "pos": "CAM",
        "birth": "1995.12.16",
        "country": "스코틀랜드",
        "team": "밴쿠버 화이트캡스"
    },
    {
        "name": "우사마 타난",
        "originName": "우사마 타난",
        "pos": "CAM",
        "birth": "1994.03.23",
        "country": "모로코",
        "team": "움살랄 SC"
    },
    {
        "name": "세코 포파나",
        "originName": "세코 포파나",
        "pos": "CM",
        "birth": "1995.05.07",
        "country": "코트디부아르",
        "team": "알나스르"
    },
    {
        "name": "패트릭 뱀포드",
        "originName": "패트릭 뱀포드",
        "pos": "ST",
        "birth": "1993.09.05",
        "country": "잉글랜드",
        "team": "리즈 유나이티드"
    },
    {
        "name": "필립 막스",
        "originName": "필립 막스",
        "pos": "LB",
        "birth": "1993.09.30",
        "country": "독일",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "카를루스 주니오르",
        "originName": "카를루스 아우베르투 카르발류 시우바 Jr.",
        "pos": "LW",
        "birth": "1995.08.15",
        "country": "브라질",
        "team": "알샤밥"
    },
    {
        "name": "도글라스 탕키",
        "originName": "도글라스 윌리앙 다 시우바 소자",
        "pos": "ST",
        "birth": "1993.10.27",
        "country": "브라질",
        "team": "삼순스포르"
    },
    {
        "name": "카이우 엔히키",
        "originName": "카이우 엔히키 올리베이라 시우바",
        "pos": "LB",
        "birth": "1997.07.31",
        "country": "브라질",
        "team": "AS 모나코"
    },
    {
        "name": "하비 갈란",
        "originName": "하비에르 갈란 길",
        "pos": "LB",
        "birth": "1994.11.19",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "요엘 드롬멀",
        "originName": "요엘 드롬멀",
        "pos": "GK",
        "birth": "1996.11.16",
        "country": "네덜란드",
        "team": "PSV"
    },
    {
        "name": "J. 카를손",
        "originName": "예스페르 카를손",
        "pos": "LW",
        "birth": "1998.07.25",
        "country": "스웨덴",
        "team": "볼로냐"
    },
    {
        "name": "야콥 라스무센",
        "originName": "야콥 라스무센",
        "pos": "CB",
        "birth": "1997.05.28",
        "country": "덴마크",
        "team": "브뢴뷔 IF"
    },
    {
        "name": "이타쿠라 고",
        "originName": "이타쿠라 고",
        "pos": "CB",
        "birth": "1997.01.27",
        "country": "일본",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "토마시 소우체크",
        "originName": "토마시 소우체크",
        "pos": "CDM",
        "birth": "1995.02.27",
        "country": "체코",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "조나탕 클로스",
        "originName": "조나탕 클로스",
        "pos": "RWB",
        "birth": "1992.09.25",
        "country": "프랑스",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "G. 야쿠마키스",
        "originName": "요르고스 야쿠마키스",
        "pos": "ST",
        "birth": "1994.12.09",
        "country": "그리스",
        "team": "애틀란타 유나이티드"
    },
    {
        "name": "갈레누",
        "originName": "웬데르송 나시멘투 갈레누",
        "pos": "LM",
        "birth": "1997.10.22",
        "country": "브라질",
        "team": "FC 포르투"
    },
    {
        "name": "페드루 곤살베스",
        "originName": "페드루 안토니우 페레이라 곤살베스",
        "pos": "CF",
        "birth": "1998.06.28",
        "country": "포르투갈",
        "team": "스포르팅 CP"
    },
    {
        "name": "리들레 바쿠",
        "originName": "리들레 바쿠",
        "pos": "RB",
        "birth": "1998.04.08",
        "country": "독일",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "코디 각포",
        "originName": "코디 각포",
        "pos": "LM",
        "birth": "1999.05.07",
        "country": "네덜란드",
        "team": "리버풀"
    },
    {
        "name": "압두 하루이",
        "originName": "압두 하루이",
        "pos": "CM",
        "birth": "1998.01.13",
        "country": "네덜란드",
        "team": "프로시노네"
    },
    {
        "name": "실라스",
        "originName": "실라스 카툼파 음붐파",
        "pos": "RM",
        "birth": "1998.10.06",
        "country": "콩고 민주 공화국",
        "team": "VfB 슈투트가르트"
    },
    {
        "name": "M. 라크루아",
        "originName": "막상스 라크루아",
        "pos": "CB",
        "birth": "2000.04.06",
        "country": "프랑스",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "브루누 코스타",
        "originName": "브루누 샤비에르 알메이다 코스타",
        "pos": "CM",
        "birth": "1997.04.19",
        "country": "포르투갈",
        "team": "발랑시엔 FC"
    },
    {
        "name": "조이 베이르만",
        "originName": "조이 베이르만",
        "pos": "CM",
        "birth": "1998.11.19",
        "country": "네덜란드",
        "team": "PSV"
    },
    {
        "name": "메흐메트 토팔",
        "originName": "메흐메트 토팔",
        "pos": "CDM",
        "birth": "1986.03.03",
        "country": "튀르키예",
        "team": "베식타슈"
    },
    {
        "name": "A. 파파도풀로스",
        "originName": "아브람 파파도풀로스",
        "pos": "CB",
        "birth": "1984.12.03",
        "country": "그리스",
        "team": "올림피아코스 CFP"
    },
    {
        "name": "네그레도",
        "originName": "알바로 네그레도 산체스",
        "pos": "ST",
        "birth": "1985.08.20",
        "country": "스페인",
        "team": "카디스 CF"
    },
    {
        "name": "M. 에르딘츠",
        "originName": "메블뤼트 에르딘츠",
        "pos": "CF",
        "birth": "1987.02.25",
        "country": "튀르키예",
        "team": "코제일리스포르"
    },
    {
        "name": "크리스 건터",
        "originName": "크리스 건터",
        "pos": "RB",
        "birth": "1989.07.21",
        "country": "웨일스",
        "team": "AFC 윔블던"
    },
    {
        "name": "A. 옝제이치크",
        "originName": "아르투르 옝제이치크",
        "pos": "LB",
        "birth": "1987.11.04",
        "country": "폴란드",
        "team": "레기아 바르샤바"
    },
    {
        "name": "K. 몽친스키",
        "originName": "크시슈토프 몽친스키",
        "pos": "CM",
        "birth": "1987.05.23",
        "country": "폴란드",
        "team": "실롱스크 브로츠와프"
    },
    {
        "name": "아리 스쿨라손",
        "originName": "아리 스쿨라손",
        "pos": "LB",
        "birth": "1987.05.14",
        "country": "아이슬란드",
        "team": "IFK 노르셰핑"
    },
    {
        "name": "T. 페크하르트",
        "originName": "토말 페크하르트",
        "pos": "ST",
        "birth": "1989.05.26",
        "country": "체코",
        "team": "레기아 바르샤바"
    },
    {
        "name": "샘 보크스",
        "originName": "샘 보크스",
        "pos": "ST",
        "birth": "1989.10.21",
        "country": "웨일스",
        "team": "위컴 원더러스"
    },
    {
        "name": "조르당 루카쿠",
        "originName": "조르당 루카쿠",
        "pos": "LB",
        "birth": "1994.07.25",
        "country": "벨기에",
        "team": "SD 폰페라디나"
    },
    {
        "name": "미하우 파즈단",
        "originName": "미하우 파즈단",
        "pos": "CB",
        "birth": "1987.09.21",
        "country": "폴란드",
        "team": "비에체스타 크라코우"
    },
    {
        "name": "제임스 체스터",
        "originName": "제임스 체스터",
        "pos": "CB",
        "birth": "1989.01.23",
        "country": "웨일스",
        "team": "배로 AFC"
    },
    {
        "name": "앤디 킹",
        "originName": "앤디 킹",
        "pos": "LM",
        "birth": "1988.10.29",
        "country": "웨일스",
        "team": "브리스톨 시티"
    },
    {
        "name": "G. 자벨라스",
        "originName": "요르고스 자벨라스",
        "pos": "LB",
        "birth": "1987.11.26",
        "country": "그리스",
        "team": "아트로미토스"
    },
    {
        "name": "대니 워드",
        "originName": "대니 워드",
        "pos": "GK",
        "birth": "1993.06.22",
        "country": "웨일스",
        "team": "레스터 시티"
    },
    {
        "name": "F. 스타진스키",
        "originName": "필리프 스타진스키",
        "pos": "CAM",
        "birth": "1991.05.27",
        "country": "폴란드",
        "team": "루흐 호주프"
    },
    {
        "name": "J. 뵈드바르손",
        "originName": "욘 다디 뵈드바르손",
        "pos": "ST",
        "birth": "1992.05.25",
        "country": "아이슬란드",
        "team": "볼턴 원더러스"
    },
    {
        "name": "A. 트뢰이스타손",
        "originName": "아르드노르 잉그비 트뢰이스타손",
        "pos": "ST",
        "birth": "1993.04.30",
        "country": "아이슬란드",
        "team": "IFK 노르셰핑"
    },
    {
        "name": "S. 데이비스",
        "originName": "스티븐 데이비스",
        "pos": "RM",
        "birth": "1985.01.01",
        "country": "북아일랜드",
        "team": "레인저스"
    },
    {
        "name": "M. 아르놀트",
        "originName": "막시밀리안 아르놀트",
        "pos": "CDM",
        "birth": "1994.05.27",
        "country": "독일",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "F. 케시에",
        "originName": "프랑크 야니크 케시에",
        "pos": "CM",
        "birth": "1996.12.19",
        "country": "코트디부아르",
        "team": "알아흘리"
    },
    {
        "name": "아티바 허친슨",
        "originName": "아티바 허친슨",
        "pos": "CM",
        "birth": "1983.02.08",
        "country": "캐나다",
        "team": "베식타슈"
    },
    {
        "name": "S. 잉가손",
        "originName": "스베리르 잉기 잉가손",
        "pos": "CB",
        "birth": "1993.08.05",
        "country": "아이슬란드",
        "team": "FC 미트윌란"
    },
    {
        "name": "스콧 브라운",
        "originName": "스콧 브라운",
        "pos": "CM",
        "birth": "1985.06.25",
        "country": "스코틀랜드",
        "team": "에버딘"
    },
    {
        "name": "M. 테크데미르",
        "originName": "마흐무트 테크데미르",
        "pos": "CDM",
        "birth": "1988.01.20",
        "country": "튀르키예",
        "team": "바샥셰히르"
    },
    {
        "name": "펑샤오팅",
        "originName": "펑샤오팅",
        "pos": "CB",
        "birth": "1985.10.22",
        "country": "중국",
        "team": "상하이 선화"
    },
    {
        "name": "R. 삼부에사",
        "originName": "루벤스 삼부에사",
        "pos": "RW",
        "birth": "1984.01.01",
        "country": "아르헨티나",
        "team": "클루브 아틀레티코 데 산루이스"
    },
    {
        "name": "O. 알론소",
        "originName": "오스발도 알론소",
        "pos": "CDM",
        "birth": "1985.11.11",
        "country": "쿠바",
        "team": "애틀란타 유나이티드"
    },
    {
        "name": "신형민",
        "originName": "신형민",
        "pos": "CDM",
        "birth": "1986.07.18",
        "country": "대한민국",
        "team": "천안 시티 FC"
    },
    {
        "name": "살만 알파라지",
        "originName": "살만 알파라지",
        "pos": "CDM",
        "birth": "1989.08.01",
        "country": "사우디아라비아",
        "team": "알힐랄"
    },
    {
        "name": "닉 비르헤버르",
        "originName": "닉 비르헤버르",
        "pos": "CB",
        "birth": "1989.08.03",
        "country": "네덜란드",
        "team": "FC 위트레흐트"
    },
    {
        "name": "프란세르지우",
        "originName": "프란세르지우 호드리기스 바르보자",
        "pos": "CM",
        "birth": "1990.10.18",
        "country": "브라질",
        "team": "쿠리치바"
    },
    {
        "name": "도를란 파본",
        "originName": "도를란 파본",
        "pos": "RW",
        "birth": "1988.01.24",
        "country": "콜롬비아",
        "team": "아틀레티코 나시오날"
    },
    {
        "name": "J. 태버니어",
        "originName": "제임스 태버니어",
        "pos": "RB",
        "birth": "1991.10.31",
        "country": "잉글랜드",
        "team": "레인저스"
    },
    {
        "name": "조너선 멘사",
        "originName": "조너선 멘사",
        "pos": "CB",
        "birth": "1990.07.13",
        "country": "가나",
        "team": "새너제이 어스퀘이크"
    },
    {
        "name": "그레임 시니",
        "originName": "그레임 시니",
        "pos": "LB",
        "birth": "1991.08.04",
        "country": "스코틀랜드",
        "team": "에버딘"
    },
    {
        "name": "M. 키프텐벨트",
        "originName": "마이클 키프텐벨트",
        "pos": "CDM",
        "birth": "1990.06.20",
        "country": "네덜란드",
        "team": "FC 에먼"
    },
    {
        "name": "파올로 골츠",
        "originName": "파올로 골츠",
        "pos": "CB",
        "birth": "1985.05.12",
        "country": "아르헨티나",
        "team": "CA 콜론"
    },
    {
        "name": "브람 반 폴렌",
        "originName": "브람 반 폴렌",
        "pos": "RB",
        "birth": "1985.10.11",
        "country": "네덜란드",
        "team": "PEC 즈볼러"
    },
    {
        "name": "E. 운사인",
        "originName": "에세키엘 운사인",
        "pos": "GK",
        "birth": "1995.03.09",
        "country": "아르헨티나",
        "team": "네칵사"
    },
    {
        "name": "C. 이스키에르도스",
        "originName": "카를로스 이스키에르도스",
        "pos": "CB",
        "birth": "1988.11.03",
        "country": "아르헨티나",
        "team": "스포르팅 히혼"
    },
    {
        "name": "T. 흘라츠와요",
        "originName": "툴라니 흘라츠와요",
        "pos": "CB",
        "birth": "1989.12.18",
        "country": "남아프리카공화국",
        "team": "올랜도 파이리츠"
    },
    {
        "name": "C. 오스만파샤",
        "originName": "자네르 오스만파샤",
        "pos": "CB",
        "birth": "1988.01.15",
        "country": "튀르키예",
        "team": "시바스스포르"
    },
    {
        "name": "안드레아스 울머",
        "originName": "안드레아스 울머",
        "pos": "LB",
        "birth": "1985.10.30",
        "country": "오스트리아",
        "team": "레드불 잘츠부르크"
    },
    {
        "name": "제이슨 커",
        "originName": "제이슨 커",
        "pos": "CB",
        "birth": "1997.02.06",
        "country": "스코틀랜드",
        "team": "위건 애슬래틱"
    },
    {
        "name": "마르쿠스 베리",
        "originName": "마르쿠스 베리",
        "pos": "ST",
        "birth": "1986.08.17",
        "country": "스웨덴",
        "team": "IFK 예테보리"
    },
    {
        "name": "구스타브 스벤손",
        "originName": "구스타브 스벤손",
        "pos": "CM",
        "birth": "1987.02.07",
        "country": "스웨덴",
        "team": "IFK 예테보리"
    },
    {
        "name": "M. 가브라노비치",
        "originName": "마리오 가브라노비치",
        "pos": "ST",
        "birth": "1989.11.24",
        "country": "스위스",
        "team": "카이세리스포르"
    },
    {
        "name": "P. 벵트손",
        "originName": "피에르 벵트손",
        "pos": "LB",
        "birth": "1988.04.12",
        "country": "스웨덴",
        "team": "유르고르덴 IF"
    },
    {
        "name": "O. 첼루스트카",
        "originName": "온드레이 첼루스트카",
        "pos": "CB",
        "birth": "1989.06.18",
        "country": "체코",
        "team": "보드룸스포르"
    },
    {
        "name": "안테 부디미르",
        "originName": "안테 부디미르",
        "pos": "ST",
        "birth": "1991.07.22",
        "country": "크로아티아",
        "team": "오사수나"
    },
    {
        "name": "크리스토퍼 트리멜",
        "originName": "크리스토퍼 트리멜",
        "pos": "RB",
        "birth": "1987.02.24",
        "country": "오스트리아",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "데드릭 보야타",
        "originName": "데드릭 보야타",
        "pos": "CB",
        "birth": "1990.11.28",
        "country": "벨기에",
        "team": "클럽 브루게"
    },
    {
        "name": "마테이 비드라",
        "originName": "마테이 비드라",
        "pos": "ST",
        "birth": "1992.05.01",
        "country": "체코",
        "team": "빅토리아 플젠"
    },
    {
        "name": "슈테판 일잔커",
        "originName": "슈테판 일잔커",
        "pos": "CDM",
        "birth": "1989.05.18",
        "country": "오스트리아",
        "team": "제노아"
    },
    {
        "name": "미하엘 그레고리치",
        "originName": "미하엘 그레고리치",
        "pos": "CM",
        "birth": "1994.04.18",
        "country": "오스트리아",
        "team": "SC 프라이부르크"
    },
    {
        "name": "L. 스피나촐라",
        "originName": "레오나르도 스피나촐라",
        "pos": "LB",
        "birth": "1993.03.25",
        "country": "이탈리아",
        "team": "로마 FC"
    },
    {
        "name": "A. 코르넬리우스",
        "originName": "안드레아스 코르넬리우스",
        "pos": "ST",
        "birth": "1993.03.16",
        "country": "덴마크",
        "team": "FC 코펜하겐"
    },
    {
        "name": "토마시 칼라스",
        "originName": "토마시 칼라스",
        "pos": "CB",
        "birth": "1993.05.15",
        "country": "체코",
        "team": "FC 샬케 04"
    },
    {
        "name": "파벨 카데라베크",
        "originName": "파벨 카데라베크",
        "pos": "LB",
        "birth": "1992.04.25",
        "country": "체코",
        "team": "TSG 호펜하임"
    },
    {
        "name": "미하엘 크르멘치크",
        "originName": "미하엘 크르멘치크",
        "pos": "ST",
        "birth": "1993.03.15",
        "country": "체코",
        "team": "클럽 브루게"
    },
    {
        "name": "야쿱 브라베츠",
        "originName": "야쿱 브라베츠",
        "pos": "CB",
        "birth": "1992.08.06",
        "country": "체코",
        "team": "아리스 테살로니키"
    },
    {
        "name": "얀 보릴",
        "originName": "얀 보릴",
        "pos": "LB",
        "birth": "1991.01.11",
        "country": "체코",
        "team": "슬라비아 프라하"
    },
    {
        "name": "로만 베주스",
        "originName": "로만 베주스",
        "pos": "CAM",
        "birth": "1990.09.26",
        "country": "우크라이나",
        "team": "KAA 겐트"
    },
    {
        "name": "크리스토페르 올손",
        "originName": "크리스토페르 올손",
        "pos": "CM",
        "birth": "1995.06.30",
        "country": "스웨덴",
        "team": "RSC 안데를레흐트"
    },
    {
        "name": "조엘 벨트만",
        "originName": "조엘 벨트만",
        "pos": "CB",
        "birth": "1992.01.15",
        "country": "네덜란드",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "로빈 올센",
        "originName": "로빈 올센",
        "pos": "GK",
        "birth": "1990.01.08",
        "country": "스웨덴",
        "team": "애스턴 빌라"
    },
    {
        "name": "M. 다니엘손",
        "originName": "마르쿠스 다니엘손",
        "pos": "CB",
        "birth": "1989.04.08",
        "country": "스웨덴",
        "team": "유르고르덴 IF"
    },
    {
        "name": "로빈 콰이손",
        "originName": "로빈 콰이손",
        "pos": "CAM",
        "birth": "1993.10.09",
        "country": "스웨덴",
        "team": "에티파크 FC"
    },
    {
        "name": "B. 크리스탄테",
        "originName": "브라이언 크리스탄테",
        "pos": "CM",
        "birth": "1995.03.03",
        "country": "이탈리아",
        "team": "로마 FC"
    },
    {
        "name": "루이스 슈아우브",
        "originName": "루이스 슈아우브",
        "pos": "RM",
        "birth": "1994.12.29",
        "country": "오스트리아",
        "team": "하노버 96"
    },
    {
        "name": "다니엘 바흐만",
        "originName": "다니엘 바흐만",
        "pos": "GK",
        "birth": "1994.07.09",
        "country": "오스트리아",
        "team": "왓퍼드"
    },
    {
        "name": "레안더르 덴동커르",
        "originName": "레안더르 덴동커르",
        "pos": "CM",
        "birth": "1995.04.15",
        "country": "벨기에",
        "team": "애스턴 빌라"
    },
    {
        "name": "타이론 밍스",
        "originName": "타이론 밍스",
        "pos": "CB",
        "birth": "1993.03.13",
        "country": "잉글랜드",
        "team": "애스턴 빌라"
    },
    {
        "name": "C. 뇌르고르",
        "originName": "크리스티안 뇌르고르",
        "pos": "CM",
        "birth": "1994.03.10",
        "country": "덴마크",
        "team": "브렌트퍼드"
    },
    {
        "name": "브루노 페트코비치",
        "originName": "브루노 페트코비치",
        "pos": "ST",
        "birth": "1994.09.16",
        "country": "크로아티아",
        "team": "디나모 자그레브"
    },
    {
        "name": "에두아르드 소볼",
        "originName": "에두아르드 소볼",
        "pos": "LB",
        "birth": "1995.04.20",
        "country": "우크라이나",
        "team": "스트라스부르 알자스"
    },
    {
        "name": "실반 비드머",
        "originName": "실반 비드머",
        "pos": "RB",
        "birth": "1993.03.05",
        "country": "스위스",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "알레산드로 쇠프",
        "originName": "알레산드로 쇠프",
        "pos": "CM",
        "birth": "1994.02.07",
        "country": "오스트리아",
        "team": "밴쿠버 화이트캡스"
    },
    {
        "name": "키퍼 무어",
        "originName": "키퍼 무어",
        "pos": "ST",
        "birth": "1992.08.08",
        "country": "웨일스",
        "team": "AFC 본머스"
    },
    {
        "name": "해리 윌슨",
        "originName": "해리 윌슨",
        "pos": "CAM",
        "birth": "1997.03.22",
        "country": "웨일스",
        "team": "풀럼"
    },
    {
        "name": "조 모렐",
        "originName": "조 모렐",
        "pos": "CDM",
        "birth": "1997.01.03",
        "country": "웨일스",
        "team": "포츠머스"
    },
    {
        "name": "캘빈 필립스",
        "originName": "캘빈 필립스",
        "pos": "CDM",
        "birth": "1995.12.02",
        "country": "잉글랜드",
        "team": "맨체스터 시티"
    },
    {
        "name": "세르히 시도르추크",
        "originName": "세르히 시도르추크",
        "pos": "CDM",
        "birth": "1991.05.02",
        "country": "우크라이나",
        "team": "KVC 베스테를로"
    },
    {
        "name": "D. 칼버트-르윈",
        "originName": "도미닉 칼버트-르윈",
        "pos": "ST",
        "birth": "1997.03.16",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "G. 카스트로빌리",
        "originName": "가에타노 카스트로빌리",
        "pos": "CM",
        "birth": "1997.02.17",
        "country": "이탈리아",
        "team": "피오렌티나"
    },
    {
        "name": "코너 로버츠",
        "originName": "코너 로버츠",
        "pos": "RB",
        "birth": "1995.09.23",
        "country": "웨일스",
        "team": "번리"
    },
    {
        "name": "야쿠프 얀크토",
        "originName": "야쿠프 얀크토",
        "pos": "LM",
        "birth": "1996.01.19",
        "country": "체코",
        "team": "칼리아리"
    },
    {
        "name": "두예 찰레타-차르",
        "originName": "두예 찰레타-차르",
        "pos": "CB",
        "birth": "1996.09.17",
        "country": "크로아티아",
        "team": "사우샘프턴"
    },
    {
        "name": "플로리안 그릴리치",
        "originName": "플로리안 그릴리치",
        "pos": "CDM",
        "birth": "1995.08.07",
        "country": "오스트리아",
        "team": "TSG 호펜하임"
    },
    {
        "name": "타일러 로버츠",
        "originName": "타일러 로버츠",
        "pos": "CM",
        "birth": "1999.01.12",
        "country": "웨일스",
        "team": "버밍엄 시티"
    },
    {
        "name": "카림 오니시보",
        "originName": "카림 오니시보",
        "pos": "ST",
        "birth": "1992.03.17",
        "country": "오스트리아",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "M. 마트비엔코",
        "originName": "미콜라 마트비엔코",
        "pos": "CB",
        "birth": "1996.05.02",
        "country": "우크라이나",
        "team": "샤흐타르 도네츠크"
    },
    {
        "name": "조 로던",
        "originName": "조 로던",
        "pos": "CB",
        "birth": "1997.10.22",
        "country": "웨일스",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "크리스 메팜",
        "originName": "크리스 메팜",
        "pos": "CB",
        "birth": "1997.11.05",
        "country": "웨일스",
        "team": "AFC 본머스"
    },
    {
        "name": "마티아스 옌센",
        "originName": "마티아스 옌센",
        "pos": "CM",
        "birth": "1996.01.01",
        "country": "덴마크",
        "team": "브렌트퍼드"
    },
    {
        "name": "P. 린하르트",
        "originName": "필리프 린하르트",
        "pos": "CB",
        "birth": "1996.07.11",
        "country": "오스트리아",
        "team": "SC 프라이부르크"
    },
    {
        "name": "C. 파스나히트",
        "originName": "크리스티안 파스나히트",
        "pos": "RM",
        "birth": "1993.11.11",
        "country": "스위스",
        "team": "노리치 시티"
    },
    {
        "name": "안토닌 바라크",
        "originName": "안토닌 바라크",
        "pos": "CAM",
        "birth": "1994.12.03",
        "country": "체코",
        "team": "피오렌티나"
    },
    {
        "name": "Y. 마카렌코",
        "originName": "예우헨 마카렌코",
        "pos": "CDM",
        "birth": "1991.05.21",
        "country": "우크라이나",
        "team": "페헤바르 FC"
    },
    {
        "name": "O. 카라바예우",
        "originName": "올렉산드르 카라바예우",
        "pos": "RB",
        "birth": "1992.06.02",
        "country": "우크라이나",
        "team": "디나모 키이우"
    },
    {
        "name": "루벤 바르가스",
        "originName": "루벤 바르가스",
        "pos": "LM",
        "birth": "1998.08.05",
        "country": "스위스",
        "team": "FC 아우크스부르크"
    },
    {
        "name": "S. 칼라이지치",
        "originName": "사샤 칼라이지치",
        "pos": "ST",
        "birth": "1997.07.07",
        "country": "오스트리아",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "니콜라 블라시치",
        "originName": "니콜라 블라시치",
        "pos": "CAM",
        "birth": "1997.10.04",
        "country": "크로아티아",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "보르나 바리시치",
        "originName": "보르나 바리시치",
        "pos": "LB",
        "birth": "1992.11.10",
        "country": "크로아티아",
        "team": "레인저스"
    },
    {
        "name": "D. 리바코비치",
        "originName": "도미니크 리바코비치",
        "pos": "GK",
        "birth": "1995.01.09",
        "country": "크로아티아",
        "team": "페네르바흐체"
    },
    {
        "name": "미켈 담스고르",
        "originName": "미켈 담스고르",
        "pos": "LW",
        "birth": "2000.07.03",
        "country": "덴마크",
        "team": "브렌트퍼드"
    },
    {
        "name": "요나스 빈",
        "originName": "요나스 빈",
        "pos": "ST",
        "birth": "1999.02.07",
        "country": "덴마크",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "루카시 마소푸스트",
        "originName": "루카시 마소푸스트",
        "pos": "RM",
        "birth": "1993.02.12",
        "country": "체코",
        "team": "슬라비아 프라하"
    },
    {
        "name": "C. 바움가르트너",
        "originName": "크리스토프 바움가르트너",
        "pos": "CAM",
        "birth": "1999.08.01",
        "country": "오스트리아",
        "team": "RB 라이프치히"
    },
    {
        "name": "비탈리 미콜렌코",
        "originName": "비탈리 미콜렌코",
        "pos": "LB",
        "birth": "1999.05.29",
        "country": "우크라이나",
        "team": "에버턴"
    },
    {
        "name": "아르템 베세딘",
        "originName": "아르템 베세딘",
        "pos": "ST",
        "birth": "1996.03.31",
        "country": "우크라이나",
        "team": "오르다바시 심켄트"
    },
    {
        "name": "딜런 레빗",
        "originName": "딜런 레빗",
        "pos": "CM",
        "birth": "2000.11.17",
        "country": "웨일스",
        "team": "히버니언"
    },
    {
        "name": "M. 샤파렌코",
        "originName": "미콜라 샤파렌코",
        "pos": "CM",
        "birth": "1998.10.04",
        "country": "우크라이나",
        "team": "디나모 키이우"
    },
    {
        "name": "헤오르히 부시찬",
        "originName": "헤오르히 부시찬",
        "pos": "GK",
        "birth": "1994.05.31",
        "country": "우크라이나",
        "team": "디나모 키이우"
    },
    {
        "name": "블라디미르 초우팔",
        "originName": "블라디미르 초우팔",
        "pos": "RB",
        "birth": "1992.08.22",
        "country": "체코",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "J. 카유스테",
        "originName": "옌스-리스 카유스테",
        "pos": "CM",
        "birth": "1999.08.10",
        "country": "스웨덴",
        "team": "나폴리 FC"
    },
    {
        "name": "알렉스 크랄",
        "originName": "알렉스 크랄",
        "pos": "CDM",
        "birth": "1998.05.19",
        "country": "체코",
        "team": "스파르타크 모스크바"
    },
    {
        "name": "페트르 셰브치크",
        "originName": "페트르 셰브치크",
        "pos": "RM",
        "birth": "1994.05.04",
        "country": "체코",
        "team": "슬라비아 프라하"
    },
    {
        "name": "토마시 홀레시",
        "originName": "토마시 홀레시",
        "pos": "CDM",
        "birth": "1993.03.31",
        "country": "체코",
        "team": "슬라비아 프라하"
    },
    {
        "name": "루카 이바누셰츠",
        "originName": "루카 이바누셰츠",
        "pos": "CM",
        "birth": "1998.11.26",
        "country": "크로아티아",
        "team": "페예노르트"
    },
    {
        "name": "조 콜",
        "originName": "조 콜",
        "pos": "RW",
        "birth": "1981.11.08",
        "country": "잉글랜드",
        "team": "탬파베이 라우디스"
    },
    {
        "name": "I. 자바르니",
        "originName": "일리아 자바르니",
        "pos": "CB",
        "birth": "2002.09.01",
        "country": "우크라이나",
        "team": "AFC 본머스"
    },
    {
        "name": "J. 유라노비치",
        "originName": "요시프 유라노비치",
        "pos": "RB",
        "birth": "1995.08.16",
        "country": "크로아티아",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "L. 릭켄",
        "originName": "라스 릭켄",
        "pos": "CF",
        "birth": "1976.07.10",
        "country": "독일",
        "team": "보루시아 도르트문트 II"
    },
    {
        "name": "아베디 펠레",
        "originName": "아베디 아이유",
        "pos": "LW",
        "birth": "1964.11.05",
        "country": "가나",
        "team": "알아인"
    },
    {
        "name": "라세 쇠네",
        "originName": "라세 쇠네",
        "pos": "CM",
        "birth": "1986.05.27",
        "country": "덴마크",
        "team": "NEC 네이메헌"
    },
    {
        "name": "I. 코르도바",
        "originName": "이반 라미로 코르도바",
        "pos": "CB",
        "birth": "1976.08.11",
        "country": "콜롬비아",
        "team": "인테르"
    },
    {
        "name": "다니엘 카리수",
        "originName": "다니엘 필리피 마르틴스 카리수",
        "pos": "CB",
        "birth": "1988.08.04",
        "country": "포르투갈",
        "team": "UD 알메리아"
    },
    {
        "name": "티모테 콜로제자크",
        "originName": "티모테 콜로제자크",
        "pos": "CB",
        "birth": "1991.10.01",
        "country": "프랑스",
        "team": "파리 FC"
    },
    {
        "name": "요디 루코키",
        "originName": "요디 루코키",
        "pos": "RW",
        "birth": "1992.11.15",
        "country": "콩고 민주 공화국",
        "team": "FC 트벤터"
    },
    {
        "name": "루카 마로네",
        "originName": "루카 마로네",
        "pos": "CB",
        "birth": "1990.03.28",
        "country": "이탈리아",
        "team": "레코"
    },
    {
        "name": "디오구 피게이라스",
        "originName": "디오구 주제 피게이라스",
        "pos": "RB",
        "birth": "1991.07.01",
        "country": "포르투갈",
        "team": "FC 파말리캉"
    },
    {
        "name": "정상빈",
        "originName": "정상빈",
        "pos": "ST",
        "birth": "2002.04.01",
        "country": "대한민국",
        "team": "미네소타 유나이티드 FC"
    },
    {
        "name": "아템 벤아르파",
        "originName": "아템 벤아르파",
        "pos": "CF",
        "birth": "1987.03.07",
        "country": "프랑스",
        "team": "LOSC 릴"
    },
    {
        "name": "A. 코르다츠",
        "originName": "알렉스 코르다츠",
        "pos": "GK",
        "birth": "1983.01.01",
        "country": "이탈리아",
        "team": "인테르"
    },
    {
        "name": "이보라",
        "originName": "비센테 이보라 데라푸엔테",
        "pos": "CDM",
        "birth": "1988.01.16",
        "country": "스페인",
        "team": "올림피아코스 CFP"
    },
    {
        "name": "자카리아 라비아드",
        "originName": "자카리아 라비아드",
        "pos": "CAM",
        "birth": "1993.03.09",
        "country": "모로코",
        "team": "FC 위트레흐트"
    },
    {
        "name": "수알리오 메이테",
        "originName": "수알리오 메이테",
        "pos": "CM",
        "birth": "1994.03.17",
        "country": "프랑스",
        "team": "SL 벤피카"
    },
    {
        "name": "다닐로 담브로시오",
        "originName": "다닐로 담브로시오",
        "pos": "CB",
        "birth": "1988.09.09",
        "country": "이탈리아",
        "team": "AC 몬차"
    },
    {
        "name": "M. 베티넬리",
        "originName": "마커스 베티넬리",
        "pos": "GK",
        "birth": "1992.05.24",
        "country": "잉글랜드",
        "team": "첼시"
    },
    {
        "name": "루이스 네투",
        "originName": "루이스 카를루스 노부 네투",
        "pos": "CB",
        "birth": "1988.05.26",
        "country": "포르투갈",
        "team": "스포르팅 CP"
    },
    {
        "name": "알베르토 모레노",
        "originName": "알베르토 모레노 페레스",
        "pos": "LB",
        "birth": "1992.07.05",
        "country": "스페인",
        "team": "비야레알 CF"
    },
    {
        "name": "모이 고메스",
        "originName": "모이세스 고메스 보르도나도",
        "pos": "LM",
        "birth": "1994.06.23",
        "country": "스페인",
        "team": "오사수나"
    },
    {
        "name": "히카르두 이스가이우",
        "originName": "히카르두 소자 이스가이우",
        "pos": "RWB",
        "birth": "1993.05.16",
        "country": "포르투갈",
        "team": "스포르팅 CP"
    },
    {
        "name": "지우베르투",
        "originName": "지우베르투 모라에스 주니오르",
        "pos": "RB",
        "birth": "1993.03.07",
        "country": "브라질",
        "team": "바이아"
    },
    {
        "name": "R. 갈리아르디니",
        "originName": "로베르토 갈리아르디니",
        "pos": "CDM",
        "birth": "1994.04.07",
        "country": "이탈리아",
        "team": "AC 몬차"
    },
    {
        "name": "숀 클라이버르",
        "originName": "숀 클라이버르",
        "pos": "RB",
        "birth": "1994.07.31",
        "country": "수리남",
        "team": "브뢴뷔 IF"
    },
    {
        "name": "에우통 레이치",
        "originName": "에우통 브란트 알레이슈 레이치",
        "pos": "GK",
        "birth": "1990.11.02",
        "country": "브라질",
        "team": "안탈랴스포르"
    },
    {
        "name": "J. 옹게네",
        "originName": "제롬 옹게케",
        "pos": "CB",
        "birth": "1997.12.22",
        "country": "카메룬",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "누누 산투스",
        "originName": "누누 미겔 고메스 두스 산투스",
        "pos": "LW",
        "birth": "1995.02.13",
        "country": "포르투갈",
        "team": "스포르팅 CP"
    },
    {
        "name": "에베르통",
        "originName": "에베르통 소자 소아리스",
        "pos": "LW",
        "birth": "1996.03.22",
        "country": "브라질",
        "team": "플라멩구"
    },
    {
        "name": "바예호",
        "originName": "헤수스 바예호 라사로",
        "pos": "CB",
        "birth": "1997.01.05",
        "country": "스페인",
        "team": "레알 마드리드"
    },
    {
        "name": "알폰소",
        "originName": "알폰소 페드라사 사그",
        "pos": "LB",
        "birth": "1996.04.09",
        "country": "스페인",
        "team": "비야레알 CF"
    },
    {
        "name": "마테우스 헤이스",
        "originName": "마테우스 헤이스 지 리마",
        "pos": "LB",
        "birth": "1995.02.18",
        "country": "브라질",
        "team": "스포르팅 CP"
    },
    {
        "name": "호드리구 피뉴",
        "originName": "호드리구 쿠냐 페헤이라 지 피뉴",
        "pos": "ST",
        "birth": "1991.05.30",
        "country": "브라질",
        "team": "쿠리치바"
    },
    {
        "name": "베르나르두",
        "originName": "베르나르두 페르난지스",
        "pos": "LB",
        "birth": "1995.05.14",
        "country": "브라질",
        "team": "VfL 보훔 1848"
    },
    {
        "name": "디오구 곤살베스",
        "originName": "디오구 안토니우 쿠피두 곤살베스",
        "pos": "RM",
        "birth": "1997.02.06",
        "country": "포르투갈",
        "team": "FC 코펜하겐"
    },
    {
        "name": "I. 라두",
        "originName": "요누츠 안드레이 라두",
        "pos": "GK",
        "birth": "1997.05.28",
        "country": "루마니아",
        "team": "인테르"
    },
    {
        "name": "앙투안 베르네드",
        "originName": "앙투안 베르네드",
        "pos": "CDM",
        "birth": "1999.05.26",
        "country": "프랑스",
        "team": "로잔 스포르"
    },
    {
        "name": "루카스 베리시무",
        "originName": "루카스 베리시무 다시우바",
        "pos": "CB",
        "birth": "1995.07.02",
        "country": "브라질",
        "team": "SL 벤피카"
    },
    {
        "name": "오마 리처즈",
        "originName": "오마 리처즈",
        "pos": "LB",
        "birth": "1998.02.15",
        "country": "잉글랜드",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "세카",
        "originName": "미구엘 앙겔루 자 실바 로카",
        "pos": "CM",
        "birth": "1994.11.10",
        "country": "포르투갈",
        "team": "스타드 렌"
    },
    {
        "name": "G. 구드문드손",
        "originName": "가브리엘 구드문드손",
        "pos": "LB",
        "birth": "1999.04.29",
        "country": "스웨덴",
        "team": "LOSC 릴"
    },
    {
        "name": "주앙 비르지니아",
        "originName": "주앙 마누엘 네베스 비르지니아",
        "pos": "GK",
        "birth": "1999.10.10",
        "country": "포르투갈",
        "team": "에버턴"
    },
    {
        "name": "브루누 타바타",
        "originName": "브루누 비니시우스 소자 하무스",
        "pos": "RW",
        "birth": "1997.03.30",
        "country": "브라질",
        "team": "파우메이라스"
    },
    {
        "name": "페르 스휘르스",
        "originName": "페르 스휘르스",
        "pos": "CB",
        "birth": "1999.11.26",
        "country": "네덜란드",
        "team": "토리노"
    },
    {
        "name": "N. 라도니치",
        "originName": "네마냐 라도니치",
        "pos": "LM",
        "birth": "1996.02.15",
        "country": "세르비아",
        "team": "토리노"
    },
    {
        "name": "M. 다라미",
        "originName": "모하메드 다라미",
        "pos": "LW",
        "birth": "2002.01.07",
        "country": "덴마크",
        "team": "스타드 랭스"
    },
    {
        "name": "불라예 디아",
        "originName": "불라예 디아",
        "pos": "ST",
        "birth": "1996.11.16",
        "country": "세네갈",
        "team": "살레르니타나"
    },
    {
        "name": "N. 카팔도",
        "originName": "니콜라스 카팔도",
        "pos": "CM",
        "birth": "1998.09.14",
        "country": "아르헨티나",
        "team": "레드불 잘츠부르크"
    },
    {
        "name": "J. 디나 에빔베",
        "originName": "쥐니오르 디나 에빔베",
        "pos": "CM",
        "birth": "2000.11.21",
        "country": "프랑스",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "B. 브로비",
        "originName": "브라이언 브로비",
        "pos": "ST",
        "birth": "2002.02.01",
        "country": "네덜란드",
        "team": "아약스"
    },
    {
        "name": "이사크 리아지",
        "originName": "이사크 리아지",
        "pos": "RM",
        "birth": "2002.04.10",
        "country": "프랑스",
        "team": "알두하일"
    },
    {
        "name": "K. 피옹트코프스키",
        "originName": "카밀 피옹트코프스키",
        "pos": "CB",
        "birth": "2000.06.21",
        "country": "폴란드",
        "team": "레드불 잘츠부르크"
    },
    {
        "name": "다니엘 브라간사",
        "originName": "다니엘 산투스 브라간사",
        "pos": "CM",
        "birth": "1999.05.27",
        "country": "포르투갈",
        "team": "스포르팅 CP"
    },
    {
        "name": "K. 테일러",
        "originName": "케네스 테일러",
        "pos": "CM",
        "birth": "2002.05.16",
        "country": "네덜란드",
        "team": "아약스"
    },
    {
        "name": "M. 틸만",
        "originName": "말리크 틸만",
        "pos": "ST",
        "birth": "2002.05.28",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "모라투",
        "originName": "펠리피 호드리게스 다시우바",
        "pos": "CB",
        "birth": "2001.06.30",
        "country": "브라질",
        "team": "SL 벤피카"
    },
    {
        "name": "L. 수치치",
        "originName": "루카 수치치",
        "pos": "RM",
        "birth": "2002.09.08",
        "country": "크로아티아",
        "team": "레드불 잘츠부르크"
    },
    {
        "name": "A. 엘랑가",
        "originName": "안토니 엘랑가",
        "pos": "LW",
        "birth": "2002.04.27",
        "country": "스웨덴",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "곤살루 이나시우",
        "originName": "곤살루 베르나르두 이나시우",
        "pos": "CB",
        "birth": "2001.08.25",
        "country": "포르투갈",
        "team": "스포르팅 CP"
    },
    {
        "name": "A. 오나나",
        "originName": "아마두 오나나",
        "pos": "CDM",
        "birth": "2001.08.16",
        "country": "벨기에",
        "team": "에버턴"
    },
    {
        "name": "D. 렌스",
        "originName": "디바인 렌스",
        "pos": "RB",
        "birth": "2003.01.18",
        "country": "네덜란드",
        "team": "아약스"
    },
    {
        "name": "J. 아다무",
        "originName": "주니어 아다무",
        "pos": "ST",
        "birth": "2001.06.06",
        "country": "오스트리아",
        "team": "SC 프라이부르크"
    },
    {
        "name": "S. 쇼레티레",
        "originName": "숄라 쇼레티레",
        "pos": "LW",
        "birth": "2004.02.02",
        "country": "잉글랜드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "D. 긴도",
        "originName": "다우다 긴도",
        "pos": "LB",
        "birth": "2002.10.14",
        "country": "말리",
        "team": "레드불 잘츠부르크"
    },
    {
        "name": "B. 셰슈코",
        "originName": "베냐민 셰슈코",
        "pos": "ST",
        "birth": "2003.05.31",
        "country": "슬로베니아",
        "team": "RB 라이프치히"
    },
    {
        "name": "M. 키어고르",
        "originName": "마우리츠 키어고르",
        "pos": "CAM",
        "birth": "2003.06.26",
        "country": "덴마크",
        "team": "레드불 잘츠부르크"
    },
    {
        "name": "미겔 구티에레스",
        "originName": "미겔 구티에레스 오르테가",
        "pos": "LB",
        "birth": "2001.07.27",
        "country": "스페인",
        "team": "지로나 FC"
    },
    {
        "name": "나지뉴",
        "originName": "파비우 B. J. 나지뉴",
        "pos": "LWB",
        "birth": "2003.07.20",
        "country": "포르투갈",
        "team": "스포르팅 CP"
    },
    {
        "name": "안토니오 블랑코",
        "originName": "안토니오 블랑코 콘데",
        "pos": "CM",
        "birth": "2000.07.23",
        "country": "스페인",
        "team": "레알 마드리드"
    },
    {
        "name": "크리스티안 귄터",
        "originName": "크리스티안 귄터",
        "pos": "LB",
        "birth": "1993.02.28",
        "country": "독일",
        "team": "SC 프라이부르크"
    },
    {
        "name": "파울루 베르나르두",
        "originName": "파울루 길레르미 곤살베스 베르나르두",
        "pos": "CAM",
        "birth": "2002.01.24",
        "country": "포르투갈",
        "team": "SL 벤피카"
    },
    {
        "name": "곤살루 에스테베스",
        "originName": "곤살루 에스테베스",
        "pos": "RWB",
        "birth": "2004.02.27",
        "country": "포르투갈",
        "team": "스포르팅 CP"
    },
    {
        "name": "하비 세라노",
        "originName": "하비에르 세라노 마르티네스",
        "pos": "CDM",
        "birth": "2003.01.16",
        "country": "스페인",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "T. 모턴",
        "originName": "타일러 모턴",
        "pos": "CM",
        "birth": "2002.10.31",
        "country": "잉글랜드",
        "team": "리버풀"
    },
    {
        "name": "J. 두덱",
        "originName": "예르지 두덱",
        "pos": "GK",
        "birth": "1973.03.23",
        "country": "폴란드",
        "team": "레알 마드리드"
    },
    {
        "name": "A. 모스토보이",
        "originName": "알렉산드르 모스토보이",
        "pos": "CAM",
        "birth": "1968.08.22",
        "country": "러시아",
        "team": "데포르티보 알라베스"
    },
    {
        "name": "로비 킨",
        "originName": "로비 킨",
        "pos": "ST",
        "birth": "1980.07.08",
        "country": "아일랜드",
        "team": "ATK 풋볼 클럽"
    },
    {
        "name": "팀 케이힐",
        "originName": "팀 케이힐",
        "pos": "ST",
        "birth": "1979.12.06",
        "country": "호주",
        "team": "잠셰드풀 FC"
    },
    {
        "name": "A. 디 나탈레",
        "originName": "안토니오 디나탈레",
        "pos": "CF",
        "birth": "1977.10.13",
        "country": "이탈리아",
        "team": "우디네세"
    },
    {
        "name": "클린트 뎀프시",
        "originName": "클린트 뎀프시",
        "pos": "CF",
        "birth": "1983.03.09",
        "country": "미국",
        "team": "시애틀 사운더스"
    },
    {
        "name": "S. 알자베르",
        "originName": "사미 알자베르",
        "pos": "ST",
        "birth": "1972.12.11",
        "country": "사우디아라비아",
        "team": "알힐랄"
    },
    {
        "name": "호르헤 캄포스",
        "originName": "호르헤 캄포스",
        "pos": "GK",
        "birth": "1966.10.15",
        "country": "멕시코",
        "team": "푸에블라"
    },
    {
        "name": "J. 콜러",
        "originName": "위르겐 콜러",
        "pos": "CB",
        "birth": "1965.10.06",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "D. 밀리토",
        "originName": "디에고 밀리토",
        "pos": "ST",
        "birth": "1979.06.12",
        "country": "아르헨티나",
        "team": "라싱 클루브 아베야네다"
    },
    {
        "name": "D. 지놀라",
        "originName": "다비드 지놀라",
        "pos": "LW",
        "birth": "1967.01.25",
        "country": "프랑스",
        "team": "에버턴"
    },
    {
        "name": "토드 캔트웰",
        "originName": "토드 캔트웰",
        "pos": "RW",
        "birth": "1998.02.27",
        "country": "잉글랜드",
        "team": "레인저스"
    },
    {
        "name": "악셀 디사시",
        "originName": "악셀 디사시",
        "pos": "CB",
        "birth": "1998.03.11",
        "country": "프랑스",
        "team": "첼시"
    },
    {
        "name": "벤 갓프리",
        "originName": "벤 갓프리",
        "pos": "CB",
        "birth": "1998.01.15",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "에런 램즈데일",
        "originName": "에런 램즈데일",
        "pos": "GK",
        "birth": "1998.05.14",
        "country": "잉글랜드",
        "team": "아스널"
    },
    {
        "name": "G. 스카마카",
        "originName": "잔루카 스카마카",
        "pos": "ST",
        "birth": "1999.01.01",
        "country": "이탈리아",
        "team": "베르가모 칼초"
    },
    {
        "name": "루카스 은메차",
        "originName": "루카스 은메차",
        "pos": "CF",
        "birth": "1998.12.14",
        "country": "독일",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "오렐 망갈라",
        "originName": "오렐 망갈라",
        "pos": "CM",
        "birth": "1998.03.18",
        "country": "벨기에",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "O. 에두아르",
        "originName": "오드손 에두아르",
        "pos": "ST",
        "birth": "1998.01.16",
        "country": "프랑스",
        "team": "크리스털 팰리스"
    },
    {
        "name": "이베레치 이즈",
        "originName": "이베레치 이즈",
        "pos": "CAM",
        "birth": "1998.06.29",
        "country": "잉글랜드",
        "team": "크리스털 팰리스"
    },
    {
        "name": "도글라스 루이스",
        "originName": "도글라스 루이스 소아리스 지 파울루",
        "pos": "CDM",
        "birth": "1998.05.09",
        "country": "브라질",
        "team": "애스턴 빌라"
    },
    {
        "name": "E. 스미스 로",
        "originName": "에밀 스미스 로",
        "pos": "CAM",
        "birth": "2000.07.28",
        "country": "잉글랜드",
        "team": "아스널"
    },
    {
        "name": "조지프 윌록",
        "originName": "조 윌록",
        "pos": "CAM",
        "birth": "1999.08.20",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "노아 랑",
        "originName": "노아 랑",
        "pos": "CAM",
        "birth": "1999.06.17",
        "country": "네덜란드",
        "team": "PSV"
    },
    {
        "name": "팻슨 다카",
        "originName": "팻슨 다카",
        "pos": "ST",
        "birth": "1998.10.09",
        "country": "잠비아",
        "team": "레스터 시티"
    },
    {
        "name": "M. 구에히",
        "originName": "마크 구에히",
        "pos": "CB",
        "birth": "2000.07.13",
        "country": "잉글랜드",
        "team": "크리스털 팰리스"
    },
    {
        "name": "B. 바디아실",
        "originName": "브누아 바디아실",
        "pos": "CB",
        "birth": "2001.03.26",
        "country": "프랑스",
        "team": "첼시"
    },
    {
        "name": "타릭 람프티",
        "originName": "타릭 람프티",
        "pos": "RB",
        "birth": "2000.09.30",
        "country": "잉글랜드",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "I. 메슬리에",
        "originName": "일리안 메슬리에",
        "pos": "GK",
        "birth": "2000.03.02",
        "country": "프랑스",
        "team": "리즈 유나이티드"
    },
    {
        "name": "보르나 소사",
        "originName": "보르나 소사",
        "pos": "LB",
        "birth": "1998.01.21",
        "country": "크로아티아",
        "team": "아약스"
    },
    {
        "name": "소피안 디오프",
        "originName": "소피안 디오프",
        "pos": "CAM",
        "birth": "2000.06.09",
        "country": "프랑스",
        "team": "OGC 니스"
    },
    {
        "name": "브라이안 힐",
        "originName": "브라이안 힐 살바티에라",
        "pos": "LW",
        "birth": "2001.02.11",
        "country": "스페인",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "J. 부르카르트",
        "originName": "요나탄 부르카르트",
        "pos": "CF",
        "birth": "2000.07.11",
        "country": "독일",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "오딜롱 코수누",
        "originName": "오딜롱 코수누",
        "pos": "CB",
        "birth": "2001.01.04",
        "country": "코트디부아르",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "샤를 드케텔라르",
        "originName": "샤를 드케텔라르",
        "pos": "CF",
        "birth": "2001.03.10",
        "country": "벨기에",
        "team": "AC 밀란"
    },
    {
        "name": "이바녜스",
        "originName": "호제르 이바녜스 다 시우바",
        "pos": "CB",
        "birth": "1998.11.23",
        "country": "브라질",
        "team": "알아흘리"
    },
    {
        "name": "마이클 올리스",
        "originName": "마이클 올리스",
        "pos": "CAM",
        "birth": "2001.12.12",
        "country": "프랑스",
        "team": "크리스털 팰리스"
    },
    {
        "name": "수비멘디",
        "originName": "마르틴 수비멘디 이바녜스",
        "pos": "CDM",
        "birth": "1999.02.02",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "R. 셰르키",
        "originName": "라얀 셰르키",
        "pos": "RW",
        "birth": "2003.08.17",
        "country": "프랑스",
        "team": "올랭피크 리옹"
    },
    {
        "name": "일라시 모리바",
        "originName": "일라시 모리바",
        "pos": "CM",
        "birth": "2003.01.19",
        "country": "기니",
        "team": "RB 라이프치히"
    },
    {
        "name": "파비오 실바",
        "originName": "파비우 다니엘 소아르스 실바",
        "pos": "ST",
        "birth": "2002.07.19",
        "country": "포르투갈",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "K. 술레마나",
        "originName": "카말딘 술레마나",
        "pos": "LW",
        "birth": "2002.02.15",
        "country": "가나",
        "team": "사우샘프턴"
    },
    {
        "name": "N. 마두에케",
        "originName": "노니 마두에케",
        "pos": "RW",
        "birth": "2002.03.10",
        "country": "잉글랜드",
        "team": "첼시"
    },
    {
        "name": "P. 사르",
        "originName": "파페 마타르 사르",
        "pos": "CM",
        "birth": "2002.09.14",
        "country": "세네갈",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "T. 리브라멘토",
        "originName": "티노 리브라멘토",
        "pos": "RB",
        "birth": "2002.11.12",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "조슈아 킹",
        "originName": "조슈아 킹",
        "pos": "ST",
        "birth": "1992.01.15",
        "country": "노르웨이",
        "team": "페네르바흐체"
    },
    {
        "name": "브누아 코스틸",
        "originName": "브누아 코스틸",
        "pos": "GK",
        "birth": "1987.07.03",
        "country": "프랑스",
        "team": "살레르니타나"
    },
    {
        "name": "마메 디우프",
        "originName": "마메 디우프",
        "pos": "ST",
        "birth": "1987.12.16",
        "country": "세네갈",
        "team": "코니아스포르"
    },
    {
        "name": "리로이 페르",
        "originName": "리로이 페르",
        "pos": "CM",
        "birth": "1990.01.05",
        "country": "네덜란드",
        "team": "알라니아스포르"
    },
    {
        "name": "다니엘 디다비",
        "originName": "다니엘 디다비",
        "pos": "CAM",
        "birth": "1990.02.21",
        "country": "독일",
        "team": "VfB 슈투트가르트"
    },
    {
        "name": "세아드 콜라시나츠",
        "originName": "세아드 콜라시나츠",
        "pos": "LB",
        "birth": "1993.06.20",
        "country": "보스니아 헤르체고비나",
        "team": "베르가모 칼초"
    },
    {
        "name": "라시드 게잘",
        "originName": "라시드 게잘",
        "pos": "RM",
        "birth": "1992.05.09",
        "country": "알제리",
        "team": "베식타슈"
    },
    {
        "name": "R. 보레",
        "originName": "라파엘 산토스 보레",
        "pos": "ST",
        "birth": "1995.09.15",
        "country": "콜롬비아",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "산티 미나",
        "originName": "산티아고 미나 로렌소",
        "pos": "ST",
        "birth": "1995.12.07",
        "country": "스페인",
        "team": "셀타 비고"
    },
    {
        "name": "R. 시미치",
        "originName": "로코 시미치",
        "pos": "ST",
        "birth": "2003.09.10",
        "country": "크로아티아",
        "team": "레드불 잘츠부르크"
    },
    {
        "name": "소피안 암라바트",
        "originName": "소피안 암라바트",
        "pos": "CDM",
        "birth": "1996.08.21",
        "country": "모로코",
        "team": "피오렌티나"
    },
    {
        "name": "B. 드롱고프스키",
        "originName": "바르트워미에이 드롱고프스키",
        "pos": "GK",
        "birth": "1997.08.19",
        "country": "폴란드",
        "team": "스페치아"
    },
    {
        "name": "라울 데 토마스",
        "originName": "라울 데 토마스 고메스",
        "pos": "ST",
        "birth": "1994.10.17",
        "country": "스페인",
        "team": "라요 바예카노"
    },
    {
        "name": "안드레아 페타냐",
        "originName": "안드레아 페타냐",
        "pos": "ST",
        "birth": "1995.06.30",
        "country": "이탈리아",
        "team": "AC 몬차"
    },
    {
        "name": "라파 미르",
        "originName": "라파엘 미르 비센테",
        "pos": "ST",
        "birth": "1997.06.18",
        "country": "스페인",
        "team": "세비야 FC"
    },
    {
        "name": "마리우스 볼프",
        "originName": "마리우스 볼프",
        "pos": "RM",
        "birth": "1995.05.27",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "러즈반 마린",
        "originName": "러즈반 마린",
        "pos": "CM",
        "birth": "1996.05.23",
        "country": "루마니아",
        "team": "칼리아리"
    },
    {
        "name": "도디 루케바키오",
        "originName": "도디 루케바키오",
        "pos": "ST",
        "birth": "1997.09.24",
        "country": "벨기에",
        "team": "세비야 FC"
    },
    {
        "name": "A. 피나몬티",
        "originName": "안드레아 피나몬티",
        "pos": "ST",
        "birth": "1999.05.19",
        "country": "이탈리아",
        "team": "사수올로"
    },
    {
        "name": "K. 마브로파노스",
        "originName": "콘스탄티노스 마브로파노스",
        "pos": "CB",
        "birth": "1997.12.11",
        "country": "그리스",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "마르코 로그",
        "originName": "마르코 로그",
        "pos": "CM",
        "birth": "1995.07.19",
        "country": "크로아티아",
        "team": "칼리아리"
    },
    {
        "name": "A. 칼리무엔도",
        "originName": "아르노 칼리무엔도",
        "pos": "ST",
        "birth": "2002.01.20",
        "country": "프랑스",
        "team": "스타드 렌"
    },
    {
        "name": "후안미",
        "originName": "후안 미겔 히메네스 로페스",
        "pos": "LM",
        "birth": "1993.05.20",
        "country": "스페인",
        "team": "레알 베티스"
    },
    {
        "name": "오스카르 트레호",
        "originName": "오스카르 트레호",
        "pos": "CAM",
        "birth": "1988.04.26",
        "country": "아르헨티나",
        "team": "라요 바예카노"
    },
    {
        "name": "I. 일리치",
        "originName": "이반 일리치",
        "pos": "CM",
        "birth": "2001.03.17",
        "country": "세르비아",
        "team": "토리노"
    },
    {
        "name": "마누엘 리만",
        "originName": "마누엘 리만",
        "pos": "GK",
        "birth": "1988.09.09",
        "country": "독일",
        "team": "VfL 보훔 1848"
    },
    {
        "name": "G. 카프라리",
        "originName": "잔루카 카프라리",
        "pos": "CF",
        "birth": "1993.07.30",
        "country": "이탈리아",
        "team": "AC 몬차"
    },
    {
        "name": "G. 트라우너",
        "originName": "게르노트 트라우너",
        "pos": "CB",
        "birth": "1992.03.25",
        "country": "오스트리아",
        "team": "페예노르트"
    },
    {
        "name": "하마리 트라오레",
        "originName": "하마리 트라오레",
        "pos": "RB",
        "birth": "1992.01.27",
        "country": "말리",
        "team": "레알 소시에다드"
    },
    {
        "name": "재러드 보언",
        "originName": "재러드 보언",
        "pos": "RM",
        "birth": "1996.12.20",
        "country": "잉글랜드",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "유리 메데이루스",
        "originName": "유리 주제 피칸수 메데이루스",
        "pos": "CF",
        "birth": "1994.07.10",
        "country": "포르투갈",
        "team": "알나스르 SC 두바이"
    },
    {
        "name": "F. 아우르스네스",
        "originName": "프레드릭 아우르스네스",
        "pos": "CDM",
        "birth": "1995.12.10",
        "country": "노르웨이",
        "team": "SL 벤피카"
    },
    {
        "name": "O. 보스카글리",
        "originName": "올리비에 보스카글리",
        "pos": "CB",
        "birth": "1997.11.18",
        "country": "프랑스",
        "team": "PSV"
    },
    {
        "name": "코르도바",
        "originName": "이니고 코르도바 케레헤타",
        "pos": "RM",
        "birth": "1997.03.13",
        "country": "스페인",
        "team": "포르투나 시타르트"
    },
    {
        "name": "시몽 반자",
        "originName": "시몽 반자",
        "pos": "ST",
        "birth": "1996.08.13",
        "country": "프랑스",
        "team": "SC 브라가"
    },
    {
        "name": "V. 파블리디스",
        "originName": "방겔리스 파블리디스",
        "pos": "ST",
        "birth": "1998.11.21",
        "country": "그리스",
        "team": "AZ"
    },
    {
        "name": "L. 시니스테라",
        "originName": "루이스 시니스테라",
        "pos": "LW",
        "birth": "1999.06.17",
        "country": "콜롬비아",
        "team": "리즈 유나이티드"
    },
    {
        "name": "페드리뉴",
        "originName": "페드루 필리프 바르보자 모레이라",
        "pos": "CM",
        "birth": "1992.12.20",
        "country": "포르투갈",
        "team": "MKE 앙카라귀쥐"
    },
    {
        "name": "프란 나바로",
        "originName": "프란시스코 호세 나바로 알리아가",
        "pos": "ST",
        "birth": "1998.02.03",
        "country": "스페인",
        "team": "FC 포르투"
    },
    {
        "name": "안드레 페헤이라",
        "originName": "안드레 필리프 M. 히베이루 페헤이라",
        "pos": "GK",
        "birth": "1996.05.29",
        "country": "포르투갈",
        "team": "그라나다 CF"
    },
    {
        "name": "로브로 마예르",
        "originName": "로브로 마예르",
        "pos": "CM",
        "birth": "1998.01.17",
        "country": "크로아티아",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "윌리앙 주제",
        "originName": "윌리앙 주제 다 시우바",
        "pos": "ST",
        "birth": "1991.11.23",
        "country": "브라질",
        "team": "레알 베티스"
    },
    {
        "name": "마테우스 코스타",
        "originName": "마테우스 지 멜루 코스타",
        "pos": "CB",
        "birth": "1995.01.26",
        "country": "브라질",
        "team": "마리티무"
    },
    {
        "name": "제리 생유스터",
        "originName": "제리 생유스터",
        "pos": "CB",
        "birth": "1996.10.19",
        "country": "네덜란드",
        "team": "스포르팅 CP"
    },
    {
        "name": "매트 터너",
        "originName": "매트 터너",
        "pos": "GK",
        "birth": "1994.06.24",
        "country": "미국",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "마티아 차카니",
        "originName": "마티아 차카니",
        "pos": "LW",
        "birth": "1995.06.16",
        "country": "이탈리아",
        "team": "라티움"
    },
    {
        "name": "T. 아워니이",
        "originName": "타이워 아워니이",
        "pos": "ST",
        "birth": "1997.08.12",
        "country": "나이지리아",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "J. 헤우게",
        "originName": "옌스 페테르 헤우게",
        "pos": "LM",
        "birth": "1999.10.12",
        "country": "노르웨이",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "이브 비수마",
        "originName": "이브 비수마",
        "pos": "CDM",
        "birth": "1996.08.30",
        "country": "말리",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "K. 듀스버리-홀",
        "originName": "키어런 듀스버리-홀",
        "pos": "CM",
        "birth": "1998.09.06",
        "country": "잉글랜드",
        "team": "레스터 시티"
    },
    {
        "name": "에디 은케티아",
        "originName": "에디 은케티아",
        "pos": "ST",
        "birth": "1999.05.30",
        "country": "잉글랜드",
        "team": "아스널"
    },
    {
        "name": "타이럴 말라시아",
        "originName": "타이럴 말라시아",
        "pos": "LB",
        "birth": "1999.08.17",
        "country": "네덜란드",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "타이릭 미첼",
        "originName": "타이릭 미첼",
        "pos": "LB",
        "birth": "1999.09.01",
        "country": "잉글랜드",
        "team": "크리스털 팰리스"
    },
    {
        "name": "앤서니 고든",
        "originName": "앤서니 고든",
        "pos": "LM",
        "birth": "2001.02.24",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "제드 스펜스",
        "originName": "제드 스펜스",
        "pos": "RB",
        "birth": "2000.08.09",
        "country": "잉글랜드",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "키야나 후버르",
        "originName": "키야나 후버르",
        "pos": "RWB",
        "birth": "2002.01.18",
        "country": "네덜란드",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "N. 아게르드",
        "originName": "나예프 아게르드",
        "pos": "CB",
        "birth": "1996.03.30",
        "country": "모로코",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "사무엘 리누",
        "originName": "사무엘 지아스 리누",
        "pos": "LW",
        "birth": "1999.12.23",
        "country": "브라질",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "제이컵 램지",
        "originName": "제이컵 램지",
        "pos": "CM",
        "birth": "2001.05.21",
        "country": "잉글랜드",
        "team": "애스턴 빌라"
    },
    {
        "name": "A. 브로야",
        "originName": "아르만도 브로야",
        "pos": "ST",
        "birth": "2001.09.10",
        "country": "알바니아",
        "team": "첼시"
    },
    {
        "name": "M. 쇼",
        "originName": "모하메드-알리 쇼",
        "pos": "ST",
        "birth": "2004.01.19",
        "country": "프랑스",
        "team": "레알 소시에다드"
    },
    {
        "name": "H. 에키티케",
        "originName": "위고 에키티케",
        "pos": "ST",
        "birth": "2002.06.20",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "C. 루케바",
        "originName": "카스텔로 루케바",
        "pos": "CB",
        "birth": "2002.12.17",
        "country": "프랑스",
        "team": "RB 라이프치히"
    },
    {
        "name": "D. 우도기",
        "originName": "데스티니 우도기",
        "pos": "LWB",
        "birth": "2002.11.28",
        "country": "이탈리아",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "반데르송",
        "originName": "반데르송 지 올리베이라 캄푸스",
        "pos": "RB",
        "birth": "2001.06.21",
        "country": "브라질",
        "team": "AS 모나코"
    },
    {
        "name": "시드니 고부",
        "originName": "시드니 고부",
        "pos": "RW",
        "birth": "1979.07.27",
        "country": "프랑스",
        "team": "FC 리모네"
    },
    {
        "name": "호안 카프데빌라",
        "originName": "호안 카프데빌라 멘데스",
        "pos": "LB",
        "birth": "1978.02.03",
        "country": "스페인",
        "team": "FC 산타 콜로마"
    },
    {
        "name": "히카르두 카르발류",
        "originName": "히카르두 아우베르투 시우브. 지 카르발류",
        "pos": "CB",
        "birth": "1978.05.18",
        "country": "포르투갈",
        "team": "상하이 하이강"
    },
    {
        "name": "디르크 카위트",
        "originName": "디르크 카위트",
        "pos": "LW",
        "birth": "1980.07.22",
        "country": "네덜란드",
        "team": "퀵 보이즈"
    },
    {
        "name": "디에고 포를란",
        "originName": "디에고 포를란",
        "pos": "CF",
        "birth": "1979.05.19",
        "country": "우루과이",
        "team": "키치 스포츠 클럽"
    },
    {
        "name": "루디 펠러",
        "originName": "루디 펠러",
        "pos": "ST",
        "birth": "1960.04.13",
        "country": "독일",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "팀 크룰",
        "originName": "팀 크룰",
        "pos": "GK",
        "birth": "1988.04.03",
        "country": "네덜란드",
        "team": "루턴 타운"
    },
    {
        "name": "요르디 클라지",
        "originName": "요르디 클라지",
        "pos": "CDM",
        "birth": "1991.06.27",
        "country": "네덜란드",
        "team": "AZ"
    },
    {
        "name": "F. 페르난데스",
        "originName": "페데리코 페르난데스",
        "pos": "CB",
        "birth": "1989.02.21",
        "country": "아르헨티나",
        "team": "에스투디안테스 데라플라타"
    },
    {
        "name": "주니어 호일렛",
        "originName": "주니어 호일렛",
        "pos": "LM",
        "birth": "1990.06.05",
        "country": "캐나다",
        "team": "밴쿠버 화이트캡스"
    },
    {
        "name": "토마스 브롤린",
        "originName": "토마스 브롤린",
        "pos": "CF",
        "birth": "1969.11.29",
        "country": "스웨덴",
        "team": "후딕스발스 FF"
    },
    {
        "name": "로브레 칼리니치",
        "originName": "로브레 칼리니치",
        "pos": "GK",
        "birth": "1990.04.03",
        "country": "크로아티아",
        "team": "하이두크 스플리트"
    },
    {
        "name": "라이언 그랜트",
        "originName": "라이언 그랜트",
        "pos": "RB",
        "birth": "1991.02.26",
        "country": "호주",
        "team": "시드니 FC"
    },
    {
        "name": "스테벤 비토리아",
        "originName": "스테벤 지 소우자 비토리아",
        "pos": "CB",
        "birth": "1987.01.11",
        "country": "캐나다",
        "team": "GD 샤베스"
    },
    {
        "name": "B. 오비에도",
        "originName": "브라이언 오비에도",
        "pos": "LB",
        "birth": "1990.02.18",
        "country": "코스타리카",
        "team": "레알 솔트레이크"
    },
    {
        "name": "낭팔리스 멘디",
        "originName": "낭팔리스 멘디",
        "pos": "CDM",
        "birth": "1992.06.23",
        "country": "세네갈",
        "team": "RC 랑스"
    },
    {
        "name": "아지즈 베히치",
        "originName": "아지즈 베히치",
        "pos": "LB",
        "birth": "1990.12.16",
        "country": "호주",
        "team": "멜버른 시티"
    },
    {
        "name": "제임스 제고",
        "originName": "제임스 제고",
        "pos": "CDM",
        "birth": "1992.02.12",
        "country": "호주",
        "team": "히버니언"
    },
    {
        "name": "스테판 바오켄",
        "originName": "스테판 바오켄",
        "pos": "ST",
        "birth": "1992.05.28",
        "country": "카메룬",
        "team": "카이세리스포르"
    },
    {
        "name": "로맹 사이스",
        "originName": "로맹 사이스",
        "pos": "CB",
        "birth": "1990.03.26",
        "country": "모로코",
        "team": "알사드"
    },
    {
        "name": "마르코 리바야",
        "originName": "마르코 리바야",
        "pos": "CAM",
        "birth": "1993.08.26",
        "country": "크로아티아",
        "team": "하이두크 스플리트"
    },
    {
        "name": "앤디 이아돔",
        "originName": "앤디 이아돔",
        "pos": "RB",
        "birth": "1991.12.02",
        "country": "가나",
        "team": "레딩"
    },
    {
        "name": "M. 라만",
        "originName": "바바 라만",
        "pos": "LB",
        "birth": "1994.07.02",
        "country": "가나",
        "team": "파오크 FC"
    },
    {
        "name": "살렘 알도사리",
        "originName": "살렘 알도사리",
        "pos": "LW",
        "birth": "1991.08.19",
        "country": "사우디아라비아",
        "team": "알힐랄"
    },
    {
        "name": "M. 알오와이스",
        "originName": "모하메드 알오와이스",
        "pos": "GK",
        "birth": "1991.10.10",
        "country": "사우디아라비아",
        "team": "알힐랄"
    },
    {
        "name": "Y. 알샤흐라니",
        "originName": "야세르 알샤흐라니",
        "pos": "LB",
        "birth": "1992.05.25",
        "country": "사우디아라비아",
        "team": "알힐랄"
    },
    {
        "name": "잭슨 어바인",
        "originName": "잭슨 어바인",
        "pos": "CM",
        "birth": "1993.03.07",
        "country": "호주",
        "team": "FC 장크트파울리"
    },
    {
        "name": "소피안 부팔",
        "originName": "소피안 부팔",
        "pos": "CF",
        "birth": "1993.09.17",
        "country": "모로코",
        "team": "알라이얀"
    },
    {
        "name": "D. 라조비치",
        "originName": "다르코 라조비치",
        "pos": "LM",
        "birth": "1990.09.15",
        "country": "세르비아",
        "team": "엘라스 베로나"
    },
    {
        "name": "알렉산더 지쿠",
        "originName": "알렉산더 지쿠",
        "pos": "CB",
        "birth": "1994.08.09",
        "country": "가나",
        "team": "페네르바흐체"
    },
    {
        "name": "아워 마빌",
        "originName": "아워 마빌",
        "pos": "LW",
        "birth": "1995.09.15",
        "country": "호주",
        "team": "그라스호퍼 클럽 취리히"
    },
    {
        "name": "F. 칼보",
        "originName": "프란시스코 칼보",
        "pos": "CB",
        "birth": "1992.07.08",
        "country": "코스타리카",
        "team": "코니아스포르"
    },
    {
        "name": "켈린 아코스타",
        "originName": "켈린 아코스타",
        "pos": "CM",
        "birth": "1995.07.24",
        "country": "미국",
        "team": "LA FC"
    },
    {
        "name": "S. 아즈문",
        "originName": "사르다르 아즈문",
        "pos": "ST",
        "birth": "1995.01.01",
        "country": "이란",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "J. 카스텔레토",
        "originName": "장-샤를 카스텔레토",
        "pos": "CB",
        "birth": "1995.01.26",
        "country": "카메룬",
        "team": "FC 낭트"
    },
    {
        "name": "J. 오소리오",
        "originName": "조너선 오소리오",
        "pos": "CM",
        "birth": "1992.06.12",
        "country": "캐나다",
        "team": "토론토 FC"
    },
    {
        "name": "A. 자한바흐시",
        "originName": "알리레자 자한바흐시",
        "pos": "RW",
        "birth": "1993.08.11",
        "country": "이란",
        "team": "페예노르트"
    },
    {
        "name": "C. 그루에소",
        "originName": "카를로스 그루에소",
        "pos": "CDM",
        "birth": "1995.04.19",
        "country": "에콰도르",
        "team": "새너제이 어스퀘이크"
    },
    {
        "name": "샘 아데커비",
        "originName": "샘 아데커비",
        "pos": "LB",
        "birth": "1995.01.16",
        "country": "캐나다",
        "team": "밴쿠버 화이트캡스"
    },
    {
        "name": "F. 디에디우",
        "originName": "파마라 디에디우",
        "pos": "ST",
        "birth": "1992.12.15",
        "country": "세네갈",
        "team": "그라나다 CF"
    },
    {
        "name": "아담 마시나",
        "originName": "아담 마시나",
        "pos": "LB",
        "birth": "1994.01.02",
        "country": "모로코",
        "team": "우디네세"
    },
    {
        "name": "카일 래린",
        "originName": "카일 래린",
        "pos": "ST",
        "birth": "1995.04.17",
        "country": "캐나다",
        "team": "RCD 마요르카"
    },
    {
        "name": "매티 캐시",
        "originName": "매티 캐시",
        "pos": "RB",
        "birth": "1997.08.07",
        "country": "폴란드",
        "team": "애스턴 빌라"
    },
    {
        "name": "랜들 레알",
        "originName": "랜들 레알",
        "pos": "LM",
        "birth": "1997.01.14",
        "country": "코스타리카",
        "team": "내슈빌 SC"
    },
    {
        "name": "리안 음마이",
        "originName": "리안 음마이",
        "pos": "ST",
        "birth": "1997.04.01",
        "country": "모로코",
        "team": "스토크 시티"
    },
    {
        "name": "셀림 아말라",
        "originName": "셀림 아말라",
        "pos": "CAM",
        "birth": "1996.11.15",
        "country": "모로코",
        "team": "레알 바야돌리드"
    },
    {
        "name": "M. 데게네크",
        "originName": "밀로시 데게네크",
        "pos": "CB",
        "birth": "1994.04.28",
        "country": "호주",
        "team": "츠르베나 즈베즈다"
    },
    {
        "name": "안토니 로빈슨",
        "originName": "안토니 로빈슨",
        "pos": "LB",
        "birth": "1997.08.08",
        "country": "미국",
        "team": "풀럼"
    },
    {
        "name": "A. 알 말키",
        "originName": "압둘렐라흐 알 말키",
        "pos": "CDM",
        "birth": "1994.10.11",
        "country": "사우디아라비아",
        "team": "알힐랄"
    },
    {
        "name": "조조 월라콧",
        "originName": "조조 월라콧",
        "pos": "GK",
        "birth": "1996.09.08",
        "country": "가나",
        "team": "히버니언"
    },
    {
        "name": "조나탄",
        "originName": "호나탄 모야",
        "pos": "ST",
        "birth": "1992.01.06",
        "country": "코스타리카",
        "team": "하이데라바드 FC"
    },
    {
        "name": "A. 알 블레아히",
        "originName": "알리 알 블레아히",
        "pos": "CB",
        "birth": "1989.11.21",
        "country": "사우디아라비아",
        "team": "알힐랄"
    },
    {
        "name": "나이탄 난데스",
        "originName": "나이탄 난데스",
        "pos": "RM",
        "birth": "1995.12.28",
        "country": "우루과이",
        "team": "칼리아리"
    },
    {
        "name": "콜린스 파이",
        "originName": "콜린스 파이",
        "pos": "RB",
        "birth": "1992.08.13",
        "country": "카메룬",
        "team": "알타이"
    },
    {
        "name": "C. 바소고그",
        "originName": "크리스티앙 바소고그",
        "pos": "RW",
        "birth": "1995.10.18",
        "country": "카메룬",
        "team": "상하이 선화"
    },
    {
        "name": "R. 마타리타",
        "originName": "로널드 마타리타",
        "pos": "LB",
        "birth": "1994.07.09",
        "country": "코스타리카",
        "team": "SK 드니프로-1"
    },
    {
        "name": "리치 라예아",
        "originName": "리치 라예아",
        "pos": "RWB",
        "birth": "1995.01.07",
        "country": "캐나다",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "엔도 와타루",
        "originName": "엔도 와타루",
        "pos": "CDM",
        "birth": "1993.02.09",
        "country": "일본",
        "team": "리버풀"
    },
    {
        "name": "나카야마 유타",
        "originName": "나카야마 유타",
        "pos": "CB",
        "birth": "1997.02.16",
        "country": "일본",
        "team": "허더즈필드 타운"
    },
    {
        "name": "S. 알간남",
        "originName": "술탄 알간남",
        "pos": "RB",
        "birth": "1994.05.06",
        "country": "사우디아라비아",
        "team": "알나스르"
    },
    {
        "name": "아사노 다쿠마",
        "originName": "아사노 다쿠마",
        "pos": "ST",
        "birth": "1994.11.10",
        "country": "일본",
        "team": "VfL 보훔 1848"
    },
    {
        "name": "마우로 아람바리",
        "originName": "마우로 아람바리",
        "pos": "CDM",
        "birth": "1995.09.30",
        "country": "우루과이",
        "team": "헤타페 CF"
    },
    {
        "name": "이토 준야",
        "originName": "이토 준야",
        "pos": "RM",
        "birth": "1993.03.09",
        "country": "일본",
        "team": "스타드 랭스"
    },
    {
        "name": "나우엘 몰리나",
        "originName": "나우엘 몰리나",
        "pos": "RWB",
        "birth": "1998.04.06",
        "country": "아르헨티나",
        "team": "아틀레티코 마드리드"
    },
    {
        "name": "M. 모함마디",
        "originName": "밀라드 모함마디",
        "pos": "LB",
        "birth": "1993.09.29",
        "country": "이란",
        "team": "AEK 아테네"
    },
    {
        "name": "마틴 홍글라",
        "originName": "마틴 홍글라",
        "pos": "CM",
        "birth": "1998.03.16",
        "country": "카메룬",
        "team": "엘라스 베로나"
    },
    {
        "name": "A. 라이두니",
        "originName": "아이사 라이두니",
        "pos": "CDM",
        "birth": "1996.12.13",
        "country": "튀니지",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "호르헤 산체스",
        "originName": "호르헤 산체스",
        "pos": "RB",
        "birth": "1997.12.10",
        "country": "멕시코",
        "team": "아약스"
    },
    {
        "name": "미카엘 응가되",
        "originName": "미카엘 응가되",
        "pos": "CB",
        "birth": "1990.11.23",
        "country": "카메룬",
        "team": "베이징 궈안"
    },
    {
        "name": "S. 알 세흐리",
        "originName": "살레흐 알 세흐리",
        "pos": "ST",
        "birth": "1993.11.01",
        "country": "사우디아라비아",
        "team": "알힐랄"
    },
    {
        "name": "A. 다나카",
        "originName": "다나카 아오",
        "pos": "CM",
        "birth": "1998.09.10",
        "country": "일본",
        "team": "포르투나 뒤셀도르프"
    },
    {
        "name": "사샤 루키치",
        "originName": "사샤 루키치",
        "pos": "CM",
        "birth": "1996.08.13",
        "country": "세르비아",
        "team": "풀럼"
    },
    {
        "name": "J. 레아 실리키",
        "originName": "제임스 레아 실리키",
        "pos": "CM",
        "birth": "1996.06.12",
        "country": "카메룬",
        "team": "이스토릴 프라이아"
    },
    {
        "name": "마일스 로빈슨",
        "originName": "마일스 로빈슨",
        "pos": "CB",
        "birth": "1997.03.14",
        "country": "미국",
        "team": "애틀란타 유나이티드"
    },
    {
        "name": "A. 흐루스티치",
        "originName": "아이딘 흐루스티치",
        "pos": "CM",
        "birth": "1996.07.05",
        "country": "호주",
        "team": "엘라스 베로나"
    },
    {
        "name": "I. 샤이르",
        "originName": "일리아스 샤이르",
        "pos": "CAM",
        "birth": "1997.10.30",
        "country": "모로코",
        "team": "퀸스파크 레인저스"
    },
    {
        "name": "누후",
        "originName": "누후 톨로",
        "pos": "CB",
        "birth": "1997.06.23",
        "country": "카메룬",
        "team": "시애틀 사운더스"
    },
    {
        "name": "빈첸초 그리포",
        "originName": "빈첸초 그리포",
        "pos": "LM",
        "birth": "1993.04.07",
        "country": "이탈리아",
        "team": "SC 프라이부르크"
    },
    {
        "name": "N. 데라크루스",
        "originName": "니콜라스 데라크루스",
        "pos": "CM",
        "birth": "1997.06.01",
        "country": "우루과이",
        "team": "리버 플레이트"
    },
    {
        "name": "F. 알비레칸",
        "originName": "피라스 알비레칸",
        "pos": "ST",
        "birth": "2000.05.14",
        "country": "사우디아라비아",
        "team": "알아흘리"
    },
    {
        "name": "네마냐 막시모비치",
        "originName": "네마냐 막시모비치",
        "pos": "CDM",
        "birth": "1995.01.26",
        "country": "세르비아",
        "team": "헤타페 CF"
    },
    {
        "name": "M. 케이",
        "originName": "마크-앤서니 케이",
        "pos": "CM",
        "birth": "1994.12.02",
        "country": "캐나다",
        "team": "뉴잉글랜드 레볼루션"
    },
    {
        "name": "A. 알아므리",
        "originName": "압둘렐라 알아므리",
        "pos": "CB",
        "birth": "1997.01.15",
        "country": "사우디아라비아",
        "team": "알나스르"
    },
    {
        "name": "야쿠프 모데르",
        "originName": "야쿠프 모데르",
        "pos": "CDM",
        "birth": "1999.04.07",
        "country": "폴란드",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "M. 드레거",
        "originName": "모하메드 드레거",
        "pos": "RWB",
        "birth": "1996.06.25",
        "country": "튀니지",
        "team": "FC 바젤 1893"
    },
    {
        "name": "H. 모리타",
        "originName": "모리타 히데마사",
        "pos": "CDM",
        "birth": "1995.05.10",
        "country": "일본",
        "team": "스포르팅 CP"
    },
    {
        "name": "스테펜 에우스타키오",
        "originName": "스테펜 안투네스 에우스타키오",
        "pos": "CDM",
        "birth": "1996.12.21",
        "country": "캐나다",
        "team": "FC 포르투"
    },
    {
        "name": "알리 골리자데",
        "originName": "알리 골리자데",
        "pos": "RM",
        "birth": "1996.03.10",
        "country": "이란",
        "team": "레흐 포즈난"
    },
    {
        "name": "알리 알하산",
        "originName": "알리 알하산",
        "pos": "CDM",
        "birth": "1997.03.04",
        "country": "사우디아라비아",
        "team": "알나스르"
    },
    {
        "name": "I. 루자",
        "originName": "임란 루자",
        "pos": "CAM",
        "birth": "1999.05.01",
        "country": "모로코",
        "team": "왓퍼드"
    },
    {
        "name": "M. 호세이니",
        "originName": "마지드 호세이니",
        "pos": "CB",
        "birth": "1996.06.20",
        "country": "이란",
        "team": "카이세리스포르"
    },
    {
        "name": "아유브 엘카비",
        "originName": "아유브 엘카비",
        "pos": "ST",
        "birth": "1993.06.25",
        "country": "모로코",
        "team": "알사드"
    },
    {
        "name": "S. 모하라미",
        "originName": "사데그 모하라미",
        "pos": "RB",
        "birth": "1996.03.01",
        "country": "이란",
        "team": "디나모 자그레브"
    },
    {
        "name": "K. 후루하시",
        "originName": "후루하시 교고",
        "pos": "LW",
        "birth": "1995.01.20",
        "country": "일본",
        "team": "셀틱"
    },
    {
        "name": "D. 체레",
        "originName": "대니얼-코피 체레",
        "pos": "LW",
        "birth": "1996.03.08",
        "country": "가나",
        "team": "SC 프라이부르크"
    },
    {
        "name": "Á. 프레시아도",
        "originName": "앙헬로 프레시아도",
        "pos": "RB",
        "birth": "1998.02.18",
        "country": "에콰도르",
        "team": "스파르타 프라하"
    },
    {
        "name": "이드리수 바바",
        "originName": "이드리수 바바",
        "pos": "CDM",
        "birth": "1996.01.22",
        "country": "가나",
        "team": "RCD 마요르카"
    },
    {
        "name": "테전 뷰캐넌",
        "originName": "테전 뷰캐넌",
        "pos": "RM",
        "birth": "1999.02.08",
        "country": "캐나다",
        "team": "클럽 브루게"
    },
    {
        "name": "X. 아레아가",
        "originName": "사비에르 아레아가",
        "pos": "CB",
        "birth": "1994.09.28",
        "country": "에콰도르",
        "team": "시애틀 사운더스"
    },
    {
        "name": "곤살로 플라타",
        "originName": "곤살로 플라타",
        "pos": "RM",
        "birth": "2000.11.01",
        "country": "에콰도르",
        "team": "알사드"
    },
    {
        "name": "R. 페피",
        "originName": "리카도 페피",
        "pos": "ST",
        "birth": "2003.01.09",
        "country": "미국",
        "team": "PSV"
    },
    {
        "name": "Y. 무사",
        "originName": "유누스 무사",
        "pos": "RM",
        "birth": "2002.11.29",
        "country": "미국",
        "team": "AC 밀란"
    },
    {
        "name": "카말 밀러",
        "originName": "카말 밀러",
        "pos": "CB",
        "birth": "1997.05.16",
        "country": "캐나다",
        "team": "인터 마이애미"
    },
    {
        "name": "브레넌 존슨",
        "originName": "브레넌 존슨",
        "pos": "RW",
        "birth": "2001.05.23",
        "country": "웨일스",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "M. 카이세도",
        "originName": "모이세스 카이세도",
        "pos": "CM",
        "birth": "2001.11.02",
        "country": "에콰도르",
        "team": "첼시"
    },
    {
        "name": "M. 비냐",
        "originName": "마티아스 비냐",
        "pos": "LB",
        "birth": "1997.11.09",
        "country": "우루과이",
        "team": "로마 FC"
    },
    {
        "name": "S. 파블로비치",
        "originName": "스트라히냐 파블로비치",
        "pos": "CB",
        "birth": "2001.05.24",
        "country": "세르비아",
        "team": "레드불 잘츠부르크"
    },
    {
        "name": "A. 슬리만",
        "originName": "아니스 슬리만",
        "pos": "CAM",
        "birth": "2001.03.16",
        "country": "튀니지",
        "team": "셰필드 유나이티드"
    },
    {
        "name": "P. 인카피에",
        "originName": "피에로 인카피에",
        "pos": "CB",
        "birth": "2002.01.09",
        "country": "에콰도르",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "H. 메지브리",
        "originName": "한니발 메지브리",
        "pos": "CAM",
        "birth": "2003.01.21",
        "country": "튀니지",
        "team": "맨체스터 유나이티드"
    },
    {
        "name": "A. 존스턴",
        "originName": "앨리스터 존스턴",
        "pos": "RB",
        "birth": "1998.10.08",
        "country": "캐나다",
        "team": "셀틱"
    },
    {
        "name": "M. 스반베리",
        "originName": "마티아스 스판버리",
        "pos": "CM",
        "birth": "1999.01.05",
        "country": "스웨덴",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "밤바 디엥",
        "originName": "밤바 디엥",
        "pos": "ST",
        "birth": "2000.09.01",
        "country": "세네갈",
        "team": "FC 로리앙"
    },
    {
        "name": "F. 아페나-기안",
        "originName": "펠릭스 아페나-기안",
        "pos": "ST",
        "birth": "2003.01.19",
        "country": "가나",
        "team": "로마 FC"
    },
    {
        "name": "S. 시만스키",
        "originName": "세바스티안 시만스키",
        "pos": "CAM",
        "birth": "1999.05.10",
        "country": "폴란드",
        "team": "디나모 모스크바"
    },
    {
        "name": "B. 브레레톤 디아스",
        "originName": "벤 브레레톤 디아스",
        "pos": "ST",
        "birth": "1999.04.18",
        "country": "칠레",
        "team": "비야레알 CF"
    },
    {
        "name": "파페 게예",
        "originName": "파페 게예",
        "pos": "CDM",
        "birth": "1999.01.24",
        "country": "세네갈",
        "team": "올랭피크 마르세유"
    },
    {
        "name": "프란 벨트란",
        "originName": "프란시스코 호세 벨트란 페이나도",
        "pos": "CDM",
        "birth": "1999.02.03",
        "country": "스페인",
        "team": "셀타 비고"
    },
    {
        "name": "L. 헤이르트라위다",
        "originName": "루차럴 헤이르트라위다",
        "pos": "RB",
        "birth": "2000.07.18",
        "country": "네덜란드",
        "team": "페예노르트"
    },
    {
        "name": "P. 스트라위크",
        "originName": "파스칼 스트라위크",
        "pos": "CB",
        "birth": "1999.08.11",
        "country": "네덜란드",
        "team": "리즈 유나이티드"
    },
    {
        "name": "D. 프라테시",
        "originName": "다비데 프라테시",
        "pos": "CM",
        "birth": "1999.09.22",
        "country": "이탈리아",
        "team": "사수올로"
    },
    {
        "name": "A. 삼비 로콩가",
        "originName": "알베르트 삼비 로콩가",
        "pos": "CM",
        "birth": "1999.10.22",
        "country": "벨기에",
        "team": "아스널"
    },
    {
        "name": "셰이크 두쿠레",
        "originName": "셰이크 두쿠레",
        "pos": "CM",
        "birth": "2000.01.08",
        "country": "말리",
        "team": "크리스털 팰리스"
    },
    {
        "name": "모하메드 살리수",
        "originName": "모하메드 살리수",
        "pos": "CB",
        "birth": "1999.04.17",
        "country": "가나",
        "team": "AS 모나코"
    },
    {
        "name": "K. 루이스-포터",
        "originName": "킨 루이스-포터",
        "pos": "LW",
        "birth": "2001.02.22",
        "country": "잉글랜드",
        "team": "브렌트퍼드"
    },
    {
        "name": "G. 루테르",
        "originName": "조르지니오 루테르",
        "pos": "ST",
        "birth": "2002.04.20",
        "country": "프랑스",
        "team": "리즈 유나이티드"
    },
    {
        "name": "K. 코네",
        "originName": "쿠아디오 마누 코네",
        "pos": "CM",
        "birth": "2001.05.17",
        "country": "프랑스",
        "team": "보루시아 묀헨글라트바흐"
    },
    {
        "name": "우나이 벤세도르",
        "originName": "우나이 벤세도르 파리스",
        "pos": "CM",
        "birth": "2000.11.15",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "비비안",
        "originName": "다니엘 비비안 모레노",
        "pos": "CB",
        "birth": "1999.07.05",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "에런 히키",
        "originName": "에런 히키",
        "pos": "RB",
        "birth": "2002.06.10",
        "country": "스코틀랜드",
        "team": "브렌트퍼드"
    },
    {
        "name": "누누 타바리스",
        "originName": "누누 알베르티누 바렐라 타바르스",
        "pos": "LB",
        "birth": "2000.01.26",
        "country": "포르투갈",
        "team": "아스널"
    },
    {
        "name": "S. 리치",
        "originName": "사무엘레 리치",
        "pos": "CDM",
        "birth": "2001.08.21",
        "country": "이탈리아",
        "team": "토리노"
    },
    {
        "name": "A. 아들리",
        "originName": "아민 아들리",
        "pos": "ST",
        "birth": "2000.05.10",
        "country": "프랑스",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "니코 윌리암스",
        "originName": "니콜라스 윌리암스 아르투에르",
        "pos": "RW",
        "birth": "2002.07.12",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "루크 토머스",
        "originName": "루크 토머스",
        "pos": "LB",
        "birth": "2001.06.10",
        "country": "잉글랜드",
        "team": "레스터 시티"
    },
    {
        "name": "니코 곤살레스",
        "originName": "니콜라스 곤살레스 이글레시아스",
        "pos": "CM",
        "birth": "2002.01.03",
        "country": "스페인",
        "team": "FC 포르투"
    },
    {
        "name": "A. 테아트",
        "originName": "아르튀르 테아트",
        "pos": "CB",
        "birth": "2000.05.25",
        "country": "벨기에",
        "team": "스타드 렌"
    },
    {
        "name": "A. 트뤼페르",
        "originName": "아드리앙 트뤼페르",
        "pos": "LB",
        "birth": "2001.11.20",
        "country": "프랑스",
        "team": "스타드 렌"
    },
    {
        "name": "가브리엘 베론",
        "originName": "가브리엘 베론 폰세카 지 소자",
        "pos": "RM",
        "birth": "2002.09.03",
        "country": "브라질",
        "team": "FC 포르투"
    },
    {
        "name": "말로 귀스토",
        "originName": "말로 귀스토",
        "pos": "RB",
        "birth": "2003.05.19",
        "country": "프랑스",
        "team": "첼시"
    },
    {
        "name": "E. 와히",
        "originName": "엘리 와히",
        "pos": "ST",
        "birth": "2003.01.02",
        "country": "프랑스",
        "team": "몽펠리에 HSC"
    },
    {
        "name": "루이스 엔히키",
        "originName": "L. 엔히키 호자 다 시우바",
        "pos": "RM",
        "birth": "2001.01.02",
        "country": "브라질",
        "team": "레알 베티스"
    },
    {
        "name": "정승용",
        "originName": "정승용",
        "pos": "LWB",
        "birth": "1991.03.25",
        "country": "대한민국",
        "team": "강원 FC"
    },
    {
        "name": "김동현",
        "originName": "김동현",
        "pos": "CDM",
        "birth": "1997.06.11",
        "country": "대한민국",
        "team": "강원 FC"
    },
    {
        "name": "오현규",
        "originName": "오현규",
        "pos": "ST",
        "birth": "2001.04.12",
        "country": "대한민국",
        "team": "셀틱"
    },
    {
        "name": "C. 비라기",
        "originName": "크리스티아노 비라기",
        "pos": "LB",
        "birth": "1992.09.01",
        "country": "이탈리아",
        "team": "피오렌티나"
    },
    {
        "name": "양현준",
        "originName": "양현준",
        "pos": "RW",
        "birth": "2002.05.25",
        "country": "대한민국",
        "team": "셀틱"
    },
    {
        "name": "F. 포스터",
        "originName": "프레이저 포스터",
        "pos": "GK",
        "birth": "1988.03.17",
        "country": "잉글랜드",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "데니스 오도이",
        "originName": "데니스 오도이",
        "pos": "RB",
        "birth": "1988.05.27",
        "country": "가나",
        "team": "클럽 브루게"
    },
    {
        "name": "캐스퍼 니엘센",
        "originName": "캐스퍼 니엘센",
        "pos": "CM",
        "birth": "1994.04.29",
        "country": "덴마크",
        "team": "클럽 브루게"
    },
    {
        "name": "S. 오르테가",
        "originName": "스테판 오르테가",
        "pos": "GK",
        "birth": "1992.11.06",
        "country": "독일",
        "team": "맨체스터 시티"
    },
    {
        "name": "브랜던 메헬러",
        "originName": "브랜던 메헬러",
        "pos": "CB",
        "birth": "1993.01.28",
        "country": "벨기에",
        "team": "클럽 브루게"
    },
    {
        "name": "클린통 마타",
        "originName": "클린통 무코니 마타 페드루 로렌수",
        "pos": "RWB",
        "birth": "1992.11.07",
        "country": "앙골라",
        "team": "올랭피크 리옹"
    },
    {
        "name": "크리스토퍼 렌츠",
        "originName": "크리스토퍼 렌츠",
        "pos": "LWB",
        "birth": "1994.09.22",
        "country": "독일",
        "team": "RB 라이프치히"
    },
    {
        "name": "파비우 카르도주",
        "originName": "파비우 하파엘 호드리게스 카르도주",
        "pos": "CB",
        "birth": "1994.04.19",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "루카스 알라리오",
        "originName": "루카스 알라리오",
        "pos": "ST",
        "birth": "1992.10.08",
        "country": "아르헨티나",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "플로렌티누",
        "originName": "플로렌티누 모히스 루이스",
        "pos": "CDM",
        "birth": "1999.08.19",
        "country": "포르투갈",
        "team": "SL 벤피카"
    },
    {
        "name": "J. 리에르손",
        "originName": "율리안 리에르손",
        "pos": "RWB",
        "birth": "1997.11.17",
        "country": "노르웨이",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "F. 발로-투레",
        "originName": "포데 발로-투레",
        "pos": "LB",
        "birth": "1997.01.03",
        "country": "세네갈",
        "team": "AC 밀란"
    },
    {
        "name": "A. 체르빈",
        "originName": "알레시오 체르빈",
        "pos": "LW",
        "birth": "1999.03.03",
        "country": "이탈리아",
        "team": "나폴리 FC"
    },
    {
        "name": "대니 로더",
        "originName": "대니 로더",
        "pos": "ST",
        "birth": "2000.08.28",
        "country": "잉글랜드",
        "team": "FC 포르투"
    },
    {
        "name": "M. 리스티치",
        "originName": "미하일로 리스티치",
        "pos": "LB",
        "birth": "1995.10.31",
        "country": "세르비아",
        "team": "셀타 비고"
    },
    {
        "name": "주니오르 메시아스",
        "originName": "주니오르 메시아스",
        "pos": "RW",
        "birth": "1991.05.13",
        "country": "브라질",
        "team": "AC 밀란"
    },
    {
        "name": "야신 아들리",
        "originName": "야신 아들리",
        "pos": "CM",
        "birth": "2000.07.29",
        "country": "프랑스",
        "team": "AC 밀란"
    },
    {
        "name": "페타르 무사",
        "originName": "페타르 무사",
        "pos": "ST",
        "birth": "1998.03.04",
        "country": "크로아티아",
        "team": "SL 벤피카"
    },
    {
        "name": "다비드 카르무",
        "originName": "다비드 모타 테이셰이라 카르무",
        "pos": "CB",
        "birth": "1999.07.19",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "M. 티아우",
        "originName": "말리크 티아우",
        "pos": "CB",
        "birth": "2001.08.08",
        "country": "독일",
        "team": "AC 밀란"
    },
    {
        "name": "C. 램지",
        "originName": "캘빈 램지",
        "pos": "RB",
        "birth": "2003.07.31",
        "country": "스코틀랜드",
        "team": "리버풀"
    },
    {
        "name": "C. 산드라",
        "originName": "시세 산드라",
        "pos": "CAM",
        "birth": "2003.12.16",
        "country": "벨기에",
        "team": "클럽 브루게"
    },
    {
        "name": "S. 쿨리발리",
        "originName": "수마일라 쿨리발리",
        "pos": "CB",
        "birth": "2003.10.14",
        "country": "프랑스",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "B. 메이어",
        "originName": "비에른 메이어",
        "pos": "LB",
        "birth": "2003.03.18",
        "country": "네덜란드",
        "team": "클럽 브루게"
    },
    {
        "name": "A. 누사",
        "originName": "안토니오 누사",
        "pos": "LW",
        "birth": "2005.04.17",
        "country": "노르웨이",
        "team": "클럽 브루게"
    },
    {
        "name": "R. 오니에디카",
        "originName": "라파엘 오니에디카",
        "pos": "CDM",
        "birth": "2001.04.19",
        "country": "나이지리아",
        "team": "클럽 브루게"
    },
    {
        "name": "호드리구 콘세이상",
        "originName": "호드리구 F. 콘세이상",
        "pos": "RB",
        "birth": "2000.01.02",
        "country": "포르투갈",
        "team": "FC 취리히"
    },
    {
        "name": "안드레 프랑쿠",
        "originName": "안드레 필리프 루수 프랑쿠",
        "pos": "CAM",
        "birth": "1998.04.12",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "곤살루 보르지스",
        "originName": "곤살루 오스카르 알부케르크 보르지스",
        "pos": "RW",
        "birth": "2001.03.29",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "P. 바너",
        "originName": "파울 바너",
        "pos": "CAM",
        "birth": "2005.12.23",
        "country": "독일",
        "team": "바이에른 뮌헨"
    },
    {
        "name": "F. 알리두",
        "originName": "파리데 알리두",
        "pos": "LM",
        "birth": "2001.07.18",
        "country": "독일",
        "team": "아인트라흐트 프랑크푸르트"
    },
    {
        "name": "주트글라",
        "originName": "페란 주트글라 블랑",
        "pos": "ST",
        "birth": "1999.02.01",
        "country": "스페인",
        "team": "클럽 브루게"
    },
    {
        "name": "T. 로테",
        "originName": "톰 로테",
        "pos": "LB",
        "birth": "2004.10.29",
        "country": "독일",
        "team": "보루시아 도르트문트"
    },
    {
        "name": "M. 페로네",
        "originName": "막시모 페로네",
        "pos": "CDM",
        "birth": "2003.01.07",
        "country": "아르헨티나",
        "team": "맨체스터 시티"
    },
    {
        "name": "L. 아우도르",
        "originName": "린트 아우도르",
        "pos": "CM",
        "birth": "2003.10.13",
        "country": "벨기에",
        "team": "클럽 브루게"
    },
    {
        "name": "W. 자이르-에머리",
        "originName": "워렌 자이르-에머리",
        "pos": "CM",
        "birth": "2006.03.08",
        "country": "프랑스",
        "team": "파리 생제르맹"
    },
    {
        "name": "J. 스필레이르스",
        "originName": "요르너 스필레이르스",
        "pos": "CB",
        "birth": "2005.01.21",
        "country": "벨기에",
        "team": "클럽 브루게"
    },
    {
        "name": "R. 루이스",
        "originName": "리코 루이스",
        "pos": "RB",
        "birth": "2004.11.21",
        "country": "잉글랜드",
        "team": "맨체스터 시티"
    },
    {
        "name": "베르나르두 폴랴",
        "originName": "베르나르두 페레이라 폴랴",
        "pos": "CM",
        "birth": "2002.03.22",
        "country": "포르투갈",
        "team": "FC 포르투"
    },
    {
        "name": "V. 카르보니",
        "originName": "발렌틴 카르보니",
        "pos": "CAM",
        "birth": "2005.03.05",
        "country": "아르헨티나",
        "team": "인테르"
    },
    {
        "name": "레들리 킹",
        "originName": "레들리 킹",
        "pos": "CB",
        "birth": "1980.10.12",
        "country": "잉글랜드",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "스테판 바이체티치",
        "originName": "스테판 바이체티치 마키에이라",
        "pos": "CDM",
        "birth": "2004.10.22",
        "country": "스페인",
        "team": "리버풀"
    },
    {
        "name": "R. 마르케스",
        "originName": "라파엘 마르케스",
        "pos": "CB",
        "birth": "1979.02.13",
        "country": "멕시코",
        "team": "아틀라스"
    },
    {
        "name": "해리 큐얼",
        "originName": "해리 큐얼",
        "pos": "LW",
        "birth": "1978.09.22",
        "country": "호주",
        "team": "멜버른 시티"
    },
    {
        "name": "루시우",
        "originName": "루시우",
        "pos": "CB",
        "birth": "1978.05.08",
        "country": "브라질",
        "team": "브라질리엔세"
    },
    {
        "name": "S. 알오와이란",
        "originName": "사이드 알오와이란",
        "pos": "RW",
        "birth": "1967.08.19",
        "country": "사우디아라비아",
        "team": "알샤밥"
    },
    {
        "name": "W. 스몰라레크",
        "originName": "브워지미에시 스몰라레크",
        "pos": "ST",
        "birth": "1957.07.16",
        "country": "폴란드",
        "team": "FC 위트레흐트"
    },
    {
        "name": "J. 파팽",
        "originName": "장-피에르 파팽",
        "pos": "ST",
        "birth": "1963.11.05",
        "country": "프랑스",
        "team": "AS 팩츄-비가누스"
    },
    {
        "name": "에르빈 뮐더르",
        "originName": "에르빈 뮐더르",
        "pos": "GK",
        "birth": "1989.03.03",
        "country": "네덜란드",
        "team": "고 어헤드 이글스"
    },
    {
        "name": "로베르토 소리아노",
        "originName": "로베르토 소리아노",
        "pos": "CM",
        "birth": "1991.02.08",
        "country": "이탈리아",
        "team": "볼로냐"
    },
    {
        "name": "우고 마요",
        "originName": "우고 마요 노베힐",
        "pos": "RB",
        "birth": "1991.06.22",
        "country": "스페인",
        "team": "인터나시오날"
    },
    {
        "name": "아다마 수마오로",
        "originName": "아다마 수마오로",
        "pos": "CB",
        "birth": "1992.06.18",
        "country": "프랑스",
        "team": "볼로냐"
    },
    {
        "name": "M. 반 데 마렐",
        "originName": "마르크 반 데 마렐",
        "pos": "LB",
        "birth": "1989.08.12",
        "country": "네덜란드",
        "team": "FC 위트레흐트"
    },
    {
        "name": "니콜라스 회플러",
        "originName": "니콜라스 회플러",
        "pos": "CDM",
        "birth": "1990.03.09",
        "country": "독일",
        "team": "SC 프라이부르크"
    },
    {
        "name": "슈테판 벨",
        "originName": "슈테판 벨",
        "pos": "CB",
        "birth": "1991.08.24",
        "country": "독일",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "조나탕 슈미트",
        "originName": "조나탕 슈미트",
        "pos": "RW",
        "birth": "1990.06.22",
        "country": "프랑스",
        "team": "아우스트리아 루스테나우"
    },
    {
        "name": "로빈 크노헤",
        "originName": "로빈 크노헤",
        "pos": "CB",
        "birth": "1992.05.22",
        "country": "독일",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "야신 아유브",
        "originName": "야신 아유브",
        "pos": "LM",
        "birth": "1994.03.06",
        "country": "모로코",
        "team": "엑셀시오르"
    },
    {
        "name": "장-폴 보에치우스",
        "originName": "장-폴 보에치우스",
        "pos": "LW",
        "birth": "1994.03.22",
        "country": "네덜란드",
        "team": "헤르타 BSC"
    },
    {
        "name": "조르당 페리",
        "originName": "조르당 페리",
        "pos": "CM",
        "birth": "1992.03.12",
        "country": "프랑스",
        "team": "몽펠리에 HSC"
    },
    {
        "name": "폴 더밋",
        "originName": "폴 더밋",
        "pos": "CB",
        "birth": "1991.09.26",
        "country": "웨일스",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "J. 워드-프라우즈",
        "originName": "제임스 워드-프라우즈",
        "pos": "CM",
        "birth": "1994.11.01",
        "country": "잉글랜드",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "솔리 마치",
        "originName": "솔리 마치",
        "pos": "RM",
        "birth": "1994.07.20",
        "country": "잉글랜드",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "스벤 반베이크",
        "originName": "스벤 반베이크",
        "pos": "CB",
        "birth": "1994.07.28",
        "country": "네덜란드",
        "team": "SC 헤이렌베인"
    },
    {
        "name": "나딤 아미리",
        "originName": "나딤 아미리",
        "pos": "CM",
        "birth": "1996.10.27",
        "country": "독일",
        "team": "바이엘 04 레버쿠젠"
    },
    {
        "name": "루벤 블랑코",
        "originName": "루벤 블랑코 베이가",
        "pos": "GK",
        "birth": "1995.07.25",
        "country": "스페인",
        "team": "셀타 비고"
    },
    {
        "name": "로빈 첸트너",
        "originName": "로빈 첸트너",
        "pos": "GK",
        "birth": "1994.10.28",
        "country": "독일",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "아리츠 엘루스톤도",
        "originName": "아리츠 엘루스톤도",
        "pos": "CB",
        "birth": "1994.03.28",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "레쿠에",
        "originName": "이니고 레쿠에 마르티네스",
        "pos": "RB",
        "birth": "1993.05.04",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "M. 미텔슈테트",
        "originName": "막시밀리안 미텔슈테트",
        "pos": "LB",
        "birth": "1997.03.18",
        "country": "독일",
        "team": "VfB 슈투트가르트"
    },
    {
        "name": "예라이",
        "originName": "예라이 알바레스 로페스",
        "pos": "CB",
        "birth": "1995.01.24",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "P. 하치디아코스",
        "originName": "판텔리스 하치디아코스",
        "pos": "CB",
        "birth": "1997.01.18",
        "country": "그리스",
        "team": "칼리아리"
    },
    {
        "name": "수벨디아",
        "originName": "이고르 수벨디아 엘로르사",
        "pos": "CDM",
        "birth": "1997.03.30",
        "country": "스페인",
        "team": "레알 소시에다드"
    },
    {
        "name": "고로사벨",
        "originName": "안도니 고로사벨 에스피노사",
        "pos": "RB",
        "birth": "1996.08.04",
        "country": "스페인",
        "team": "데포르티보 알라베스"
    },
    {
        "name": "앙토니 카시",
        "originName": "앙토니 카시",
        "pos": "LB",
        "birth": "1997.07.01",
        "country": "프랑스",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "션 롱스태프",
        "originName": "션 롱스태프",
        "pos": "CM",
        "birth": "1997.10.30",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "몬카욜라",
        "originName": "욘 몬카욜라 토야르",
        "pos": "CM",
        "birth": "1998.05.13",
        "country": "스페인",
        "team": "오사수나"
    },
    {
        "name": "로망 살랑",
        "originName": "로망 살랑",
        "pos": "GK",
        "birth": "1984.07.29",
        "country": "프랑스",
        "team": "스타드 렌"
    },
    {
        "name": "조리스 쇼타르",
        "originName": "조리스 쇼타르",
        "pos": "CDM",
        "birth": "2001.09.24",
        "country": "프랑스",
        "team": "몽펠리에 HSC"
    },
    {
        "name": "A. 로시",
        "originName": "알레안드로 로시",
        "pos": "RB",
        "birth": "1987.05.17",
        "country": "이탈리아",
        "team": "페루자"
    },
    {
        "name": "지몬 테로데",
        "originName": "지몬 테로데",
        "pos": "ST",
        "birth": "1988.03.02",
        "country": "독일",
        "team": "FC 샬케 04"
    },
    {
        "name": "R. 반볼프스빙컬",
        "originName": "리키 반볼프스빙컬",
        "pos": "ST",
        "birth": "1989.01.27",
        "country": "네덜란드",
        "team": "FC 트벤터"
    },
    {
        "name": "피델",
        "originName": "피델 차베스 데라토레",
        "pos": "LM",
        "birth": "1989.10.27",
        "country": "스페인",
        "team": "엘체 CF"
    },
    {
        "name": "다니 라차",
        "originName": "다니 라차",
        "pos": "CM",
        "birth": "1989.12.07",
        "country": "독일",
        "team": "FC 샬케 04"
    },
    {
        "name": "발렌시아가",
        "originName": "미켈 발렌시아가",
        "pos": "LB",
        "birth": "1988.02.29",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "G. 안젤라",
        "originName": "가브리엘레 안젤라",
        "pos": "CB",
        "birth": "1989.04.28",
        "country": "이탈리아",
        "team": "페루자"
    },
    {
        "name": "제룬 펠트마테",
        "originName": "제룬 펠트마테",
        "pos": "CB",
        "birth": "1988.11.08",
        "country": "네덜란드",
        "team": "고 어헤드 이글스"
    },
    {
        "name": "D. 팔치넬리",
        "originName": "디에고 팔치넬리",
        "pos": "ST",
        "birth": "1991.06.26",
        "country": "이탈리아",
        "team": "모데나"
    },
    {
        "name": "한스 뮐더",
        "originName": "한스 뮐더",
        "pos": "CB",
        "birth": "1987.04.27",
        "country": "네덜란드",
        "team": "RKC 발비크"
    },
    {
        "name": "필리프 주리치치",
        "originName": "필리프 주리치치",
        "pos": "CAM",
        "birth": "1992.01.30",
        "country": "세르비아",
        "team": "파나티나이코스"
    },
    {
        "name": "리아드 누리",
        "originName": "리아드 누리",
        "pos": "RM",
        "birth": "1985.06.07",
        "country": "프랑스",
        "team": "AC 아작시오"
    },
    {
        "name": "보르하 가르시아",
        "originName": "보르하 가르시아 프레이레",
        "pos": "CM",
        "birth": "1990.11.02",
        "country": "스페인",
        "team": "지로나 FC"
    },
    {
        "name": "후안 카를로스",
        "originName": "후안 카를로스 마르틴 코랄",
        "pos": "GK",
        "birth": "1988.01.20",
        "country": "스페인",
        "team": "지로나 FC"
    },
    {
        "name": "마티아스 오트레",
        "originName": "마티아스 오트레",
        "pos": "CAM",
        "birth": "1991.03.01",
        "country": "프랑스",
        "team": "AJ 오세르"
    },
    {
        "name": "벤 린스트라",
        "originName": "벤 린스트라",
        "pos": "CM",
        "birth": "1990.06.05",
        "country": "네덜란드",
        "team": "SC 캄뷔르"
    },
    {
        "name": "H. 베르휠스트",
        "originName": "호비 베르휠스트",
        "pos": "GK",
        "birth": "1993.04.02",
        "country": "네덜란드",
        "team": "AZ"
    },
    {
        "name": "세르히오 레온",
        "originName": "세르히오 레온 리모네스",
        "pos": "ST",
        "birth": "1989.01.06",
        "country": "스페인",
        "team": "엘체 CF"
    },
    {
        "name": "리카르도 사포나라",
        "originName": "리카르도 사포나라",
        "pos": "CAM",
        "birth": "1991.12.21",
        "country": "이탈리아",
        "team": "피오렌티나"
    },
    {
        "name": "D. 로페스",
        "originName": "다비드 로페스 실바",
        "pos": "CB",
        "birth": "1989.10.09",
        "country": "스페인",
        "team": "지로나 FC"
    },
    {
        "name": "압돈 프라츠",
        "originName": "압돈 프라츠 바스티다스",
        "pos": "ST",
        "birth": "1992.12.17",
        "country": "스페인",
        "team": "RCD 마요르카"
    },
    {
        "name": "세르지 다르데르",
        "originName": "세르지 다르데르 몰",
        "pos": "CM",
        "birth": "1993.12.22",
        "country": "스페인",
        "team": "RCD 마요르카"
    },
    {
        "name": "G. 드프렐",
        "originName": "그레구아르 드프렐",
        "pos": "CF",
        "birth": "1991.06.17",
        "country": "프랑스",
        "team": "사수올로"
    },
    {
        "name": "살두아",
        "originName": "호세바 살두아 벤고에체아",
        "pos": "RB",
        "birth": "1992.06.24",
        "country": "스페인",
        "team": "카디스 CF"
    },
    {
        "name": "다니엘레 바젤리",
        "originName": "다니엘레 바젤리",
        "pos": "CM",
        "birth": "1992.03.12",
        "country": "이탈리아",
        "team": "코모 1907"
    },
    {
        "name": "L. 부르네트",
        "originName": "로렌조 부르네트",
        "pos": "LB",
        "birth": "1991.01.11",
        "country": "네덜란드",
        "team": "FC 에먼"
    },
    {
        "name": "도노반 레옹",
        "originName": "도노반 레옹",
        "pos": "GK",
        "birth": "1992.11.03",
        "country": "프랑스",
        "team": "AJ 오세르"
    },
    {
        "name": "루카스 토로",
        "originName": "루카스 토로 마르세트",
        "pos": "CDM",
        "birth": "1994.07.19",
        "country": "스페인",
        "team": "오사수나"
    },
    {
        "name": "T. 딩고메",
        "originName": "트리스탕 딩고메",
        "pos": "CM",
        "birth": "1991.02.17",
        "country": "프랑스",
        "team": "알파테"
    },
    {
        "name": "미첼 데이크스",
        "originName": "미첼 데이크스",
        "pos": "LB",
        "birth": "1993.02.09",
        "country": "네덜란드",
        "team": "비테서"
    },
    {
        "name": "안드레 한",
        "originName": "안드레 한",
        "pos": "ST",
        "birth": "1990.08.13",
        "country": "독일",
        "team": "FC 아우크스부르크"
    },
    {
        "name": "필리포 팔코",
        "originName": "필리포 팔코",
        "pos": "CF",
        "birth": "1992.02.11",
        "country": "이탈리아",
        "team": "츠르베나 즈베즈다"
    },
    {
        "name": "굼바우",
        "originName": "제라르 굼바우 가리가",
        "pos": "CDM",
        "birth": "1994.12.18",
        "country": "스페인",
        "team": "엘체 CF"
    },
    {
        "name": "F. 디마리아노",
        "originName": "프란체스코 디마리아노",
        "pos": "LW",
        "birth": "1996.04.20",
        "country": "이탈리아",
        "team": "팔레르모"
    },
    {
        "name": "도미니크 코어",
        "originName": "도미니크 코어",
        "pos": "CDM",
        "birth": "1994.01.31",
        "country": "독일",
        "team": "1. FSV 마인츠 05"
    },
    {
        "name": "안데르 카파",
        "originName": "안데르 카파 로드리게스",
        "pos": "RB",
        "birth": "1992.02.08",
        "country": "스페인",
        "team": "레반테 UD"
    },
    {
        "name": "아이작 석세스",
        "originName": "아이작 석세스",
        "pos": "ST",
        "birth": "1996.01.07",
        "country": "나이지리아",
        "team": "우디네세"
    },
    {
        "name": "D. 미라니",
        "originName": "다몬 미라니",
        "pos": "CB",
        "birth": "1996.05.13",
        "country": "네덜란드",
        "team": "FC 폴렌담"
    },
    {
        "name": "R. 뮈흐런",
        "originName": "로베르트 뮈흐런",
        "pos": "ST",
        "birth": "1989.05.18",
        "country": "네덜란드",
        "team": "FC 폴렌담"
    },
    {
        "name": "칼빈 매킨토시",
        "originName": "칼빈 매킨토시",
        "pos": "CB",
        "birth": "1989.08.09",
        "country": "수리남",
        "team": "SC 캄뷔르"
    },
    {
        "name": "헹크 베이르만",
        "originName": "헹크 베이르만",
        "pos": "ST",
        "birth": "1991.02.26",
        "country": "네덜란드",
        "team": "FC 폴렌담"
    },
    {
        "name": "티모 휘베르스",
        "originName": "티모 휘베르스",
        "pos": "CB",
        "birth": "1996.07.20",
        "country": "독일",
        "team": "1. FC 쾰른"
    },
    {
        "name": "뱅상 마르체티",
        "originName": "뱅상 마르체티",
        "pos": "CM",
        "birth": "1997.07.04",
        "country": "프랑스",
        "team": "AC 아작시오"
    },
    {
        "name": "토니 비야",
        "originName": "안토니오 비야 수아레스",
        "pos": "LM",
        "birth": "1995.01.07",
        "country": "스페인",
        "team": "지로나 FC"
    },
    {
        "name": "샤를 트라오레",
        "originName": "샤를 트라오레",
        "pos": "LB",
        "birth": "1992.01.01",
        "country": "말리",
        "team": "FC 낭트"
    },
    {
        "name": "마티아 피노토",
        "originName": "마티아 피노토",
        "pos": "CF",
        "birth": "1992.12.28",
        "country": "이탈리아",
        "team": "코센차"
    },
    {
        "name": "룰 얀선",
        "originName": "룰 얀선",
        "pos": "CB",
        "birth": "1990.06.16",
        "country": "네덜란드",
        "team": "포르투나 시타르트"
    },
    {
        "name": "P. 푀르스터",
        "originName": "필리프 푀르스터",
        "pos": "CAM",
        "birth": "1995.02.04",
        "country": "독일",
        "team": "VfL 보훔 1848"
    },
    {
        "name": "호제리우",
        "originName": "호제리우 올리베이라 다 시우바",
        "pos": "LB",
        "birth": "1998.01.13",
        "country": "브라질",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "랜디 은테카",
        "originName": "랜디 은테카",
        "pos": "ST",
        "birth": "1997.12.06",
        "country": "프랑스",
        "team": "라요 바예카노"
    },
    {
        "name": "L. 두아르테",
        "originName": "라로스 두아르테",
        "pos": "CDM",
        "birth": "1997.02.28",
        "country": "네덜란드",
        "team": "FC 흐로닝언"
    },
    {
        "name": "Q. 팀버",
        "originName": "퀸턴 팀버",
        "pos": "CDM",
        "birth": "2001.06.17",
        "country": "네덜란드",
        "team": "페예노르트"
    },
    {
        "name": "J. 레데스마",
        "originName": "헤레미아스 코난 레데스마",
        "pos": "GK",
        "birth": "1993.02.13",
        "country": "아르헨티나",
        "team": "카디스 CF"
    },
    {
        "name": "V. 체르니",
        "originName": "바클라프 체르니",
        "pos": "RW",
        "birth": "1997.10.17",
        "country": "체코",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "T. 라우리첸",
        "originName": "토비아스 라우리첸",
        "pos": "ST",
        "birth": "1997.08.30",
        "country": "노르웨이",
        "team": "스파르타 로테르담"
    },
    {
        "name": "이반 프로베델",
        "originName": "이반 프로베델",
        "pos": "GK",
        "birth": "1994.03.17",
        "country": "이탈리아",
        "team": "라티움"
    },
    {
        "name": "올리 왓킨스",
        "originName": "올리 왓킨스",
        "pos": "ST",
        "birth": "1995.12.30",
        "country": "잉글랜드",
        "team": "애스턴 빌라"
    },
    {
        "name": "F. 소토카",
        "originName": "플로리앙 소토카",
        "pos": "RW",
        "birth": "1990.10.25",
        "country": "프랑스",
        "team": "RC 랑스"
    },
    {
        "name": "이시 팔라손",
        "originName": "이사크 팔라손 카마초",
        "pos": "RM",
        "birth": "1994.12.27",
        "country": "스페인",
        "team": "라요 바예카노"
    },
    {
        "name": "가브리엘 스트레페자",
        "originName": "가브리엘 타데우 스트레페자 헤벨라투",
        "pos": "RW",
        "birth": "1997.04.18",
        "country": "브라질",
        "team": "레체"
    },
    {
        "name": "다니호 두키",
        "originName": "다니호 두키",
        "pos": "CB",
        "birth": "1998.06.30",
        "country": "네덜란드",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "유수파 은지",
        "originName": "유수파 은지",
        "pos": "ST",
        "birth": "1994.01.03",
        "country": "감비아",
        "team": "보아비스타 FC"
    },
    {
        "name": "비토 반크로이",
        "originName": "비토 반크로이",
        "pos": "LM",
        "birth": "1996.01.29",
        "country": "네덜란드",
        "team": "스파르타 로테르담"
    },
    {
        "name": "T. 레인더르스",
        "originName": "테이야니 레인더르스",
        "pos": "CM",
        "birth": "1998.07.29",
        "country": "네덜란드",
        "team": "AC 밀란"
    },
    {
        "name": "루이스 덩크",
        "originName": "루이스 덩크",
        "pos": "CB",
        "birth": "1991.11.21",
        "country": "잉글랜드",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "X. 시몬스",
        "originName": "차비 시몬스",
        "pos": "CAM",
        "birth": "2003.04.21",
        "country": "네덜란드",
        "team": "파리 생제르맹"
    },
    {
        "name": "M. 반에베이크",
        "originName": "밀란 반에베이크",
        "pos": "RB",
        "birth": "2000.09.08",
        "country": "네덜란드",
        "team": "SC 헤이렌베인"
    },
    {
        "name": "코스티냐",
        "originName": "주앙 페드루 로레이루 다코스타",
        "pos": "RWB",
        "birth": "2000.03.26",
        "country": "포르투갈",
        "team": "히우 아브 FC"
    },
    {
        "name": "다비드 한츠코",
        "originName": "다비드 한츠코",
        "pos": "CB",
        "birth": "1997.12.13",
        "country": "슬로바키아",
        "team": "페예노르트"
    },
    {
        "name": "A. 알무스라티",
        "originName": "알리 알무스라티",
        "pos": "CDM",
        "birth": "1996.04.06",
        "country": "리비아",
        "team": "SC 브라가"
    },
    {
        "name": "K. 미토마",
        "originName": "미토마 카오루",
        "pos": "LM",
        "birth": "1997.05.20",
        "country": "일본",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "G. 스말",
        "originName": "하이스 스말",
        "pos": "LB",
        "birth": "1997.08.31",
        "country": "네덜란드",
        "team": "FC 트벤터"
    },
    {
        "name": "폴러린 발로군",
        "originName": "폴러린 발로군",
        "pos": "ST",
        "birth": "2001.07.03",
        "country": "잉글랜드",
        "team": "AS 모나코"
    },
    {
        "name": "가브리 베이가",
        "originName": "가브리엘 베이가 노바스",
        "pos": "CM",
        "birth": "2002.05.27",
        "country": "스페인",
        "team": "셀타 비고"
    },
    {
        "name": "발데",
        "originName": "알레한드로 발데 마르티네스",
        "pos": "LB",
        "birth": "2003.10.18",
        "country": "스페인",
        "team": "FC 바르셀로나"
    },
    {
        "name": "에산 하지사피",
        "originName": "에산 하지사피",
        "pos": "LB",
        "birth": "1990.02.25",
        "country": "이란",
        "team": "AEK 아테네"
    },
    {
        "name": "T. 두비카스",
        "originName": "타코스 두비카스",
        "pos": "ST",
        "birth": "1999.08.02",
        "country": "그리스",
        "team": "FC 위트레흐트"
    },
    {
        "name": "M. 케르케즈",
        "originName": "밀로시 케르케즈",
        "pos": "LB",
        "birth": "2003.11.07",
        "country": "헝가리",
        "team": "AFC 본머스"
    },
    {
        "name": "베스가",
        "originName": "미켈 베스가 아루티",
        "pos": "CDM",
        "birth": "1993.04.08",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "아니발 고도이",
        "originName": "아니발 고도이",
        "pos": "CDM",
        "birth": "1990.02.10",
        "country": "파나마",
        "team": "내슈빌 SC"
    },
    {
        "name": "벤 미",
        "originName": "벤 미",
        "pos": "CB",
        "birth": "1989.09.21",
        "country": "잉글랜드",
        "team": "브렌트퍼드"
    },
    {
        "name": "파스칼 그로스",
        "originName": "파스칼 그로스",
        "pos": "CM",
        "birth": "1991.06.15",
        "country": "독일",
        "team": "브라이턴 호브 앨비언"
    },
    {
        "name": "댄 번",
        "originName": "댄 번",
        "pos": "CB",
        "birth": "1992.05.09",
        "country": "잉글랜드",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "제임스 타코우스키",
        "originName": "제임스 타코우스키",
        "pos": "CB",
        "birth": "1992.11.19",
        "country": "잉글랜드",
        "team": "에버턴"
    },
    {
        "name": "제프리 하우엘레우",
        "originName": "제프리 하우엘레우",
        "pos": "CB",
        "birth": "1991.07.10",
        "country": "네덜란드",
        "team": "FC 아우크스부르크"
    },
    {
        "name": "마르빈 두크슈",
        "originName": "마르빈 두크슈",
        "pos": "ST",
        "birth": "1994.03.07",
        "country": "독일",
        "team": "베르더 브레멘"
    },
    {
        "name": "케빈 스퇴거",
        "originName": "케빈 스퇴거",
        "pos": "CM",
        "birth": "1993.08.27",
        "country": "오스트리아",
        "team": "VfL 보훔 1848"
    },
    {
        "name": "M. 부라비아",
        "originName": "메흐디 부라비아",
        "pos": "CM",
        "birth": "1991.08.07",
        "country": "모로코",
        "team": "프로시노네"
    },
    {
        "name": "앙토니 로지야",
        "originName": "앙토니 로지야",
        "pos": "CDM",
        "birth": "1986.03.10",
        "country": "프랑스",
        "team": "VfL 보훔 1848"
    },
    {
        "name": "루이스 데갈라레타",
        "originName": "이니고 루이스 데갈라레타",
        "pos": "CM",
        "birth": "1993.08.06",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "해리슨 리드",
        "originName": "해리슨 리드",
        "pos": "CDM",
        "birth": "1995.01.27",
        "country": "잉글랜드",
        "team": "풀럼"
    },
    {
        "name": "필립 호프만",
        "originName": "필립 호프만",
        "pos": "ST",
        "birth": "1993.03.30",
        "country": "독일",
        "team": "VfL 보훔 1848"
    },
    {
        "name": "오마르 마스카렐",
        "originName": "오마르 마스카렐 곤살레스",
        "pos": "CDM",
        "birth": "1993.02.02",
        "country": "스페인",
        "team": "RCD 마요르카"
    },
    {
        "name": "마르크 플레컨",
        "originName": "마르크 플레컨",
        "pos": "GK",
        "birth": "1993.06.13",
        "country": "네덜란드",
        "team": "브렌트퍼드"
    },
    {
        "name": "라니 케디라",
        "originName": "라니 케디라",
        "pos": "CDM",
        "birth": "1994.01.27",
        "country": "독일",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "미첼 바이저",
        "originName": "미첼 바이저",
        "pos": "RM",
        "birth": "1994.04.21",
        "country": "독일",
        "team": "베르더 브레멘"
    },
    {
        "name": "안토니 융",
        "originName": "안토니 융",
        "pos": "LWB",
        "birth": "1991.11.03",
        "country": "독일",
        "team": "베르더 브레멘"
    },
    {
        "name": "존 맥긴",
        "originName": "존 맥긴",
        "pos": "CM",
        "birth": "1994.10.18",
        "country": "스코틀랜드",
        "team": "애스턴 빌라"
    },
    {
        "name": "P. 치우리아",
        "originName": "패트릭 치우리아",
        "pos": "RM",
        "birth": "1995.02.09",
        "country": "이탈리아",
        "team": "AC 몬차"
    },
    {
        "name": "다비드 라야",
        "originName": "다비드 라야 마르틴",
        "pos": "GK",
        "birth": "1995.09.15",
        "country": "스페인",
        "team": "브렌트퍼드"
    },
    {
        "name": "왈라시",
        "originName": "왈라시 소자 시우바",
        "pos": "CDM",
        "birth": "1995.04.04",
        "country": "브라질",
        "team": "우디네세"
    },
    {
        "name": "셰랄도 베케르",
        "originName": "셰랄도 베케르",
        "pos": "CF",
        "birth": "1995.02.09",
        "country": "수리남",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "필리프 빌링",
        "originName": "필리프 빌링",
        "pos": "CM",
        "birth": "1996.06.11",
        "country": "덴마크",
        "team": "AFC 본머스"
    },
    {
        "name": "슈테판 포슈",
        "originName": "슈테판 포슈",
        "pos": "RB",
        "birth": "1997.05.14",
        "country": "오스트리아",
        "team": "볼로냐"
    },
    {
        "name": "리코 헨리",
        "originName": "리코 헨리",
        "pos": "LB",
        "birth": "1997.07.08",
        "country": "잉글랜드",
        "team": "브렌트퍼드"
    },
    {
        "name": "E. 부엔디아",
        "originName": "에밀리아노 부엔디아",
        "pos": "CAM",
        "birth": "1996.12.25",
        "country": "아르헨티나",
        "team": "애스턴 빌라"
    },
    {
        "name": "다비드 소리아",
        "originName": "다비드 소리아 솔리스",
        "pos": "GK",
        "birth": "1993.04.04",
        "country": "스페인",
        "team": "헤타페 CF"
    },
    {
        "name": "보르하 마요랄",
        "originName": "보르하 마요랄 모야",
        "pos": "ST",
        "birth": "1997.04.05",
        "country": "스페인",
        "team": "헤타페 CF"
    },
    {
        "name": "K. 워커-피터스",
        "originName": "카일 워커-피터스",
        "pos": "RB",
        "birth": "1997.04.13",
        "country": "잉글랜드",
        "team": "사우샘프턴"
    },
    {
        "name": "라이요",
        "originName": "안토니오 호세 라이요 아레나스",
        "pos": "CB",
        "birth": "1991.08.10",
        "country": "스페인",
        "team": "RCD 마요르카"
    },
    {
        "name": "에즈리 콘사",
        "originName": "에즈리 콘사",
        "pos": "CB",
        "birth": "1997.10.23",
        "country": "잉글랜드",
        "team": "애스턴 빌라"
    },
    {
        "name": "조지프 아이두",
        "originName": "조지프 아이두",
        "pos": "CB",
        "birth": "1995.09.29",
        "country": "가나",
        "team": "셀타 비고"
    },
    {
        "name": "L. 쿨리발리",
        "originName": "라사나 쿨리발리",
        "pos": "CDM",
        "birth": "1996.04.10",
        "country": "말리",
        "team": "살레르니타나"
    },
    {
        "name": "미겔 알미론",
        "originName": "미겔 알미론",
        "pos": "RW",
        "birth": "1994.02.10",
        "country": "파라과이",
        "team": "뉴캐슬 유나이티드"
    },
    {
        "name": "발데마르 안톤",
        "originName": "발데마르 안톤",
        "pos": "CB",
        "birth": "1996.07.20",
        "country": "독일",
        "team": "VfB 슈투트가르트"
    },
    {
        "name": "잭 해리슨",
        "originName": "잭 해리슨",
        "pos": "LW",
        "birth": "1996.11.20",
        "country": "잉글랜드",
        "team": "리즈 유나이티드"
    },
    {
        "name": "J. 루쿠미",
        "originName": "존 루쿠미",
        "pos": "CB",
        "birth": "1998.06.26",
        "country": "콜롬비아",
        "team": "볼로냐"
    },
    {
        "name": "데이비드 오케레케",
        "originName": "데이비드 오케레케",
        "pos": "ST",
        "birth": "1997.08.29",
        "country": "나이지리아",
        "team": "크레모네세"
    },
    {
        "name": "L. 로베르토네",
        "originName": "루카스 로베르토네",
        "pos": "CM",
        "birth": "1997.03.18",
        "country": "아르헨티나",
        "team": "UD 알메리아"
    },
    {
        "name": "M. 깁스-화이트",
        "originName": "모건 깁스-화이트",
        "pos": "CAM",
        "birth": "2000.01.27",
        "country": "잉글랜드",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "벤 화이트",
        "originName": "벤저민 화이트",
        "pos": "RB",
        "birth": "1997.10.08",
        "country": "잉글랜드",
        "team": "아스널"
    },
    {
        "name": "바우트 파스",
        "originName": "바우트 파스",
        "pos": "CB",
        "birth": "1998.04.03",
        "country": "벨기에",
        "team": "레스터 시티"
    },
    {
        "name": "S. 부에노",
        "originName": "산티아고 부에노",
        "pos": "CB",
        "birth": "1998.11.09",
        "country": "우루과이",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "V. 카스테야노스",
        "originName": "발렌틴 카스테야노스",
        "pos": "ST",
        "birth": "1998.10.03",
        "country": "아르헨티나",
        "team": "라티움"
    },
    {
        "name": "이선 피넉",
        "originName": "이선 피넉",
        "pos": "CB",
        "birth": "1993.05.29",
        "country": "자메이카",
        "team": "브렌트퍼드"
    },
    {
        "name": "로빈 코흐",
        "originName": "로빈 코흐",
        "pos": "CB",
        "birth": "1996.07.17",
        "country": "독일",
        "team": "리즈 유나이티드"
    },
    {
        "name": "A. 마칼리스테르",
        "originName": "알렉시스 마칼리스테르",
        "pos": "CM",
        "birth": "1998.12.24",
        "country": "아르헨티나",
        "team": "리버풀"
    },
    {
        "name": "음발라 은졸라",
        "originName": "음발라 은졸라",
        "pos": "ST",
        "birth": "1996.08.18",
        "country": "앙골라",
        "team": "피오렌티나"
    },
    {
        "name": "E. 데미로비치",
        "originName": "에르메딘 데미로비치",
        "pos": "ST",
        "birth": "1998.03.25",
        "country": "보스니아 헤르체고비나",
        "team": "FC 아우크스부르크"
    },
    {
        "name": "메디 레리스",
        "originName": "메디 레리스",
        "pos": "CM",
        "birth": "1998.05.23",
        "country": "알제리",
        "team": "스토크 시티"
    },
    {
        "name": "T. 아우젤로",
        "originName": "톰마소 아우젤로",
        "pos": "LM",
        "birth": "1994.08.30",
        "country": "이탈리아",
        "team": "칼리아리"
    },
    {
        "name": "오스카르 발렌틴",
        "originName": "오스카르 발렌틴 마르틴 루엥고",
        "pos": "CDM",
        "birth": "1994.08.20",
        "country": "스페인",
        "team": "라요 바예카노"
    },
    {
        "name": "A. 부온조르노",
        "originName": "알레산드로 부온조르노",
        "pos": "CB",
        "birth": "1999.06.06",
        "country": "이탈리아",
        "team": "토리노"
    },
    {
        "name": "우나이 누녜스",
        "originName": "우나이 누녜스 헤스토소",
        "pos": "CB",
        "birth": "1997.01.30",
        "country": "스페인",
        "team": "아틀레틱 빌바오"
    },
    {
        "name": "야카 비욜",
        "originName": "야카 비욜",
        "pos": "CB",
        "birth": "1999.02.05",
        "country": "슬로베니아",
        "team": "우디네세"
    },
    {
        "name": "모르텐 휠만",
        "originName": "모르텐 휠만",
        "pos": "CDM",
        "birth": "1999.06.25",
        "country": "덴마크",
        "team": "스포르팅 CP"
    },
    {
        "name": "M. 킬먼",
        "originName": "막시밀리안 킬먼",
        "pos": "CB",
        "birth": "1997.05.23",
        "country": "잉글랜드",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "마리우스 뷜터",
        "originName": "마리우스 뷜터",
        "pos": "LW",
        "birth": "1993.03.29",
        "country": "독일",
        "team": "TSG 호펜하임"
    },
    {
        "name": "카테나",
        "originName": "알레한드로 카테나 마루간",
        "pos": "CB",
        "birth": "1994.10.28",
        "country": "스페인",
        "team": "오사수나"
    },
    {
        "name": "카를루스 아우구스투",
        "originName": "카를루스 아우구스투 소폴라투 네베스",
        "pos": "LB",
        "birth": "1999.01.07",
        "country": "브라질",
        "team": "AC 몬차"
    },
    {
        "name": "F. 파리시",
        "originName": "파비아노 파리시",
        "pos": "LB",
        "birth": "2000.11.09",
        "country": "이탈리아",
        "team": "피오렌티나"
    },
    {
        "name": "프란 가르시아",
        "originName": "프란시스코 호세 가르시아 토레스",
        "pos": "LB",
        "birth": "1999.08.14",
        "country": "스페인",
        "team": "레알 마드리드"
    },
    {
        "name": "발랑탕 장드레",
        "originName": "발랑탕 장드레",
        "pos": "RB",
        "birth": "2000.06.21",
        "country": "프랑스",
        "team": "레체"
    },
    {
        "name": "미키 반더벤",
        "originName": "미키 반더벤",
        "pos": "CB",
        "birth": "2001.04.19",
        "country": "네덜란드",
        "team": "토트넘 홋스퍼"
    },
    {
        "name": "F. 바스키로토",
        "originName": "페데리코 바스키로토",
        "pos": "CB",
        "birth": "1996.09.20",
        "country": "이탈리아",
        "team": "레체"
    },
    {
        "name": "구성윤",
        "originName": "구성윤",
        "pos": "GK",
        "birth": "1994.06.27",
        "country": "대한민국",
        "team": "대구 FC"
    },
    {
        "name": "아르나우 마르티네스",
        "originName": "아르나우 마르티네스 로페스",
        "pos": "RB",
        "birth": "2003.04.25",
        "country": "스페인",
        "team": "지로나 FC"
    },
    {
        "name": "G. 마마르다슈빌리",
        "originName": "기오르기 마마르다슈빌리",
        "pos": "GK",
        "birth": "2000.09.29",
        "country": "조지아",
        "team": "발렌시아 CF"
    },
    {
        "name": "안준수",
        "originName": "안준수",
        "pos": "GK",
        "birth": "1998.01.28",
        "country": "대한민국",
        "team": "전남 드래곤즈"
    },
    {
        "name": "이상민",
        "originName": "이상민",
        "pos": "CB",
        "birth": "1998.01.01",
        "country": "대한민국",
        "team": "FC 서울"
    },
    {
        "name": "안찬기",
        "originName": "안찬기",
        "pos": "GK",
        "birth": "1998.04.06",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "김현우",
        "originName": "김현우",
        "pos": "CB",
        "birth": "1999.03.07",
        "country": "대한민국",
        "team": "대전 하나 시티즌"
    },
    {
        "name": "김재우",
        "originName": "김재우",
        "pos": "CB",
        "birth": "1998.02.06",
        "country": "대한민국",
        "team": "대전 하나 시티즌"
    },
    {
        "name": "이재익",
        "originName": "이재익",
        "pos": "CB",
        "birth": "1999.05.21",
        "country": "대한민국",
        "team": "서울 이랜드"
    },
    {
        "name": "김준형",
        "originName": "김준형",
        "pos": "CM",
        "birth": "1996.04.05",
        "country": "대한민국",
        "team": "부천 FC 1995"
    },
    {
        "name": "김진현",
        "originName": "김진현",
        "pos": "GK",
        "birth": "1987.07.06",
        "country": "대한민국",
        "team": "세레소 오사카"
    },
    {
        "name": "박태준",
        "originName": "박태준",
        "pos": "CM",
        "birth": "1999.01.19",
        "country": "대한민국",
        "team": "성남 FC"
    },
    {
        "name": "박지민",
        "originName": "박지민",
        "pos": "GK",
        "birth": "2000.05.25",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "이광연",
        "originName": "이광연",
        "pos": "GK",
        "birth": "1999.09.11",
        "country": "대한민국",
        "team": "강원 FC"
    },
    {
        "name": "이규혁",
        "originName": "이규혁",
        "pos": "LB",
        "birth": "1999.05.04",
        "country": "대한민국",
        "team": "전남 드래곤즈"
    },
    {
        "name": "김세윤",
        "originName": "김세윤",
        "pos": "RW",
        "birth": "1999.04.29",
        "country": "대한민국",
        "team": "천안 시티 FC"
    },
    {
        "name": "김정민",
        "originName": "김정민",
        "pos": "CM",
        "birth": "1999.11.13",
        "country": "대한민국",
        "team": "FC 안양"
    },
    {
        "name": "황태현",
        "originName": "황태현",
        "pos": "RB",
        "birth": "1999.01.29",
        "country": "대한민국",
        "team": "서울 이랜드"
    },
    {
        "name": "이상준",
        "originName": "이상준",
        "pos": "RB",
        "birth": "1999.10.14",
        "country": "대한민국",
        "team": "부산 아이파크"
    },
    {
        "name": "대니얼 그림쇼",
        "originName": "대니얼 그림쇼",
        "pos": "GK",
        "birth": "1998.01.16",
        "country": "잉글랜드",
        "team": "블랙풀"
    },
    {
        "name": "D. 듀헤이니",
        "originName": "데미코 듀헤이니",
        "pos": "RB",
        "birth": "1998.10.13",
        "country": "잉글랜드",
        "team": "스토크 시티"
    },
    {
        "name": "T. 델레-바시루",
        "originName": "톰 델레-바시루",
        "pos": "CM",
        "birth": "1999.09.17",
        "country": "잉글랜드",
        "team": "왓퍼드"
    },
    {
        "name": "사두 디알로",
        "originName": "사두 디알로",
        "pos": "CDM",
        "birth": "1999.06.10",
        "country": "잉글랜드",
        "team": "데리 시티"
    },
    {
        "name": "최민수",
        "originName": "최민수",
        "pos": "GK",
        "birth": "2000.02.26",
        "country": "대한민국",
        "team": "FIU 팬터스"
    },
    {
        "name": "C. 험프리스-그랜트",
        "originName": "캐머런 험프리스-그랜트",
        "pos": "CB",
        "birth": "1998.08.22",
        "country": "잉글랜드",
        "team": "로더럼 유나이티드"
    },
    {
        "name": "J. 라티보디어",
        "originName": "조엘 라티보디어",
        "pos": "CB",
        "birth": "2000.01.06",
        "country": "잉글랜드",
        "team": "코벤트리 시티"
    },
    {
        "name": "A. 무리치",
        "originName": "아리야네트 무리치",
        "pos": "GK",
        "birth": "1998.11.07",
        "country": "몬테네그로",
        "team": "번리"
    },
    {
        "name": "장현수",
        "originName": "장현수",
        "pos": "CB",
        "birth": "1991.09.28",
        "country": "대한민국",
        "team": "알힐랄"
    },
    {
        "name": "이승모",
        "originName": "이승모",
        "pos": "CDM",
        "birth": "1998.03.30",
        "country": "대한민국",
        "team": "FC 서울"
    },
    {
        "name": "안토니오 미란테",
        "originName": "안토니오 미란테",
        "pos": "GK",
        "birth": "1983.07.08",
        "country": "이탈리아",
        "team": "AC 밀란"
    },
    {
        "name": "안드레스 페르난데스",
        "originName": "안드레스 에두아르도 페르난데스 모레노",
        "pos": "GK",
        "birth": "1986.12.16",
        "country": "스페인",
        "team": "레반테 UD"
    },
    {
        "name": "장-루이 레카",
        "originName": "장-루이 레카",
        "pos": "GK",
        "birth": "1985.09.21",
        "country": "프랑스",
        "team": "RC 랑스"
    },
    {
        "name": "A. 미에제예프스키",
        "originName": "아드리안 미에제예프스키",
        "pos": "CM",
        "birth": "1986.11.06",
        "country": "폴란드",
        "team": "허난 FC"
    },
    {
        "name": "E. 비비아노",
        "originName": "에밀리아노 비비아노",
        "pos": "GK",
        "birth": "1985.12.01",
        "country": "이탈리아",
        "team": "아스콜리"
    },
    {
        "name": "L. 데실베스트리",
        "originName": "로렌초 데실베스트리",
        "pos": "RB",
        "birth": "1988.05.23",
        "country": "이탈리아",
        "team": "볼로냐"
    },
    {
        "name": "요나 토이비오",
        "originName": "요나 토이비오",
        "pos": "CB",
        "birth": "1988.04.04",
        "country": "핀란드",
        "team": "HJK 헬싱키"
    },
    {
        "name": "아스미르 베고비치",
        "originName": "아스미르 베고비치",
        "pos": "GK",
        "birth": "1987.06.20",
        "country": "보스니아 헤르체고비나",
        "team": "퀸스파크 레인저스"
    },
    {
        "name": "B. 비아르드나손",
        "originName": "비르키르 비아르드나손",
        "pos": "CAM",
        "birth": "1988.05.27",
        "country": "아이슬란드",
        "team": "브레시아"
    },
    {
        "name": "카밀 그로시츠키",
        "originName": "카밀 그로시츠키",
        "pos": "LM",
        "birth": "1988.06.08",
        "country": "폴란드",
        "team": "포곤 슈체친"
    },
    {
        "name": "앙헬",
        "originName": "앙헬 루이스 로드리게스 디아스",
        "pos": "ST",
        "birth": "1987.04.26",
        "country": "스페인",
        "team": "CD 테네리페"
    },
    {
        "name": "토마 망가니",
        "originName": "토마 망가니",
        "pos": "CDM",
        "birth": "1987.04.29",
        "country": "프랑스",
        "team": "AC 아작시오"
    },
    {
        "name": "다미앙 다실바",
        "originName": "다미앙 다실바",
        "pos": "CB",
        "birth": "1988.05.17",
        "country": "프랑스",
        "team": "멜버른 빅토리"
    },
    {
        "name": "왕다레이",
        "originName": "왕다레이",
        "pos": "GK",
        "birth": "1989.01.10",
        "country": "중국",
        "team": "산둥 타이산"
    },
    {
        "name": "위한차오",
        "originName": "위한차오",
        "pos": "LM",
        "birth": "1987.02.25",
        "country": "중국",
        "team": "상하이 선화"
    },
    {
        "name": "후벵 히베이루",
        "originName": "후벵 티아구 호드리게스 히베이루",
        "pos": "CM",
        "birth": "1987.08.01",
        "country": "포르투갈",
        "team": "GD 샤베스"
    },
    {
        "name": "위다바오",
        "originName": "위다바오",
        "pos": "CB",
        "birth": "1988.04.18",
        "country": "중국",
        "team": "베이징 궈안"
    },
    {
        "name": "로맹 토마",
        "originName": "로맹 토마",
        "pos": "CB",
        "birth": "1988.06.12",
        "country": "프랑스",
        "team": "스타드 말레르브 캉"
    },
    {
        "name": "R. 알레산드리니",
        "originName": "로망 알레상드리니",
        "pos": "ST",
        "birth": "1989.04.03",
        "country": "프랑스",
        "team": "선전 FC"
    },
    {
        "name": "애슐리 반스",
        "originName": "애슐리 반스",
        "pos": "ST",
        "birth": "1989.10.30",
        "country": "잉글랜드",
        "team": "노리치 시티"
    },
    {
        "name": "P. 음포쿠",
        "originName": "폴-조제 음포쿠",
        "pos": "ST",
        "birth": "1992.04.19",
        "country": "콩고 민주 공화국",
        "team": "인천 유나이티드"
    },
    {
        "name": "S. 부르헤르트",
        "originName": "사샤 부르헤르트",
        "pos": "GK",
        "birth": "1989.10.30",
        "country": "독일",
        "team": "FC 장크트파울리"
    },
    {
        "name": "S. 아지즈",
        "originName": "세르다르 아지즈",
        "pos": "CB",
        "birth": "1990.10.23",
        "country": "튀르키예",
        "team": "페네르바흐체"
    },
    {
        "name": "리엄 쿠퍼",
        "originName": "리엄 쿠퍼",
        "pos": "CB",
        "birth": "1991.08.30",
        "country": "스코틀랜드",
        "team": "리즈 유나이티드"
    },
    {
        "name": "아리다네",
        "originName": "아리다네 에르난데스 움피에레스",
        "pos": "CB",
        "birth": "1989.03.23",
        "country": "스페인",
        "team": "라요 바예카노"
    },
    {
        "name": "에런 크레스웰",
        "originName": "에런 크레스웰",
        "pos": "LB",
        "birth": "1989.12.15",
        "country": "잉글랜드",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "우카시 스코룹스키",
        "originName": "우카시 스코룹스키",
        "pos": "GK",
        "birth": "1991.05.05",
        "country": "폴란드",
        "team": "볼로냐"
    },
    {
        "name": "메르트 귀노크",
        "originName": "메르트 귀노크",
        "pos": "GK",
        "birth": "1989.03.01",
        "country": "튀르키예",
        "team": "베식타슈"
    },
    {
        "name": "그레이엄 주시",
        "originName": "그레이엄 주시",
        "pos": "RB",
        "birth": "1986.08.18",
        "country": "미국",
        "team": "스포팅 캔자스 시티"
    },
    {
        "name": "헨릭 달스고르",
        "originName": "헨릭 달스고르",
        "pos": "CB",
        "birth": "1989.07.27",
        "country": "덴마크",
        "team": "FC 미트윌란"
    },
    {
        "name": "미카일 안토니오",
        "originName": "미카일 안토니오",
        "pos": "ST",
        "birth": "1990.03.28",
        "country": "자메이카",
        "team": "웨스트 햄 유나이티드"
    },
    {
        "name": "M. 실베스트리",
        "originName": "마르코 실베스트리",
        "pos": "GK",
        "birth": "1991.03.02",
        "country": "이탈리아",
        "team": "우디네세"
    },
    {
        "name": "오마르 엘압델라위",
        "originName": "오마르 엘압델라위",
        "pos": "RB",
        "birth": "1991.12.05",
        "country": "노르웨이",
        "team": "FK 보되/글림트"
    },
    {
        "name": "정정",
        "originName": "정정",
        "pos": "CB",
        "birth": "1989.07.11",
        "country": "중국",
        "team": "산둥 타이산"
    },
    {
        "name": "이용래",
        "originName": "이용래",
        "pos": "CM",
        "birth": "1986.04.17",
        "country": "대한민국",
        "team": "대구 FC"
    },
    {
        "name": "임종은",
        "originName": "임종은",
        "pos": "CB",
        "birth": "1990.06.18",
        "country": "대한민국",
        "team": "울산 현대"
    },
    {
        "name": "K. 노르드펠트",
        "originName": "크리스토페르 노르드펠트",
        "pos": "GK",
        "birth": "1989.06.23",
        "country": "스웨덴",
        "team": "AIK"
    },
    {
        "name": "A. 루테",
        "originName": "안드레아스 루테",
        "pos": "GK",
        "birth": "1987.03.10",
        "country": "독일",
        "team": "1. FC 카이저슬라우테른"
    },
    {
        "name": "파비안 클로스",
        "originName": "파비안 클로스",
        "pos": "ST",
        "birth": "1987.12.02",
        "country": "독일",
        "team": "아르미니아 빌레펠트"
    },
    {
        "name": "마테우시 클리흐",
        "originName": "마테우시 클리흐",
        "pos": "CM",
        "birth": "1990.06.13",
        "country": "폴란드",
        "team": "리즈 유나이티드"
    },
    {
        "name": "뱅상 르고프",
        "originName": "뱅상 르고프",
        "pos": "LB",
        "birth": "1989.10.15",
        "country": "프랑스",
        "team": "FC 로리앙"
    },
    {
        "name": "닐 에더리지",
        "originName": "닐 에더리지",
        "pos": "GK",
        "birth": "1990.02.07",
        "country": "필리핀",
        "team": "버밍엄 시티"
    },
    {
        "name": "아이토르",
        "originName": "아이토르 페르난데스",
        "pos": "GK",
        "birth": "1991.05.03",
        "country": "스페인",
        "team": "오사수나"
    },
    {
        "name": "비드 벨레츠",
        "originName": "비드 벨레츠",
        "pos": "GK",
        "birth": "1990.06.06",
        "country": "슬로베니아",
        "team": "아포엘 FC"
    },
    {
        "name": "그자비에 샤발레랑",
        "originName": "그자비에 샤발레랑",
        "pos": "CM",
        "birth": "1991.03.07",
        "country": "프랑스",
        "team": "ESTAC 트루아"
    },
    {
        "name": "네시프 우이살",
        "originName": "네시프 우이살",
        "pos": "CB",
        "birth": "1991.01.24",
        "country": "튀르키예",
        "team": "베식타슈"
    },
    {
        "name": "주카 라이탈라",
        "originName": "유카 라이탈라",
        "pos": "CB",
        "birth": "1988.09.15",
        "country": "핀란드",
        "team": "HJK 헬싱키"
    },
    {
        "name": "폰투스 얀손",
        "originName": "폰투스 얀손",
        "pos": "CB",
        "birth": "1991.02.13",
        "country": "스웨덴",
        "team": "말뫼 FF"
    },
    {
        "name": "라파우 기키에비치",
        "originName": "라파우 기키에비치",
        "pos": "GK",
        "birth": "1987.10.26",
        "country": "폴란드",
        "team": "MKE 앙카라귀쥐"
    },
    {
        "name": "크레이그 도슨",
        "originName": "크레이그 도슨",
        "pos": "CB",
        "birth": "1990.05.06",
        "country": "잉글랜드",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "플로리안 카인츠",
        "originName": "플로리안 카인츠",
        "pos": "CAM",
        "birth": "1992.10.24",
        "country": "오스트리아",
        "team": "1. FC 쾰른"
    },
    {
        "name": "이용재",
        "originName": "이용재",
        "pos": "ST",
        "birth": "1991.06.08",
        "country": "대한민국",
        "team": "전남 드래곤즈"
    },
    {
        "name": "M. 파라오니",
        "originName": "마르코 다비데 파라오니",
        "pos": "RWB",
        "birth": "1991.10.25",
        "country": "이탈리아",
        "team": "엘라스 베로나"
    },
    {
        "name": "모이제스",
        "originName": "모이제스 리마 마갈량이스",
        "pos": "CAM",
        "birth": "1988.03.17",
        "country": "브라질",
        "team": "산둥 타이산"
    },
    {
        "name": "뱅자맹 르루아",
        "originName": "뱅자맹 르루아",
        "pos": "GK",
        "birth": "1989.04.07",
        "country": "프랑스",
        "team": "케비-루앙 메트로폴"
    },
    {
        "name": "아코스티",
        "originName": "보아두 막스웰 아코스티",
        "pos": "RW",
        "birth": "1991.09.10",
        "country": "가나",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "조나탄 비에라",
        "originName": "조나탄 비에라 라모스",
        "pos": "CAM",
        "birth": "1989.10.01",
        "country": "스페인",
        "team": "UD 라스팔마스"
    },
    {
        "name": "대니얼 벤틀리",
        "originName": "대니얼 벤틀리",
        "pos": "GK",
        "birth": "1993.07.13",
        "country": "잉글랜드",
        "team": "울버햄프턴 원더러스"
    },
    {
        "name": "C. 감보아",
        "originName": "크리스티안 감보아",
        "pos": "RB",
        "birth": "1989.10.24",
        "country": "코스타리카",
        "team": "VfL 보훔 1848"
    },
    {
        "name": "J. 윌리암스",
        "originName": "조니 윌리엄스",
        "pos": "LM",
        "birth": "1993.10.09",
        "country": "웨일스",
        "team": "길링엄"
    },
    {
        "name": "세드리크 바캄부",
        "originName": "세드리크 바캄부",
        "pos": "ST",
        "birth": "1991.04.11",
        "country": "콩고 민주 공화국",
        "team": "갈라타사라이"
    },
    {
        "name": "왕강",
        "originName": "왕강",
        "pos": "RB",
        "birth": "1989.02.17",
        "country": "중국",
        "team": "베이징 궈안"
    },
    {
        "name": "니콜라 팔루아",
        "originName": "니콜라 팔루아",
        "pos": "CB",
        "birth": "1987.09.19",
        "country": "프랑스",
        "team": "FC 낭트"
    },
    {
        "name": "토마시 홀리",
        "originName": "토마시 홀리",
        "pos": "GK",
        "birth": "1991.12.10",
        "country": "체코",
        "team": "칼라일 유나이티드"
    },
    {
        "name": "P. 차바리아",
        "originName": "파블로 차바리아",
        "pos": "ST",
        "birth": "1988.01.02",
        "country": "아르헨티나",
        "team": "벨그라노 데 코르도바"
    },
    {
        "name": "조르디 마시프",
        "originName": "조르디 마시프 로페스",
        "pos": "GK",
        "birth": "1989.01.03",
        "country": "스페인",
        "team": "레알 바야돌리드"
    },
    {
        "name": "파바오 페르반",
        "originName": "파바오 페르반",
        "pos": "GK",
        "birth": "1987.11.13",
        "country": "오스트리아",
        "team": "VfL 볼프스부르크"
    },
    {
        "name": "예세 요로넨",
        "originName": "예세 요로넨",
        "pos": "GK",
        "birth": "1993.03.21",
        "country": "핀란드",
        "team": "베네치아"
    },
    {
        "name": "M. 오즈도예프",
        "originName": "마고메트 오즈도예프",
        "pos": "CM",
        "birth": "1992.11.05",
        "country": "러시아",
        "team": "파오크 FC"
    },
    {
        "name": "미하엘 에서",
        "originName": "미하엘 에서",
        "pos": "GK",
        "birth": "1987.11.22",
        "country": "독일",
        "team": "VfL 보훔 1848"
    },
    {
        "name": "토마시 쿠베크",
        "originName": "토마시 쿠베크",
        "pos": "GK",
        "birth": "1992.08.26",
        "country": "체코",
        "team": "FC 아우크스부르크"
    },
    {
        "name": "루카스 힌터제어",
        "originName": "루카스 힌터제어",
        "pos": "ST",
        "birth": "1991.03.28",
        "country": "오스트리아",
        "team": "한자 로스토크"
    },
    {
        "name": "페드루 멘데스",
        "originName": "페드루 필리피 테오도시우 멘데스",
        "pos": "CB",
        "birth": "1990.10.01",
        "country": "포르투갈",
        "team": "이스트렐라 아마도라"
    },
    {
        "name": "S. 아이도두",
        "originName": "소네르 아이도두",
        "pos": "CDM",
        "birth": "1991.01.05",
        "country": "튀르키예",
        "team": "삼순스포르"
    },
    {
        "name": "장린펑",
        "originName": "장린펑",
        "pos": "CB",
        "birth": "1989.05.09",
        "country": "중국",
        "team": "상하이 하이강"
    },
    {
        "name": "아담 데이비스",
        "originName": "아담 데이비스",
        "pos": "GK",
        "birth": "1992.07.17",
        "country": "웨일스",
        "team": "셰필드 유나이티드"
    },
    {
        "name": "장광타이",
        "originName": "장광타이",
        "pos": "CB",
        "birth": "1994.05.27",
        "country": "중국",
        "team": "상하이 하이강"
    },
    {
        "name": "로렌초 토넬리",
        "originName": "로렌초 토넬리",
        "pos": "CB",
        "birth": "1990.01.17",
        "country": "이탈리아",
        "team": "엠폴리"
    },
    {
        "name": "F. 뢴노우",
        "originName": "프레데리크 뢴노우",
        "pos": "GK",
        "birth": "1992.08.04",
        "country": "덴마크",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "C. 귀트키어",
        "originName": "크리스티안 귀트키어",
        "pos": "ST",
        "birth": "1990.05.06",
        "country": "덴마크",
        "team": "베네치아"
    },
    {
        "name": "위하이",
        "originName": "위하이",
        "pos": "CB",
        "birth": "1987.06.04",
        "country": "중국",
        "team": "상하이 하이강"
    },
    {
        "name": "김수범",
        "originName": "김수범",
        "pos": "LB",
        "birth": "1990.10.02",
        "country": "대한민국",
        "team": "전남 드래곤즈"
    },
    {
        "name": "지몬 촐러",
        "originName": "지몬 촐러",
        "pos": "ST",
        "birth": "1991.06.26",
        "country": "독일",
        "team": "FC 장크트파울리"
    },
    {
        "name": "제롬 루시용",
        "originName": "제롬 루시용",
        "pos": "LWB",
        "birth": "1993.01.06",
        "country": "프랑스",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "윌리 볼리",
        "originName": "윌리 볼리",
        "pos": "CB",
        "birth": "1991.02.03",
        "country": "코트디부아르",
        "team": "노팅엄 포리스트"
    },
    {
        "name": "알렉산더 슈볼로",
        "originName": "알렉산더 슈볼로",
        "pos": "GK",
        "birth": "1992.06.02",
        "country": "독일",
        "team": "1. FC 우니온 베를린"
    },
    {
        "name": "리커",
        "originName": "리커",
        "pos": "CM",
        "birth": "1993.05.24",
        "country": "중국",
        "team": "베이징 궈안"
    },
    {
        "name": "이종성",
        "originName": "이종성",
        "pos": "CDM",
        "birth": "1992.08.05",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "류원우",
        "originName": "류원우",
        "pos": "GK",
        "birth": "1990.08.05",
        "country": "대한민국",
        "team": "충북 청주 FC"
    },
    {
        "name": "디에고 차라",
        "originName": "디에고 차라",
        "pos": "CDM",
        "birth": "1986.04.05",
        "country": "콜롬비아",
        "team": "포틀랜드 팀버스"
    },
    {
        "name": "L. 비텐코르트",
        "originName": "레오나르도 비텐코르트",
        "pos": "CAM",
        "birth": "1993.12.19",
        "country": "독일",
        "team": "베르더 브레멘"
    },
    {
        "name": "이반 발리우",
        "originName": "이반 발리우",
        "pos": "RB",
        "birth": "1992.01.01",
        "country": "알바니아",
        "team": "라요 바예카노"
    },
    {
        "name": "토마 들렌",
        "originName": "토마 들렌",
        "pos": "LWB",
        "birth": "1992.03.24",
        "country": "프랑스",
        "team": "스트라스부르 알자스"
    },
    {
        "name": "다미안 수아레스",
        "originName": "다미안 수아레스",
        "pos": "RWB",
        "birth": "1988.04.27",
        "country": "우루과이",
        "team": "헤타페 CF"
    },
    {
        "name": "리차드",
        "originName": "리처드 윈드비클러",
        "pos": "CB",
        "birth": "1991.04.02",
        "country": "오스트리아",
        "team": "청두 룽청"
    },
    {
        "name": "존 브룩스",
        "originName": "존 브룩스",
        "pos": "CB",
        "birth": "1993.01.28",
        "country": "미국",
        "team": "TSG 호펜하임"
    },
    {
        "name": "에드가르 바디아",
        "originName": "에드가르 바디아 과르디올라",
        "pos": "GK",
        "birth": "1992.02.12",
        "country": "스페인",
        "team": "엘체 CF"
    },
    {
        "name": "조 롤스",
        "originName": "조 롤스",
        "pos": "CM",
        "birth": "1993.10.12",
        "country": "잉글랜드",
        "team": "카디프 시티"
    },
    {
        "name": "맥심 듀페",
        "originName": "맥심 듀페",
        "pos": "GK",
        "birth": "1993.03.04",
        "country": "프랑스",
        "team": "RSC 안데를레흐트"
    },
    {
        "name": "클레르크",
        "originName": "카를로스 클레르크 마르티네스",
        "pos": "LB",
        "birth": "1992.02.21",
        "country": "스페인",
        "team": "엘체 CF"
    },
    {
        "name": "토마스",
        "originName": "토마스 자과리비 베지넬리",
        "pos": "ST",
        "birth": "1993.02.24",
        "country": "브라질",
        "team": "광주 FC"
    },
    {
        "name": "오카이 요쿠슐루",
        "originName": "오카이 요쿠슐루",
        "pos": "CDM",
        "birth": "1994.03.09",
        "country": "튀르키예",
        "team": "웨스트 브로미치 앨비언"
    },
    {
        "name": "임창우",
        "originName": "임창우",
        "pos": "CB",
        "birth": "1992.02.13",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "페르난도",
        "originName": "페르난도 마르티네스 루비오",
        "pos": "GK",
        "birth": "1990.06.10",
        "country": "스페인",
        "team": "UD 알메리아"
    },
    {
        "name": "R. 프레더릭스",
        "originName": "라이언 프레더릭스",
        "pos": "RB",
        "birth": "1992.10.10",
        "country": "잉글랜드",
        "team": "AFC 본머스"
    },
    {
        "name": "얀 코피츠",
        "originName": "얀 코피츠",
        "pos": "RM",
        "birth": "1990.06.04",
        "country": "체코",
        "team": "빅토리아 플젠"
    },
    {
        "name": "알레시오 크라뇨",
        "originName": "알레시오 크라뇨",
        "pos": "GK",
        "birth": "1994.06.28",
        "country": "이탈리아",
        "team": "칼리아리"
    },
    {
        "name": "루카스 카스트로",
        "originName": "루카스 카스트로",
        "pos": "CM",
        "birth": "1989.04.09",
        "country": "아르헨티나",
        "team": "힘나시아 이에스그리마 라플라타"
    },
    {
        "name": "레오 밥티스탕",
        "originName": "레오나르두 카릴류 밥티스탕",
        "pos": "RM",
        "birth": "1992.08.26",
        "country": "브라질",
        "team": "UD 알메리아"
    },
    {
        "name": "샘 존스톤",
        "originName": "샘 존스톤",
        "pos": "GK",
        "birth": "1993.03.25",
        "country": "잉글랜드",
        "team": "크리스털 팰리스"
    },
    {
        "name": "도미니크 하인츠",
        "originName": "도미니크 하인츠",
        "pos": "CB",
        "birth": "1993.08.15",
        "country": "독일",
        "team": "1. FC 쾰른"
    },
    {
        "name": "폴 나르디",
        "originName": "폴 나르디",
        "pos": "GK",
        "birth": "1994.05.18",
        "country": "프랑스",
        "team": "KAA 겐트"
    },
    {
        "name": "김현",
        "originName": "김현",
        "pos": "ST",
        "birth": "1993.05.03",
        "country": "대한민국",
        "team": "수원 FC"
    },
    {
        "name": "빅토르 클라에손",
        "originName": "빅토르 클라에손",
        "pos": "CM",
        "birth": "1992.01.02",
        "country": "스웨덴",
        "team": "FC 코펜하겐"
    },
    {
        "name": "예레 우로넨",
        "originName": "예레 우로넨",
        "pos": "LB",
        "birth": "1994.07.13",
        "country": "핀란드",
        "team": "샬럿 FC"
    },
    {
        "name": "하파엘 시우바",
        "originName": "하파엘 다 시우바",
        "pos": "ST",
        "birth": "1992.04.04",
        "country": "브라질",
        "team": "전북 현대 모터스"
    },
    {
        "name": "로제르 마르티",
        "originName": "로제르 마르티 살바도르",
        "pos": "ST",
        "birth": "1991.01.03",
        "country": "스페인",
        "team": "카디스 CF"
    },
    {
        "name": "이한샘",
        "originName": "이한샘",
        "pos": "CB",
        "birth": "1989.10.18",
        "country": "대한민국",
        "team": "충북 청주 FC"
    },
    {
        "name": "M. 티투로",
        "originName": "마티아스 디투로",
        "pos": "GK",
        "birth": "1987.05.08",
        "country": "아르헨티나",
        "team": "파티흐 카라귐뤼크"
    },
    {
        "name": "토마스 람",
        "originName": "토마스 람",
        "pos": "CB",
        "birth": "1993.12.18",
        "country": "핀란드",
        "team": "PEC 즈볼러"
    },
    {
        "name": "김경중",
        "originName": "김경중",
        "pos": "LW",
        "birth": "1991.04.16",
        "country": "대한민국",
        "team": "수원 삼성 블루윙즈"
    },
    {
        "name": "A. 바카세타스",
        "originName": "아나스타시오스 바카세타스",
        "pos": "CM",
        "birth": "1993.06.28",
        "country": "그리스",
        "team": "트라브존스포르"
    },
    {
        "name": "토마스 포켓",
        "originName": "토마스 포켓",
        "pos": "RB",
        "birth": "1994.09.25",
        "country": "벨기에",
        "team": "스타드 랭스"
    },
    {
        "name": "H. 마그누손",
        "originName": "회르뒤르 마그누손",
        "pos": "CB",
        "birth": "1993.02.11",
        "country": "아이슬란드",
        "team": "파나티나이코스"
    },
    {
        "name": "페터 안케르센",
        "originName": "페터 안케르센",
        "pos": "RB",
        "birth": "1990.09.22",
        "country": "덴마크",
        "team": "FC 코펜하겐"
    },
    {
        "name": "윌 보크스",
        "originName": "윌 보크스",
        "pos": "CDM",
        "birth": "1993.09.13",
        "country": "웨일스",
        "team": "셰필드 웬즈데이"
    },
    {
        "name": "아드리앵 토마손",
        "originName": "아드리앵 토마손",
        "pos": "LW",
        "birth": "1993.12.10",
        "country": "프랑스",
        "team": "RC 랑스"
    },
    {
        "name": "요앙 가스티엥",
        "originName": "요앙 가스티엥",
        "pos": "CDM",
        "birth": "1988.01.25",
        "country": "프랑스",
        "team": "클레르몽 푸트"
    },
    {
        "name": "Y. 음찬가마",
        "originName": "유수프 음찬가마",
        "pos": "CM",
        "birth": "1990.08.29",
        "country": "코모로",
        "team": "ESTAC 트루아"
    },
    {
        "name": "O. 하우사위",
        "originName": "오마르 하우사위",
        "pos": "CB",
        "birth": "1985.09.27",
        "country": "사우디아라비아",
        "team": "알이티하드"
    },
    {
        "name": "플로랑 몰레",
        "originName": "플로랑 몰레",
        "pos": "CAM",
        "birth": "1991.11.19",
        "country": "프랑스",
        "team": "FC 낭트"
    },
    {
        "name": "르노 리파르",
        "originName": "르노 리파르",
        "pos": "RW",
        "birth": "1993.03.14",
        "country": "프랑스",
        "team": "ESTAC 트루아"
    },
    {
        "name": "샘 라르손",
        "originName": "샘 라르손",
        "pos": "LM",
        "birth": "1993.04.10",
        "country": "스웨덴",
        "team": "안탈랴스포르"
    },
    {
        "name": "토마시 켕지오라",
        "originName": "토마시 켕지오라",
        "pos": "RB",
        "birth": "1994.06.11",
        "country": "폴란드",
        "team": "디나모 키이우"
    },
    {
        "name": "리치아노 합스",
        "originName": "리치아노 합스",
        "pos": "LWB",
        "birth": "1993.06.12",
        "country": "수리남",
        "team": "베네치아"
    },
    {
        "name": "다르윈 마치스",
        "originName": "다르윈 마치스",
        "pos": "LM",
        "birth": "1993.02.07",
        "country": "베네수엘라",
        "team": "레알 바야돌리드"
    },
    {
        "name": "M. 켐프",
        "originName": "마르크-올리버 켐프",
        "pos": "CB",
        "birth": "1995.01.28",
        "country": "독일",
        "team": "헤르타 BSC"
    },
    {
        "name": "진성욱",
        "originName": "진성욱",
        "pos": "ST",
        "birth": "1993.12.16",
        "country": "대한민국",
        "team": "제주 유나이티드"
    },
    {
        "name": "루벤 가르시아",
        "originName": "루벤 가르시아 산토스",
        "pos": "LM",
        "birth": "1993.07.14",
        "country": "스페인",
        "team": "오사수나"
    },
    {
        "name": "니아샤 무셰퀴",
        "originName": "니아샤 무셰퀴",
        "pos": "ST",
        "birth": "1987.08.21",
        "country": "짐바브웨",
        "team": "저장 프로 FC"
    },
    {
        "name": "S. 디미트리예프스키",
        "originName": "스톨레 디미트리예프스키",
        "pos": "GK",
        "birth": "1993.12.25",
        "country": "북마케도니아",
        "team": "라요 바예카노"
    },
    {
        "name": "톰 로키어",
        "originName": "톰 로키어",
        "pos": "CB",
        "birth": "1994.12.03",
        "country": "웨일스",
        "team": "루턴 타운"
    },
    {
        "name": "루이스 베이커",
        "originName": "루이스 베이커",
        "pos": "CM",
        "birth": "1995.04.25",
        "country": "잉글랜드",
        "team": "스토크 시티"
    },
    {
        "name": "톰 로런스",
        "originName": "톰 로런스",
        "pos": "CAM",
        "birth": "1994.01.13",
        "country": "웨일스",
        "team": "레인저스"
    },
    {
        "name": "닐 모페",
        "originName": "닐 모페",
        "pos": "ST",
        "birth": "1996.08.14",
        "country": "프랑스",
        "team": "에버턴"
    },
    {
        "name": "정동호",
        "originName": "정동호",
        "pos": "LB",
        "birth": "1990.03.07",
        "country": "대한민국",
        "team": "수원 FC"
    },
    {
        "name": "F. 마수아쿠",
        "originName": "아르튀르 마수아쿠",
        "pos": "LB",
        "birth": "1993.11.07",
        "country": "콩고 민주 공화국",
        "team": "베식타슈"
    },
    {
        "name": "애론 칼베르",
        "originName": "애론 칼베르",
        "pos": "CB",
        "birth": "1996.01.12",
        "country": "호주",
        "team": "광주 FC"
    },
    {
        "name": "박정빈",
        "originName": "박정빈",
        "pos": "LM",
        "birth": "1994.02.22",
        "country": "대한민국",
        "team": "로데스 아베롱 풋볼"
    },
    {
        "name": "디에고 요렌테",
        "originName": "디에고 하비에르 요렌테 리오스",
        "pos": "CB",
        "birth": "1993.08.16",
        "country": "스페인",
        "team": "리즈 유나이티드"
    },
    {
        "name": "호니 로페스",
        "originName": "마르쿠스 파울루 메스키타 로페스",
        "pos": "RM",
        "birth": "1995.12.28",
        "country": "포르투갈",
        "team": "SC 브라가"
    }
];