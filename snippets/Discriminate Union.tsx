type ValidationCheckReturnType = { ok: true } | { ok: false; reason: string };

function checkIsAgeValid(age: number): ValidationCheckReturnType {
  if (!Number.isInteger(age)) {
    return {
      ok: false,
      reason: "나이는 정수여야 해요.",
    };
  }
  // ...

  return { ok: true };
}

const isAgeValid = checkIsAgeValid(1.1);

if (isAgeValid.ok) {
  isAgeValid.reason; // 타입 에러: { ok: true } 타입에는 reason 속성이 없어요
} else {
  isAgeValid.reason; // ok가 false일 때만 reason 속성에 접근할 수 있어요
}
