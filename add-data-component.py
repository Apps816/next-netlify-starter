import re
from bs4 import BeautifulSoup

def convert_to_upper_camel_case(class_name):
    # Split the class name using dashes or underscores
    parts = re.split(r'[-_]', class_name)

    # Capitalize each part
    parts = [part.capitalize() for part in parts]

    # Join the parts to form upper camel case
    upper_camel_case = ''.join(parts)

    # Capitalize "ui" as "UI"
    upper_camel_case = upper_camel_case.replace("Ui", "UI")

    return upper_camel_case

def add_data_component_to_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        # Read HTML content from the file
        html_content = file.read()

    # Parse HTML content using BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Find all section elements with class containing 'ui-section'
    sections = soup.find_all('section', class_=lambda x: x and 'ui-section' in x)

    # Iterate through each section and add data-component property
    for section in sections:
        # Get the current class value
        current_class = section.get('class')

        if current_class:
            # Convert the class name to upper camel case
            upper_camel_case = convert_to_upper_camel_case(current_class[0])

            # Add data-component property with the converted class name
            section['data-component'] = upper_camel_case

    # Save the modified HTML content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(str(soup))

# Example usage with file path
html_file_path = "C:\\Users\\brook\\Documents\\GitHub\\next-netlify-starter\\pages\\test-features-sections.html"
add_data_component_to_file(html_file_path)
