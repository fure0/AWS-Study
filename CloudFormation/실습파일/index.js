exports.handler = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('SAM을 사용하여 Lambda함수를 성공적으로 배포했습니다!')
    };
    callback(null, response);
};
