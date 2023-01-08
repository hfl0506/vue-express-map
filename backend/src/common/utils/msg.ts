enum msgType {
  notfound = "NOT FOUND",
  success = "SUCCESS",
  fail = "FAILURE",
}

const toMsg = (str: string, type: msgType) => {
  return {
    type: type,
    msg: str,
  };
};

export { toMsg, msgType };
