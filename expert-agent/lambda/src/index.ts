import * as Lambda from 'aws-lambda';
import * as Util from 'util';

/**
 * エントリポイント
 */
export const handler = async (
  event: Lambda.APIGatewayEvent,
  context: Lambda.Context,
  callback: Lambda.Callback
) => {
  console.log(`----\nReceived event: ${Util.inspect(event, { depth: null })}`);

  // JSONパース
  const payload = JSON.parse(String(event.body));

  console.log(`\npayload: ${Util.inspect(payload, { depth: null })}`);

  // 内部的に払い出されたボットを識別するID（基本使わない）
  const bot_id = payload.bot_id;
  // ユーザー識別ID（セッションなどを保持したい場合はこれを使う）
  const user_id = payload.user_id;
  // ユーザー発話
  const utterance = payload.args.utterance;
  // トリガーとなったインテントの名
  const intent = payload.args.intent;

  // 会話をこれで終わりにするかどうか（文字列指定：'true' 'false'）
  let talkend = 'false';
  // 返答文
  let sentence = '';
  // 返却値のオプション（チャットボット用に画像を含めたり出来る。）
  const option = {};

  let greeting = '';

  if (intent === 'Greeting') {
    // Slots 配列で来るけどとりあえず１個しか見ない
    greeting = payload.args.greeting[0];
  }

  if (greeting === 'こんにちは') {
    sentence = `はい、${greeting}だよ`;
  } else {
    sentence = `はい、${greeting}だよ。また、吉田を頼ってほしいよ。`;
    talkend = 'true';
  }

  callback(null, {
    'headers': { 'Content-Type': 'application/json' },
    'statusCode': 200,
    'body': JSON.stringify({
      'error_code': 'success',
      'status': 'true',
      'bot_id': bot_id,
      'user_id': user_id,
      'params': {
        'status': 'true',
        'talkend': talkend,
        'message': sentence,
        'option': option
      }
    })
  });
};
