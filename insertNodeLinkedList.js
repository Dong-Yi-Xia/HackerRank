// Given the pointer to the head node of a linked list and an integer to insert at a certain position, 
// create a new node with the given integer as its data attribute, 
// insert this node at the desired position and return the head node.

// A position of 0 indicates head, a position of 1 indicates one node away from the head and so on. The
//  head pointer given may be null meaning that the initial list is empty.

//  insertNodeAtPosition has the following parameters:

//  head: a SinglyLinkedListNode pointer to the head of the list
//  data: an integer value to insert as data in your new node
//  position: an integer position to insert the new node, zero based indexing

//  head = 1 2 3
//  data = 4
//  position = 2

//  output = 1 2 4 3 


function insertNodeAtPosition(head, data, position) {
    let prev = null
    let curNode = head
    while (position > 0){
        prev = curNode
        curNode = curNode.next
        position--
    }

    let addNode = new SinglyLinkedListNode(data)
    prev.next = addNode
    addNode.next = curNode

    return head
}