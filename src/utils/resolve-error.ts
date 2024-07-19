const dictionary: Record<string, number> = {
  ERR_NETWORK: 502,
  BAD_REQUEST: 400,
};

export default function resolveError(error: any): number {
  if (error.response) {
    console.log(error.response.data);
    return error.response.status;
  } else {
    console.log(error);
    return dictionary[error.code];
  }
}
