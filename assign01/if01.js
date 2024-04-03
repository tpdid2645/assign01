document.addEventListener("DOMContentLoaded", function () {
  /* 각 섹션별 버튼 선택자 */

  let examQ4PlusBtn = document.querySelector(".btn_plus4");
  let examQ4MinusBtn = document.querySelector(".btn_minus4");

  /* 각 섹션별 li */

  let examQ4UlLi = document.querySelectorAll(".exam_q4 ul li");

  /* 인덱스 중복 x */

  let index5 = 1;
  let index6 = examQ4UlLi.length - 1;

  /* Q1. 처음부터 순서대로 일치하게 하시오. */
  /* Q1 변수 */
  let plusBtn = document.querySelector(".plus-btn");
  let examQ1UlLi = document.querySelectorAll(".exam_q1 ul li");
  let index = 0;

  /* Q1 이벤트 */
  plusBtn.addEventListener("click", firstClick);

  /* Q1 함수 */
  function firstClick() {
    if (index <= examQ1UlLi.length - 1) {
      examQ1UlLi[index].style.backgroundColor = "yellow";
      index++;
    } else {
      index = index;
    }
  }
  /* Q2. 마지막부터 역순대로 일치하게 하시오. */
  /* Q2변수 */
  let minusBtn = document.querySelector(".minus-btn");
  let examQ2UlLi = document.querySelectorAll(".exam_q2 ul li");
  let index2 = examQ2UlLi.length - 1;

  /* Q2 이벤트 */
  minusBtn.addEventListener("click", () => {
    if (index2 >= 0) {
      examQ2UlLi[index2].style.backgroundColor = "yellow";
      index2--;
    } else {
      index2 = index2;
    }
  });

  /* Q3. 순서대로 일치하게 하시고, 바로 전에 일치됐던 엘리먼트는 색을 지우시오. */
  /* Q3 변수 */
  let examQ3PlusBtn = document.querySelector(".btn_plus3");
  let examQ3MinusBtn = document.querySelector(".btn_minus3");
  let examQ3UlLi = document.querySelectorAll(".exam_q3 ul li");
  let index3 = 1;
  let index4 = examQ3UlLi.length - 1;

  /* Q3 플러스 버튼 이벤트 */
  examQ3PlusBtn.addEventListener("click", thirdClick);
  /* Q3 플러스 함수 */
  function thirdClick() {
    if (index3 <= examQ3UlLi.length - 1) {
      if (examQ3UlLi[index3 - 1].style.backgroundColor == "yellow") {
        examQ3UlLi[index3 - 1].style.backgroundColor = "transparent";
      }
      examQ3UlLi[index3].style.backgroundColor = "yellow";
      index3++;
    } else if(index3  ==  examQ3UlLi.length - 1) {
      index3 = 0;
    }
  }

  /* Q4 마이너스 이벤트 */
  examQ3MinusBtn.addEventListener("click", fourthClick);

  /* Q4 마이너스 함수 */
  function fourthClick() {
    if (
      index4 >= 0 &&
      examQ3UlLi[index4 - 1].style.backgroundColor == "yellow" &&
      examQ3UlLi[index4].style.backgroundColor == "yellow"
    ) {
      examQ3UlLi[index4 - 1].style.backgroundColor = "transparent";
      examQ3UlLi[index4].style.backgroundColor = "yellow";
      index4--;
    }else{
      index4 = examQ3UlLi.length - 1;
    }
  }
}); /* 자바스크립트 끝 */
