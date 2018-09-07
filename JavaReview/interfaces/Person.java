public class Person implements Comparable<Person>{ //Comparable interface.. Comparable is Generic, so we have to specific the argument

    private String firstName;
    private String lastName;

    public Person(String last, String first){
        firstName = first;
        lastName = last;
    }

    public String toString(){
        return firstName + " " + lastName;
    }

    public int compareTo (Person other){

        int lastNameComp = lastName.compareTo(other.lastName); //this method is defined in within String?
        if(lastNameComp == 0){
            return firstName.compareTo(other.firstName);
        }
        else{
            return lastNameComp;
        }
    }
}