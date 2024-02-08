grammar Expr;

seaQl: expression EOF;

expression
    : fieldConstraint
    | expression WS logical_operator WS expression
    | '(' expression ')';

fieldConstraint: field WS OPERATOR WS value;
field: FIELD_NAME;
value: VALUE;
logical_operator: LOGICAL_OPERATOR;

LOGICAL_OPERATOR: 'AND' | 'OR';
VALUE: '"' .*? '"' | '"' .*? EOF;
OPERATOR: '='|'!='|'<'|'>'|'<='|'>=';
FIELD_NAME: [a-zA-Z] [a-zA-Z_0-9]*;
WS: [ \t\r\n]+;


