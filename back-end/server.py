# Filename - server.py
from flask import *
import os
import pandas as pd
from werkzeug.utils import secure_filename
from fileinput import filename
import csv
import json

UPLOAD_FOLDER = './back-end/data/'
ALLOWED_EXTENSIONS = {'csv'}

# Initializing flask app
app = Flask(__name__)
# Configure upload file path flask
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
 
# Route for seeing a data
@app.route('/url_route', methods=['GET', 'POST'])
def uploadFile():
    if request.method == 'POST':
      # upload file flask
        f = request.files.get('file')
        # Extracting uploaded file name
        data_filename = secure_filename(f.filename)
        f.save(os.path.join(app.config['UPLOAD_FOLDER'],
                            data_filename))
        session['uploaded_data_file_path'] = os.path.join(app.config['UPLOAD_FOLDER'],
                     data_filename)
        return render_template('index2.html') #Upload Successful

# Function to convert a CSV to JSON
# Takes the file paths as arguments
def make_json(csvFilePath, jsonFilePath):
    # create a dictionary
    data = {}
    # Open a csv reader called DictReader
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
        # Convert each row into a dictionary 
        # and add it to data
        for rows in csvReader:
            # Assuming a column named 'No' to
            # be the primary key
            key = rows["Alcohol & Bars"]
            data[key] = rows
    # Open a json writer, and use the json.dumps() 
    # function to dump data
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))

@app.route('/show_data')
def showData():
    csvFilePath = session.get('uploaded_data_file_path', None)
    jsonFilePath = UPLOAD_FOLDER
    # Call the make_json function
    make_json(csvFilePath, jsonFilePath)
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)