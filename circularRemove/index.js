// Find circular if circular remove circle.
//https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/
// m + k is a multiple of n
function circularRemove(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }
    if (slow === fast) {
        slow = list.getFirst();
        while(slow.next !== fast.next) {
            slow = slow.next;
            fast = fast.next;
        }

        fast.next = null;
        return true;
    }
    return false;
}

module.exports = circularRemove;

