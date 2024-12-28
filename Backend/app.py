from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/process'  ,methods = ['post'])
def process_data():
  # Simulate some data retrieval (replace with your actual logic)
  data = request.get_json()
  print(data)
  messages = data.get('messages') 
  return jsonify({'message' : messages})

if __name__ == '__main__':
  app.run(debug=False)

 