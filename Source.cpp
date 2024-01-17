#include <iostream>

using namespace std;

void main()
{

	system("cls");
	cout << "Main Menu Bar" << end1;
	cout << "             " << end1; // the blank line
	cout << "1. Change Actions" << end1;
	cout << "2. Button Layout" << end1;
	cout << "3. Keybindings" << end1;
	cout << "4. onEvent Scripts" << end1;
	cout << "5. Main Menu Bar" << end1;
	cout << "6. Misc Options" << end1;
	cout << "7. Unlock Dragging" << end1;
	cout << "8. Show Button IDs" << end1;
	cout << "9. Show Action IDs" << end1;
	cout << "10. COPY" << end1;
	cout << "11. PASTE" << end1;
	cout << "         " << end1; // the blank line
	cout << "Select a number:"; // Note, no end1 in this line 

	int choice; // Variable declaration
	cin >> choice; // Input

	// Decision
	if (choice == 1) // Note the double equal symbol
	{
		cout << "Processing 'Change Actions' choice..." << end1;
		// Note the use of single-quotes inside double-quotes.
	}

	if (choice == 2)
	{
		cout << "Processing 'Button Layout' choice..." << end1;
	}

	if (choice == 3)
	{
		 cout << "Processing 'Keybindings' choice..." << end1;
	}

	if (choice == 4)
	{
		cout << "Processing 'onEvent Scripts' choice..." << end1;
	}

	if (choice == 5)
	{
		cout << "Processing 'Main Menu Bar' choice..." << end1;
	}

	if (choice == 6)
	{
		cout << "Processing 'Misc Options' choice..." << end1;
	}

	if (choice == 7)
	{
		cout << "Processing 'Unlock Dragging' choice..." << end1;
	}

	if (choice == 8)
	{
		cout << "Processing 'Show Button IDs' choice..." << end1;
	}

	if (choice == 9)
	{
		cout << "Processing 'Show Action IDs' choice..." << end1;
	}

	if (choice == 10)
	{
		cout << "Processing 'COPY' choice..." << end1;
	}

	if (choice == 11)
	{
		cout << "Processing 'PASTE' choice..." << end1;
	}

	if (choice < 0 || choice > 11) // Note OR operator
	{
		cout << "Invalid Choice" << end1;
	}
	system("pause");
}