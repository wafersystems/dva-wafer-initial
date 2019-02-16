export default {
  'POST /api/login/account': (req, res) => {
    const { password, username } = req.body;
    const isOk = password === '888888' && username === 'admin';
    res.send({ status: isOk ? 'ok' : 'error', type: 'account' });
  },
};
